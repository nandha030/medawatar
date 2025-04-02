import React from 'react';
import { useUser } from '../../../hooks/useUser';
import { useAppointments } from '../../../hooks/useAppointments';
import { DashboardLayout } from '../DashboardLayout';
import { DashboardSidebar } from '../DashboardSidebar';
import { Calendar, Clock, User, Video } from 'lucide-react';
import { Button } from '../../../components/ui/Button';

export const AppointmentsDashboard = () => {
  const { user, loading: userLoading } = useUser();
  const { appointments, loading: appointmentsLoading } = useAppointments(
    user?.id || '',
    user?.userType || ''
  );

  if (userLoading || !user) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-quantum-900 to-quantum-800 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  return (
    <DashboardLayout>
      <DashboardSidebar user={user} />
      <div className="flex-1 overflow-hidden">
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="bg-white/5 backdrop-blur-lg border-b border-white/10 px-8 py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-semibold text-white">Appointments</h1>
                <p className="text-gray-400 mt-1">Manage your healthcare appointments</p>
              </div>
              {user.userType === 'PATIENT' && (
                <Button>
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Appointment
                </Button>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-8">
            {appointmentsLoading ? (
              <div className="flex items-center justify-center h-64">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-purple-500"></div>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Today's Appointments */}
                <div className="bg-white/5 backdrop-blur-lg rounded-lg border border-white/10 p-6">
                  <h2 className="text-lg font-medium text-white mb-4">Today's Appointments</h2>
                  <div className="space-y-4">
                    {appointments.map((appointment) => (
                      <div
                        key={appointment.id}
                        className="flex items-center justify-between p-4 bg-white/5 rounded-lg"
                      >
                        <div className="flex items-center">
                          <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                            <User className="w-6 h-6 text-purple-400" />
                          </div>
                          <div className="ml-4">
                            <h3 className="text-white font-medium">
                              {user.userType === 'PATIENT' ? appointment.doctorName : appointment.patientName}
                            </h3>
                            <div className="flex items-center text-sm text-gray-400 mt-1">
                              <Clock className="w-4 h-4 mr-2" />
                              {appointment.time}
                              {appointment.isVirtual && (
                                <>
                                  <span className="mx-2">•</span>
                                  <Video className="w-4 h-4 mr-1" />
                                  Virtual
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          {appointment.isVirtual ? 'Join Call' : 'View Details'}
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Upcoming Appointments */}
                <div className="bg-white/5 backdrop-blur-lg rounded-lg border border-white/10 p-6">
                  <h2 className="text-lg font-medium text-white mb-4">Upcoming Appointments</h2>
                  {/* Similar structure to Today's Appointments */}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};