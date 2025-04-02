import React from 'react';
import { Calendar, Clock, User, Video } from 'lucide-react';
import { Button } from '../../../components/ui/Button';

export const UpcomingAppointments = () => {
  const appointments = [
    {
      id: 1,
      patientName: 'Sarah Johnson',
      time: '09:00 AM',
      type: 'Check-up',
      isVirtual: true,
      status: 'confirmed'
    },
    {
      id: 2,
      patientName: 'Michael Chen',
      time: '10:30 AM',
      type: 'Follow-up',
      isVirtual: false,
      status: 'confirmed'
    },
    {
      id: 3,
      patientName: 'Emily Davis',
      time: '02:00 PM',
      type: 'Consultation',
      isVirtual: true,
      status: 'pending'
    }
  ];

  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-lg border border-white/10 overflow-hidden">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-white">Today's Appointments</h2>
          <Button variant="outline" size="sm">
            <Calendar className="w-4 h-4 mr-2" />
            View Schedule
          </Button>
        </div>

        <div className="space-y-4">
          {appointments.map((appointment) => (
            <div
              key={appointment.id}
              className="flex items-center justify-between p-4 bg-white/5 rounded-lg"
            >
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                  <User className="w-5 h-5 text-purple-400" />
                </div>
                <div className="ml-4">
                  <p className="text-white font-medium">{appointment.patientName}</p>
                  <div className="flex items-center text-sm text-gray-400">
                    <Clock className="w-4 h-4 mr-1" />
                    {appointment.time} - {appointment.type}
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                {appointment.isVirtual && (
                  <span className="flex items-center px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-sm">
                    <Video className="w-4 h-4 mr-1" />
                    Virtual
                  </span>
                )}
                <Button size="sm">
                  Start Session
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};