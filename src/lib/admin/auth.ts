import { db } from '../db';

export interface AdminUser {
  id: string;
  username: string;
  password: string;
  role: 'SUPER_ADMIN' | 'ADMIN' | 'MODERATOR';
  permissions: string[];
  lastLogin?: Date;
}

// Default admin credentials - in production these should be in a secure database
const defaultAdmins: AdminUser[] = [
  {
    id: 'admin1',
    username: 'admin@medawatar.com',
    // In production, use hashed passwords
    password: 'Admin123!', 
    role: 'SUPER_ADMIN',
    permissions: ['ALL']
  },
  {
    id: 'admin2',
    username: 'moderator@medawatar.com',
    password: 'Mod123!',
    role: 'MODERATOR',
    permissions: ['VIEW', 'EDIT']
  }
];

export async function adminLogin(username: string, password: string): Promise<AdminUser | null> {
  const admin = defaultAdmins.find(
    user => user.username === username && user.password === password
  );

  if (!admin) return null;

  // Store admin session
  localStorage.setItem('adminToken', admin.id);
  return admin;
}

export function isAdminAuthenticated(): boolean {
  return Boolean(localStorage.getItem('adminToken'));
}

export function getAdminUser(): AdminUser | null {
  const adminId = localStorage.getItem('adminToken');
  if (!adminId) return null;
  
  return defaultAdmins.find(admin => admin.id === adminId) || null;
}

export function adminLogout(): void {
  localStorage.removeItem('adminToken');
}