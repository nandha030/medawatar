import React from 'react';
import { useUser } from '../../hooks/useUser';
import { DashboardLayout } from '../dashboard/DashboardLayout';
import { DashboardSidebar } from '../dashboard/DashboardSidebar';
import { AppointmentCalendar } from './components/AppointmentCalendar';
import { AppointmentList } from './components/AppointmentList';
import { AppointmentStats } from './components/AppointmentStats';
import { NewAppointmentModal } from './components/NewAppointmentModal';

export const AppointmentPage = () => {
  const { user, loading } = useUser();
  const [isNewAppointmentModalOpen, setIsNewAppointmentModalOpen] = React.useState(false);

  if (loading || !user) {
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
          <AppointmentStats user={user} />
          <div className="flex-1 overflow-y-auto p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <AppointmentCalendar user={user} onNewAppointment={() => setIsNewAppointmentModalOpen(true)} />
              </div>
              <div>
                <AppointmentList user={user} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <NewAppointmentModal 
        isOpen={isNewAppointmentModalOpen}
        onClose={() => setIsNewAppointmentModalOpen(false)}
        user={user}
      />
    </DashboardLayout>
  );
};