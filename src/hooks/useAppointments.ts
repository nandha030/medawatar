import { useState, useEffect, useCallback } from 'react';
import { getAppointments, getTodayAppointments, getUpcomingAppointments } from '../lib/db/appointments';
import type { Appointment } from '../lib/db/appointments';

export function useAppointments(userId: string, role: string, type: 'all' | 'today' | 'upcoming' = 'all') {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchAppointments = useCallback(async () => {
    try {
      let result;
      switch (type) {
        case 'today':
          result = await getTodayAppointments(userId, role);
          break;
        case 'upcoming':
          result = await getUpcomingAppointments(userId, role);
          break;
        default:
          result = await getAppointments(userId, role);
      }
      setAppointments(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch appointments');
    } finally {
      setLoading(false);
    }
  }, [userId, role, type]);

  useEffect(() => {
    if (userId) {
      fetchAppointments();
    }
  }, [userId, role, fetchAppointments]);

  return { appointments, loading, error };
}