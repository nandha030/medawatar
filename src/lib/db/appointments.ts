import { db } from './index';

export interface Appointment {
  id?: string;
  userId: string;
  providerId: string;
  patientName: string;
  doctorName: string;
  date: Date;
  time: string;
  type: 'check-up' | 'follow-up' | 'consultation' | 'emergency';
  location: 'in-person' | 'virtual';
  status: 'scheduled' | 'confirmed' | 'completed' | 'cancelled';
  notes?: string;
  isVirtual: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export async function createAppointment(data: Omit<Appointment, 'id' | 'createdAt' | 'updatedAt'>) {
  const now = new Date();
  return db.appointments.add({
    ...data,
    createdAt: now,
    updatedAt: now
  });
}

export async function getAppointments(userId: string, role: string) {
  const query = role.toLowerCase() === 'patient' 
    ? { userId }
    : { providerId: userId };
    
  return db.appointments
    .where(query)
    .reverse()
    .sortBy('date');
}

export async function updateAppointment(id: string, data: Partial<Appointment>) {
  return db.appointments.update(id, {
    ...data,
    updatedAt: new Date()
  });
}

export async function cancelAppointment(id: string) {
  return db.appointments.update(id, {
    status: 'cancelled',
    updatedAt: new Date()
  });
}

export async function getTodayAppointments(userId: string, role: string) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  
  const query = role.toLowerCase() === 'patient'
    ? { userId }
    : { providerId: userId };
  
  return db.appointments
    .where(query)
    .filter(appointment => {
      const appointmentDate = new Date(appointment.date);
      return appointmentDate >= today && appointmentDate < tomorrow;
    })
    .sortBy('time');
}

export async function getUpcomingAppointments(userId: string, role: string) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  const query = role.toLowerCase() === 'patient'
    ? { userId }
    : { providerId: userId };
  
  return db.appointments
    .where(query)
    .filter(appointment => new Date(appointment.date) >= today)
    .sortBy('date');
}