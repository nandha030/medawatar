import { useState, useEffect } from 'react';
import { getSharedRecords, getPendingRequests, getNotifications } from '../lib/interop/api';
import type { SharedRecord, DataRequest, Notification } from '../lib/interop/types';

export function useSharedRecords(userId: string) {
  const [records, setRecords] = useState<SharedRecord[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (userId) {
      getSharedRecords(userId)
        .then(records => {
          setRecords(records);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching shared records:', error);
          setLoading(false);
        });
    }
  }, [userId]);

  return { records, loading };
}

export function usePendingRequests(userId: string) {
  const [requests, setRequests] = useState<DataRequest[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (userId) {
      getPendingRequests(userId)
        .then(requests => {
          setRequests(requests);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching pending requests:', error);
          setLoading(false);
        });
    }
  }, [userId]);

  return { requests, loading };
}

export function useNotifications(userId: string) {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (userId) {
      getNotifications(userId)
        .then(notifications => {
          setNotifications(notifications);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching notifications:', error);
          setLoading(false);
        });
    }
  }, [userId]);

  return { notifications, loading };
}