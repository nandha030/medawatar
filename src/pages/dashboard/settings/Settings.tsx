import React from 'react';
import { useUser } from '../../../hooks/useUser';
import { DashboardLayout } from '../DashboardLayout';
import { DashboardSidebar } from '../DashboardSidebar';
import { User, Lock, Bell, Link2, Shield, Palette, Laptop, Languages } from 'lucide-react';
import { cn } from '../../../lib/utils';

const settingsSections = [
  {
    id: 'account',
    label: 'Account',
    icon: User,
    description: 'Manage your account settings and preferences'
  },
  {
    id: 'security',
    label: 'Security',
    icon: Lock,
    description: 'Update your security settings and passwords'
  },
  {
    id: 'notifications',
    label: 'Notifications',
    icon: Bell,
    description: 'Configure how you receive notifications'
  },
  {
    id: 'appearance',
    label: 'Appearance',
    icon: Palette,
    description: 'Customize how Medawatar looks on your device'
  },
  {
    id: 'devices',
    label: 'Devices',
    icon: Laptop,
    description: 'Manage your connected devices and sessions'
  },
  {
    id: 'language',
    label: 'Language & Region',
    icon: Languages,
    description: 'Set your language and regional preferences'
  },
  {
    id: 'integrations',
    label: 'Integrations',
    icon: Link2,
    description: 'Manage connected apps and services'
  },
  {
    id: 'privacy',
    label: 'Privacy & Security',
    icon: Shield,
    description: 'Control your privacy and security settings'
  }
];

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
          {/* Settings Navigation */}
          <div className="w-80 border-r border-white/10 overflow-y-auto">
            <nav className="p-4 space-y-2">
              {settingsSections.map(section => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={cn(
                    "w-full text-left px-4 py-3 rounded-lg transition-all duration-200",
                    "hover:bg-white/5 group relative overflow-hidden",
                    activeSection === section.id
                      ? "bg-purple-500/20 text-purple-400"
                      : "text-gray-400 hover:text-white"
                  )}
                >
                  <div className="flex items-center">
                    <section.icon className="w-5 h-5 mr-3" />
                    <div>
                      <div className="font-medium">{section.label}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-gray-300">
                        {section.description}
                      </div>
                    </div>
                  </div>
                  {activeSection === section.id && (
                    <div className="absolute inset-y-0 left-0 w-1 bg-purple-500 rounded-r"></div>
                  )}
                </button>
              ))}
            </nav>
          </div>

          {/* Settings Content */}
          <div className="flex-1 overflow-y-auto p-8">
            <div className="max-w-3xl mx-auto">
              {/* Content will be rendered here based on activeSection */}
              <div className="bg-white/5 backdrop-blur-lg rounded-lg border border-white/10 p-6">
                <h2 className="text-xl font-semibold text-white mb-6">
                  {settingsSections.find(s => s.id === activeSection)?.label}
                </h2>
                {/* Settings content will be rendered here */}
                <p className="text-gray-400">
                  Settings content for {activeSection} will be displayed here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};