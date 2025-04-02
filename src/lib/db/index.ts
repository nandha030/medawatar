import Dexie from 'dexie';
import type { Table } from 'dexie';
import type { Appointment } from './appointments';
import type { Message, Conversation } from './messages';
import type { HealthMetric } from './monitoring';

export class MedawatarDB extends Dexie {
  appointments!: Table<Appointment>;
  messages!: Table<Message>;
  conversations!: Table<Conversation>;
  healthMetrics!: Table<HealthMetric>;

  constructor() {
    super('medawatarDB');
    
    this.version(1).stores({
      appointments: '++id, userId, providerId, date, status',
      messages: '++id, senderId, receiverId, conversationId, createdAt',
      conversations: '++id, participants, updatedAt',
      healthMetrics: '++id, userId, type, timestamp'
    });
  }
}

export const db = new MedawatarDB();