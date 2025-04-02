import React from 'react';
import { Activity, User, Shield, Database, Calendar } from 'lucide-react';

const activities = [
  {
    type: 'user',
    icon: User,
    message: 'New user registration',
    user: 'Sarah Johnson',
    time: '2 minutes ago'
  },
  {
    type: 'security',
    icon: Shield,
    message: 'Security alert detected',
    user: 'System',
    time: '15 minutes ago'
  },
  {
    type: 'database',
    icon: Database,
    message: 'Database backup completed',
    user: 'System',
    time: '1 hour ago'
  },
  {
    type: 'appointment',
    icon: Calendar,
    message: 'New appointment scheduled',
    user: 'Dr. Michael Chen',
    time: '2 hours ago'
  }
];

export const RecentActivity = () => {
  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-lg border border-white/10 p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Activity className="w-5 h-5 text-purple-400 mr-2" />
          <h2 className="text-lg font-semibold text-white">Recent Activity</h2>
        </div>
      </div>

      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="flex items-start p-4 bg-white/5 rounded-lg"
          >
            <div className="p-2 rounded-lg bg-purple-500/20">
              <activity.icon className="w-4 h-4 text-purple-400" />
            </div>
            <div className="ml-4 flex-1">
              <p className="text-white">{activity.message}</p>
              <div className="flex items-center mt-1">
                <p className="text-sm text-gray-400">{activity.user}</p>
                <span className="mx-2 text-gray-600">•</span>
                <p className="text-sm text-gray-400">{activity.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};