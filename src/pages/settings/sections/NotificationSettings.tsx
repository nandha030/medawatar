import React from 'react';
import { Bell, Mail, MessageSquare } from 'lucide-react';

export const NotificationSettings = () => {
  return (
    <div className="space-y-6">
      {/* Email Notifications */}
      <div>
        <h3 className="text-lg font-medium text-white mb-4">Email Notifications</h3>
        <div className="space-y-4">
          {[
            { id: 'appointments', label: 'Appointment Reminders' },
            { id: 'updates', label: 'Medical Updates' },
            { id: 'security', label: 'Security Alerts' }
          ].map(setting => (
            <label key={setting.id} className="flex items-center">
              <input
                type="checkbox"
                className="rounded border-white/20 bg-white/5 text-purple-600 focus:ring-purple-500"
              />
              <span className="ml-2 text-gray-300">{setting.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Push Notifications */}
      <div className="pt-6 border-t border-white/10">
        <h3 className="text-lg font-medium text-white mb-4">Push Notifications</h3>
        <div className="space-y-4">
          {[
            { id: 'instant', label: 'Instant Alerts' },
            { id: 'messages', label: 'Message Notifications' },
            { id: 'changes', label: 'Appointment Changes' }
          ].map(setting => (
            <label key={setting.id} className="flex items-center">
              <input
                type="checkbox"
                className="rounded border-white/20 bg-white/5 text-purple-600 focus:ring-purple-500"
              />
              <span className="ml-2 text-gray-300">{setting.label}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};