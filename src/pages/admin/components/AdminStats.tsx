import React from 'react';
import { Users, Activity, Shield, Clock } from 'lucide-react';

const stats = [
  {
    label: 'Total Users',
    value: '15,234',
    change: '+12.5%',
    trend: 'up',
    icon: Users,
    color: 'text-blue-400'
  },
  {
    label: 'System Uptime',
    value: '99.99%',
    change: 'Last 30 days',
    trend: 'stable',
    icon: Activity,
    color: 'text-green-400'
  },
  {
    label: 'Security Score',
    value: '94/100',
    change: '+2 points',
    trend: 'up',
    icon: Shield,
    color: 'text-purple-400'
  },
  {
    label: 'Response Time',
    value: '45ms',
    change: '-5ms',
    trend: 'down',
    icon: Clock,
    color: 'text-pink-400'
  }
];

export const AdminStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white/5 backdrop-blur-lg rounded-lg p-6 border border-white/10"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-400">{stat.label}</p>
              <p className="text-2xl font-semibold text-white mt-1">{stat.value}</p>
              <p className={`text-sm ${
                stat.trend === 'up' ? 'text-green-400' :
                stat.trend === 'down' ? 'text-red-400' :
                'text-gray-400'
              }`}>
                {stat.change}
              </p>
            </div>
            <div className={`p-3 rounded-lg bg-white/5 ${stat.color}`}>
              <stat.icon className="w-6 h-6" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};