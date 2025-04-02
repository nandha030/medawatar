import React from 'react';
import { AdminLayout } from './AdminLayout';
import { AdminStats } from './components/AdminStats';
import { UserManagement } from './components/users/UserManagement';
import { SystemHealth } from './components/SystemHealth';
import { PartnerManagement } from './components/partners/PartnerManagement';
import { RecentActivity } from './components/RecentActivity';

export const AdminDashboard = () => {
  return (
    <AdminLayout>
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-white">Admin Dashboard</h1>
          <p className="text-gray-400 mt-1">Monitor and manage system operations</p>
        </div>

        <div className="space-y-8">
          <AdminStats />
          
          <UserManagement />
          <SystemHealth />
          <PartnerManagement />

          <RecentActivity />
        </div>
      </div>
    </AdminLayout>
  );
};