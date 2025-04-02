export interface SharedRecord {
  id: string;
  patientId: string;
  doctorId: string;
  partnerId?: string;
  type: RecordType;
  data: Record<string, any>;
  permissions: Permission[];
  createdAt: Date;
  updatedAt: Date;
}

export type RecordType = 
  | 'MEDICAL_HISTORY'
  | 'LAB_RESULT'
  | 'PRESCRIPTION'
  | 'IMAGING'
  | 'CONSULTATION'
  | 'REFERRAL';

export type Permission =
  | 'VIEW'
  | 'EDIT'
  | 'SHARE'
  | 'DELETE';

export interface DataRequest {
  requesterId: string;
  patientId: string;
  recordType: RecordType;
  purpose: string;
  status: 'PENDING' | 'APPROVED' | 'REJECTED';
  expiresAt: Date;
}

export interface Notification {
  id: string;
  userId: string;
  type: NotificationType;
  title: string;
  message: string;
  relatedId?: string;
  read: boolean;
  createdAt: Date;
}

export type NotificationType =
  | 'DATA_REQUEST'
  | 'PERMISSION_GRANTED'
  | 'NEW_RECORD'
  | 'RECORD_UPDATE'
  | 'APPOINTMENT_UPDATE';