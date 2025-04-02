import React from 'react';
import { Users, Clock, Calendar, TrendingUp } from 'lucide-react';

export const StaffStats = () => {
  const stats = [
    {
      icon: Users,
      label: 'Total Staff',
      value: '48',
      change: '+3 this month',
      color: 'text-blue-400'
    },
    {
      icon: Clock,
      label: 'On Duty',
      value: '32',
      change: 'Current shift',
      color: 'text-green-400'
    },
    {
      icon: Calendar,
      label: 'Scheduled',
      value: '156',
      change: 'Next 7 days',
      color: 'text-purple-400'
    },
    {
      icon: TrendingUp,
      label: 'Efficiency',
      value: '94%',
      change: '+2.5% this month',
      color: 'text-pink-400'
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