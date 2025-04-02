import React from 'react';
import { Calendar, Clock, Users, CheckCircle } from 'lucide-react';
import type { User } from '../../../lib/db';

interface AppointmentStatsProps {
  user: User;
}

export const AppointmentStats: React.FC<AppointmentStatsProps> = ({ user }) => {
  const stats = {
    PATIENT: [
      { icon: Calendar, label: 'Upcoming', value: '3', color: 'text-blue-400' },
      { icon: Clock, label: 'Completed', value: '12', color: 'text-green-400' },
      { icon: Users, label: 'Doctors Seen', value: '4', color: 'text-purple-400' },
      { icon: CheckCircle, label: 'Follow-ups', value: '2', color: 'text-pink-400' }
    ],
    DOCTOR: [
      { icon: Calendar, label: "Today's Appointments", value: '8', color: 'text-blue-400' },
      { icon: Clock, label: 'Available Slots', value: '5', color: 'text-green-400' },
      { icon: Users, label: 'Total Patients', value: '120', color: 'text-purple-400' },
      { icon: CheckCircle, label: 'Completed Today', value: '3', color: 'text-pink-400' }
    ],
    HEALTHCARE_PROVIDER: [
      { icon: Calendar, label: 'Total Appointments', value: '45', color: 'text-blue-400' },
      { icon: Clock, label: 'Available Doctors', value: '12', color: 'text-green-400' },
      { icon: Users, label: 'Active Patients', value: '350', color: 'text-purple-400' },
      { icon: CheckCircle, label: 'Success Rate', value: '98%', color: 'text-pink-400' }
    ]
  };

  const userStats = stats[user.userType as keyof typeof stats] || stats.PATIENT;

  return (
    <div className="bg-white/5 backdrop-blur-lg border-b border-white/10 px-8 py-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-white">Appointments</h1>
          <p className="text-gray-400 mt-1">Manage your appointments and schedules</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {userStats.map((stat, index) => (
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
    </div>
  );
};