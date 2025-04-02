import React from 'react';
import { FileText, Calendar, Clock, AlertTriangle } from 'lucide-react';
import type { MedicalRecord } from '../../../lib/db';

interface RecordStatsProps {
  records: MedicalRecord[];
}

export const RecordStats: React.FC<RecordStatsProps> = ({ records }) => {
  const stats = [
    {
      icon: FileText,
      label: 'Total Records',
      value: records.length,
      color: 'text-blue-400'
    },
    {
      icon: Calendar,
      label: 'This Month',
      value: records.filter(r => {
        const date = new Date(r.date);
        const now = new Date();
        return date.getMonth() === now.getMonth() && date.getFullYear() === now.getFullYear();
      }).length,
      color: 'text-green-400'
    },
    {
      icon: Clock,
      label: 'Pending Review',
      value: records.filter(r => r.type === 'pending').length,
      color: 'text-yellow-400'
    },
    {
      icon: AlertTriangle,
      label: 'Requires Action',
      value: records.filter(r => r.type === 'action_required').length,
      color: 'text-red-400'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white/5 backdrop-blur-lg rounded-lg p-4 border border-white/10"
        >
          <div className="flex items-center">
            <div className={`p-2 rounded-lg bg-white/10 ${stat.color}`}>
              <stat.icon className="w-5 h-5" />
            </div>
            <div className="ml-3">
              <p className="text-sm text-gray-400">{stat.label}</p>
              <p className="text-2xl font-semibold text-white">{stat.value}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};