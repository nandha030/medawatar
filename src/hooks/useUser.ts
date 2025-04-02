import { useState, useEffect } from 'react';
import { db, type User } from '../lib/db';

export interface UseUserReturn {
  user: User | null;
  loading: boolean;
  logout: () => void;
}

export function useUser() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const currentUserId = localStorage.getItem('currentUserId');
    
    if (currentUserId) {
      db.users.get(parseInt(currentUserId))
        .then(user => {
          setUser(user || null);
          setLoading(false);
        })
        .catch(() => {
          setUser(null);
          setLoading(false);
        });
    } else {
      setUser(null);
      setLoading(false);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem('currentUserId');
    setUser(null);
  };

  return { user, loading, logout };
}