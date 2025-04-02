import React from 'react';
import { Lock, Key, Shield } from 'lucide-react';
import { Button } from '../../../components/ui/Button';

export const SecuritySettings = () => {
  return (
    <div className="space-y-6">
      {/* Password Change */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-white">Change Password</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Current Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="password"
                className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                placeholder="Enter current password"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              New Password
            </label>
            <div className="relative">
              <Key className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="password"
                className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                placeholder="Enter new password"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Confirm New Password
            </label>
            <div className="relative">
              <Shield className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="password"
                className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                placeholder="Confirm new password"
              />
            </div>
          </div>
        </div>
        <Button>Update Password</Button>
      </div>

      {/* Two-Factor Authentication */}
      <div className="pt-6 border-t border-white/10">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-medium text-white">Two-Factor Authentication</h3>
            <p className="text-sm text-gray-400 mt-1">
              Add an extra layer of security to your account
            </p>
          </div>
          <Button variant="outline">Enable 2FA</Button>
        </div>
      </div>
    </div>
  );
};