import React from 'react';
import { Activity, FileText, Calendar, MessageSquare } from 'lucide-react';

export const RecentActivity = () => {
  const activities = [
    {
      id: 1,
      type: 'record',
      icon: FileText,
      title: 'Updated medical records',
      patient: 'Sarah Johnson',
      time: '2 hours ago'
    },
    {
      id: 2,
      type: 'appointment',
      icon: Calendar,
      title: 'New appointment scheduled',
      patient: 'Michael Chen',
      time: '4 hours ago'
    },
    {
      id: 3,
      type: 'message',
      icon: MessageSquare,
      title: 'New message received',
      patient: 'Emily Davis',
      time: '5 hours ago'
    }
  ];

  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-lg border border-white/10">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-white">Recent Activity</h2>
          <Activity className="w-5 h-5 text-gray-400" />
        </div>

        <div className="space-y-6">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
                  <activity.icon className="w-4 h-4 text-purple-400" />
                </div>
              </div>
              <div className="ml-4 flex-1">
                <p className="text-white font-medium">{activity.title}</p>
                <p className="text-sm text-gray-400">Patient: {activity.patient}</p>
                <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="w-full mt-6 py-2 text-sm text-purple-400 hover:text-purple-300 transition-colors">
          View All Activity
        </button>
      </div>
    </div>
  );
};