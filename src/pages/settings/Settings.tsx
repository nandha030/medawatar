import React from 'react';
import { useUser } from '../../hooks/useUser';
import { DashboardLayout } from '../dashboard/DashboardLayout';
import { DashboardSidebar } from '../dashboard/DashboardSidebar';
import { SettingsNavigation } from './SettingsNavigation';
import { SettingsContent } from './SettingsContent';

export const Settings = () => {
  const { user, loading } = useUser();
  const [activeSection, setActiveSection] = React.useState('account');

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
        {/* Settings Header */}
        <div className="bg-white/5 backdrop-blur-lg border-b border-white/10 px-8 py-6">
          <h1 className="text-2xl font-semibold text-white">Settings</h1>
          <p className="text-gray-400 mt-1">Manage your account settings and preferences</p>
        </div>

        <div className="flex h-[calc(100vh-10rem)]">
          <SettingsNavigation 
            activeSection={activeSection} 
            onSectionChange={setActiveSection} 
          />
          <SettingsContent activeSection={activeSection} />
        </div>
      </div>
    </DashboardLayout>
  );
};