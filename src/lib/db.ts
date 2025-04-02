import Dexie, { type Table } from 'dexie';

export interface User {
  id?: number;
  email: string;
  name: string;
  password: string; // Hashed
  userType: UserType;
  quantumId: string;
  profileComplete: boolean;
  createdAt: Date;
}

export interface Profile {
  id?: number;
  userId: number;
  bloodType?: string;
  dateOfBirth?: Date;
  gender?: string;
  phoneNumber?: string;
  emergencyContact?: string;
  allergies?: string;
  specialization?: string;
  license?: string;
  organization?: string;
}

export interface Address {
  id?: number;
  profileId: number;
  street: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
}

export interface MedicalRecord {
  id?: number;
  userId: number;
  type: string;
  description: string;
  date: Date;
  provider: string;
  attachments?: string; // JSON string of URLs
}

export interface Appointment {
  id?: number;
  userId: number;
  providerId: number;
  date: Date;
  status: AppointmentStatus;
  notes?: string;
}

export type UserType = 
  | 'PATIENT'
  | 'DOCTOR'
  | 'HEALTHCARE_PROVIDER'
  | 'TECH_PARTNER'
  | 'SECURITY_PROVIDER'
  | 'RESEARCH_PARTNER'
  | 'INSURANCE_PARTNER'
  | 'TRAVEL_PARTNER';

export type AppointmentStatus = 
  | 'SCHEDULED'
  | 'CONFIRMED'
  | 'COMPLETED'
  | 'CANCELLED';

export class MedawatarDB extends Dexie {
  users!: Table<User>;
  profiles!: Table<Profile>;
  addresses!: Table<Address>;
  medicalRecords!: Table<MedicalRecord>;
  appointments!: Table<Appointment>;

  constructor() {
    super('medawatarDB');
    this.version(1).stores({
      users: '++id, email, userType, quantumId',
      profiles: '++id, userId',
      addresses: '++id, profileId',
      medicalRecords: '++id, userId, type, date',
      appointments: '++id, userId, providerId, date, status'
    });
  }
}

export const db = new MedawatarDB();