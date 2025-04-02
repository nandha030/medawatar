import { db } from './db';
import { generateQuantumId } from './utils';
import type { User, UserType } from './db';

interface SignupData {
  email: string;
  password: string;
  name: string;
  userType: UserType;
}

interface LoginData {
  email: string;
  password: string;
}

export async function signup(data: SignupData): Promise<User> {
  const hashedPassword = await hashPassword(data.password);
  const quantumId = generateQuantumId();

  const user: User = {
    email: data.email,
    password: hashedPassword,
    name: data.name,
    userType: data.userType,
    quantumId,
    profileComplete: false,
    createdAt: new Date()
  };

  const id = await db.users.add(user);
  await db.profiles.add({ userId: id });

  return { ...user, id };
}

export async function login(data: LoginData): Promise<User | null> {
  const user = await db.users
    .where('email')
    .equals(data.email)
    .first();

  if (!user) return null;

  const isValid = await verifyPassword(data.password, user.password);
  if (!isValid) return null;

  return user;
}

// TODO: Implement proper password hashing
async function hashPassword(password: string): Promise<string> {
  // For development only - replace with proper hashing
  return password;
}

// TODO: Implement proper password verification
async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  // For development only - replace with proper verification
  return password === hashedPassword;
}