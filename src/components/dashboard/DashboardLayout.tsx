import React from 'react';
import { useLocation } from 'react-router-dom';
import { DashboardNav } from './DashboardNav';
import { DashboardHeader } from './DashboardHeader';
import type { User } from '../../lib/db';

interface DashboardLayoutProps {
  user: User;
  children: React.ReactNode;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ user, children }) => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div className="min-h-screen bg-gradient-to-b from-quantum-900 to-quantum-800">
      <div className="flex">
        {/* Sidebar */}
        <aside className="fixed left-0 top-0 h-screen w-64 bg-white/5 backdrop-blur-lg border-r border-white/10">
          <div className="p-6">
            {!isAdminRoute && <DashboardNav user={user} />}
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 ml-64">
          {!isAdminRoute && <DashboardHeader user={user} />}
          <main className="p-8">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};