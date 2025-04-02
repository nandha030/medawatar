import React from 'react';
import { Users, Calendar, Clock, TrendingUp } from 'lucide-react';

export const DoctorStats = () => {
  const stats = [
    {
      icon: Users,
      label: 'Total Patients',
      value: '248',
      change: '+12 this month',
      color: 'text-blue-400'
    },
    {
      icon: Calendar,
      label: 'Appointments Today',
      value: '8',
      change: '2 pending',
      color: 'text-green-400'
    },
    {
      icon: Clock,
      label: 'Average Wait Time',
      value: '12m',
      change: '-2m from last week',
      color: 'text-yellow-400'
    },
    {
      icon: TrendingUp,
      label: 'Patient Satisfaction',
      value: '94%',
      change: '+2.5% this month',
      color: 'text-purple-400'
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
              <p className="text-sm text-gray-400">{stat.change}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};