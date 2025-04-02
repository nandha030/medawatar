import React from 'react';
import { Calendar, Clock, User, Video } from 'lucide-react';
import { Button } from '../../../components/ui/Button';
import type { User as UserType } from '../../../lib/db';

interface AppointmentListProps {
  user: UserType;
}

export const AppointmentList: React.FC<AppointmentListProps> = ({ user }) => {
  const appointments = [
    {
      id: 1,
      patientName: 'Sarah Johnson',
      doctorName: 'Dr. Michael Chen',
      date: '2024-03-20',
      time: '09:00 AM',
      type: 'Check-up',
      isVirtual: true,
      status: 'upcoming'
    },
    {
      id: 2,
      patientName: 'John Smith',
      doctorName: 'Dr. Emily Davis',
      date: '2024-03-21',
      time: '02:30 PM',
      type: 'Follow-up',
      isVirtual: false,
      status: 'upcoming'
    }
  ];

  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-lg border border-white/10 p-6">
      <h2 className="text-xl font-semibold text-white mb-6">Upcoming Appointments</h2>
      <div className="space-y-4">
        {appointments.map((appointment) => (
          <div
            key={appointment.id}
            className="bg-white/5 rounded-lg p-4 space-y-3"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <User className="w-5 h-5 text-purple-400 mr-2" />
                <span className="text-white">
                  {user.userType === 'PATIENT' ? appointment.doctorName : appointment.patientName}
                </span>
              </div>
              {appointment.isVirtual && (
                <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs flex items-center">
                  <Video className="w-3 h-3 mr-1" />
                  Virtual
                </span>
              )}
            </div>

            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                {appointment.date}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {appointment.time}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">{appointment.type}</span>
              <Button size="sm" variant="outline">
                {user.userType === 'PATIENT' ? 'Join Call' : 'Start Session'}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};