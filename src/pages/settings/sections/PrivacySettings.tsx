import React from 'react';
import { Shield, Eye, Lock } from 'lucide-react';
import { Button } from '../../../components/ui/Button';

export const PrivacySettings = () => {
  return (
    <div className="space-y-6">
      {/* Privacy Options */}
      <div>
        <h3 className="text-lg font-medium text-white mb-4">Privacy Controls</h3>
        <div className="space-y-4">
          {[
            { id: 'profile-visibility', label: 'Profile Visibility', description: 'Control who can see your profile' },
            { id: 'data-sharing', label: 'Data Sharing', description: 'Manage how your data is shared' },
            { id: 'analytics', label: 'Analytics Participation', description: 'Choose to participate in analytics' }
          ].map(setting => (
            <div key={setting.id} className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
              <div>
                <label className="text-white font-medium">{setting.label}</label>
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

      {/* Data Export */}
      <div className="pt-6 border-t border-white/10">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-medium text-white">Data Export</h3>
            <p className="text-sm text-gray-400">Download a copy of your data</p>
          </div>
          <Button variant="outline">
            <Lock className="w-4 h-4 mr-2" />
            Request Export
          </Button>
        </div>
      </div>

      {/* Account Deletion */}
      <div className="pt-6 border-t border-white/10">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-medium text-white">Delete Account</h3>
            <p className="text-sm text-gray-400">Permanently delete your account and all data</p>
          </div>
          <Button variant="outline" className="text-red-400 hover:text-red-300">
            Delete Account
          </Button>
        </div>
      </div>
    </div>
  );
};