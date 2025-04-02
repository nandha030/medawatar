import Dexie from 'dexie';
import type { SharedRecord, DataRequest, Notification } from './types';

class InteropDB extends Dexie {
  sharedRecords!: Dexie.Table<SharedRecord, string>;
  dataRequests!: Dexie.Table<DataRequest, string>;
  notifications!: Dexie.Table<Notification, string>;

  constructor() {
    super('interopDB');
    this.version(1).stores({
      sharedRecords: '++id, patientId, doctorId, partnerId, type',
      dataRequests: '++id, requesterId, patientId, status',
      notifications: '++id, userId, type, read'
    });
  }
}

export const interopDB = new InteropDB();