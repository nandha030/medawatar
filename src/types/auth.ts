export interface User {
  id: string;
  name: string;
  email: string;
  role: 'patient' | 'provider' | 'partner' | 'admin';
  quantumId: string;
  profileComplete: boolean;
  createdAt: string;
}

export interface AuthState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
}