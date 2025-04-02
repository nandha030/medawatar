import React from 'react';
import { Bell, Mail, MessageSquare, Calendar } from 'lucide-react';
import type { User } from '../../../lib/db';

interface NotificationSettingsProps {
  user: User;
}

export const NotificationSettings: React.FC<NotificationSettingsProps> = ({ user }) => {
  return (
    <div className="max-w-3xl">
      {/* Email Notifications */}
      <div className="bg-white/5 backdrop-blur-lg rounded-lg border border-white/10 p-6 mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-lg font-medium text-white">Email Notifications</h2>
            <p className="text-sm text-gray-400 mt-1">Manage your email preferences</p>
          </div>
          <Mail className="w-5 h-5 text-purple-400" />
        </div>
        <div className="space-y-4">
          {[
            { label: 'Appointment Reminders', description: 'Get notified about upcoming appointments' },
            { label: 'Medical Updates', description: 'Receive updates about test results and records' },
            { label: 'Security Alerts', description: 'Important alerts about your account security' }
          ].map((setting, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
              <div>
                <p className="text-white">{setting.label}</p>
                <p className="text-sm text-gray-400">{setting.description}</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-500/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-500"></div>
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Push Notifications */}
      <div className="bg-white/5 backdrop-blur-lg rounded-lg border border-white/10 p-6 mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-lg font-medium text-white">Push Notifications</h2>
            <p className="text-sm text-gray-400 mt-1">Manage your mobile notifications</p>
          </div>
          <Bell className="w-5 h-5 text-purple-400" />
        </div>
        <div className="space-y-4">
          {[
            { label: 'Instant Alerts', description: 'Real-time notifications for important updates' },
            { label: 'Message Notifications', description: 'Get notified when you receive messages' },
            { label: 'Appointment Changes', description: 'Notifications about schedule changes' }
          ].map((setting, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
              <div>
                <p className="text-white">{setting.label}</p>
                <p className="text-sm text-gray-400">{setting.description}</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-500/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-500"></div>
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Communication Preferences */}
      <div className="bg-white/5 backdrop-blur-lg rounded-lg border border-white/10 p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-lg font-medium text-white">Communication Preferences</h2>
            <p className="text-sm text-gray-400 mt-1">Manage how we communicate with you</p>
          </div>
          <MessageSquare className="w-5 h-5 text-purple-400" />
        </div>
        <div className="space-y-4">
          {[
            { label: 'Marketing Updates', description: 'Receive updates about new features and services' },
            { label: 'Newsletter', description: 'Weekly newsletter with health tips and updates' },
            { label: 'SMS Notifications', description: 'Text message notifications for appointments' }
          ].map((setting, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
              <div>
                <p className="text-white">{setting.label}</p>
                <p className="text-sm text-gray-400">{setting.description}</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-500/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-500"></div>
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};