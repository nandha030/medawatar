import { db } from './index';

export interface HealthMetric {
  id: string;
  userId: string;
  type: 'heart-rate' | 'blood-pressure' | 'blood-sugar' | 'weight' | 'temperature';
  value: number;
  unit: string;
  timestamp: Date;
  notes?: string;
}

export async function recordMetric(data: Omit<HealthMetric, 'id'>) {
  return db.healthMetrics.add({
    ...data,
    timestamp: new Date()
  });
}

export async function getMetrics(userId: string, type?: string, startDate?: Date, endDate?: Date) {
  let query = db.healthMetrics.where('userId').equals(userId);
  
  if (type) {
    query = query.and(metric => metric.type === type);
  }
  
  if (startDate) {
    query = query.and(metric => metric.timestamp >= startDate);
  }
  
  if (endDate) {
    query = query.and(metric => metric.timestamp <= endDate);
  }
  
  return query.reverse().sortBy('timestamp');
}

export async function getLatestMetrics(userId: string) {
  const metrics = await db.healthMetrics
    .where('userId')
    .equals(userId)
    .reverse()
    .sortBy('timestamp');

  const latest: Record<string, HealthMetric> = {};
  
  for (const metric of metrics) {
    if (!latest[metric.type]) {
      latest[metric.type] = metric;
    }
  }
  
  return Object.values(latest);
}