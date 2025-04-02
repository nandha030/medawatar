import { interopDB } from './store';
import type { SharedRecord, DataRequest, RecordType, Permission, Notification } from './types';

export async function shareRecord(
  record: Omit<SharedRecord, 'id' | 'createdAt' | 'updatedAt'>
): Promise<string> {
  const id = await interopDB.sharedRecords.add({
    ...record,
    createdAt: new Date(),
    updatedAt: new Date()
  });

  // Create notification for all involved parties
  const parties = [record.patientId, record.doctorId];
  if (record.partnerId) parties.push(record.partnerId);

  await Promise.all(parties.map(userId =>
    createNotification({
      userId,
      type: 'NEW_RECORD',
      title: 'New Shared Record',
      message: `A new ${record.type.toLowerCase()} record has been shared with you.`,
      relatedId: String(id),
      read: false,
      createdAt: new Date()
    })
  ));

  return String(id);
}

export async function requestAccess(request: Omit<DataRequest, 'status' | 'expiresAt'>): Promise<void> {
  const expiresAt = new Date();
  expiresAt.setDate(expiresAt.getDate() + 30); // 30-day expiration

  await interopDB.dataRequests.add({
    ...request,
    status: 'PENDING',
    expiresAt
  });

  // Notify patient about the request
  await createNotification({
    userId: request.patientId,
    type: 'DATA_REQUEST',
    title: 'New Data Access Request',
    message: `A healthcare provider has requested access to your ${request.recordType.toLowerCase()} records.`,
    read: false,
    createdAt: new Date()
  });
}

export async function grantAccess(requestId: string): Promise<void> {
  await interopDB.dataRequests.update(requestId, { status: 'APPROVED' });
  
  const request = await interopDB.dataRequests.get(requestId);
  if (!request) return;

  await createNotification({
    userId: request.requesterId,
    type: 'PERMISSION_GRANTED',
    title: 'Access Granted',
    message: `Access to requested ${request.recordType.toLowerCase()} records has been granted.`,
    relatedId: requestId,
    read: false,
    createdAt: new Date()
  });
}

export async function getSharedRecords(userId: string, type?: RecordType): Promise<SharedRecord[]> {
  return interopDB.sharedRecords
    .where('patientId')
    .equals(userId)
    .or('doctorId')
    .equals(userId)
    .or('partnerId')
    .equals(userId)
    .filter(record => !type || record.type === type)
    .toArray();
}

export async function getPendingRequests(userId: string): Promise<DataRequest[]> {
  return interopDB.dataRequests
    .where('patientId')
    .equals(userId)
    .and(request => request.status === 'PENDING')
    .toArray();
}

export async function getNotifications(userId: string): Promise<Notification[]> {
  return interopDB.notifications
    .where('userId')
    .equals(userId)
    .reverse()
    .sortBy('createdAt');
}

async function createNotification(notification: Omit<Notification, 'id'>): Promise<void> {
  await interopDB.notifications.add(notification);
}