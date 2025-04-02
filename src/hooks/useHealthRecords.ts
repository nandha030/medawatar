import { useState, useEffect } from 'react';
import { db, type MedicalRecord } from '../lib/db';

export function useHealthRecords() {
  const [records, setRecords] = useState<MedicalRecord[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const currentUserId = localStorage.getItem('currentUserId');
    
    if (currentUserId) {
      db.medicalRecords
        .where('userId')
        .equals(parseInt(currentUserId))
        .toArray()
        .then(records => {
          setRecords(records);
          setIsLoading(false);
        })
        .catch(error => {
          console.error('Error fetching records:', error);
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, []);

  return { records, isLoading };
}