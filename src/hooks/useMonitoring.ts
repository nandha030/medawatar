import { useState, useEffect } from 'react';
import { getLatestMetrics, getMetrics } from '../lib/db/monitoring';
import type { HealthMetric } from '../lib/db/monitoring';

export function useLatestMetrics(userId: string) {
  const [metrics, setMetrics] = useState<HealthMetric[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (userId) {
      getLatestMetrics(userId)
        .then(metrics => {
          setMetrics(metrics);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching metrics:', error);
          setLoading(false);
        });
    }
  }, [userId]);

  return { metrics, loading };
}

export function useMetricHistory(userId: string, type?: string, startDate?: Date, endDate?: Date) {
  const [metrics, setMetrics] = useState<HealthMetric[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (userId) {
      getMetrics(userId, type, startDate, endDate)
        .then(metrics => {
          setMetrics(metrics);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching metric history:', error);
          setLoading(false);
        });
    }
  }, [userId, type, startDate, endDate]);

  return { metrics, loading };
}