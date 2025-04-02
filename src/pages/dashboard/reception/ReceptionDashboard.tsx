import React from 'react';
import { useUser } from '../../../hooks/useUser';
import { DashboardLayout } from '../DashboardLayout';
import { DashboardSidebar } from '../DashboardSidebar';
import { ReceptionStats } from './ReceptionStats';
import { AppointmentQueue } from './AppointmentQueue';
import { PatientRegistration } from './PatientRegistration';
import { ReceptionActivity } from './ReceptionActivity';

export const ReceptionDashboard = () => {
  const { user, loading } = useUser();

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
          {/* Header */}
          <div className="flex-shrink-0 bg-white/5 backdrop-blur-lg border-b border-white/10 px-8 py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-semibold text-white">Reception Dashboard</h1>
                <p className="text-gray-400 mt-1">Manage appointments and patient registration</p>
              </div>
            </div>
            
            <div className="mt-6">
              <ReceptionStats />
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1 overflow-y-auto p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content - Left 2 Columns */}
              <div className="lg:col-span-2 space-y-8">
                <AppointmentQueue />
                <PatientRegistration />
              </div>

              {/* Sidebar - Right Column */}
              <div className="space-y-8">
                <ReceptionActivity />
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};