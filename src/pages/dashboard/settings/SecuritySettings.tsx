import React from 'react';
import { Shield, Key, Smartphone, History } from 'lucide-react';
import { Button } from '../../../components/ui/Button';
import type { User } from '../../../lib/db';

interface SecuritySettingsProps {
  user: User;
}

export const SecuritySettings: React.FC<SecuritySettingsProps> = ({ user }) => {
  return (
    <div className="max-w-3xl">
      {/* Password */}
      <div className="bg-white/5 backdrop-blur-lg rounded-lg border border-white/10 p-6 mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-lg font-medium text-white">Password</h2>
            <p className="text-sm text-gray-400 mt-1">Update your password</p>
          </div>
          <Shield className="w-5 h-5 text-purple-400" />
        </div>
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Current Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                New Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Confirm New Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50"
              />
            </div>
          </div>
          <Button className="w-full md:w-auto">Update Password</Button>
        </div>
      </div>

      {/* Two-Factor Authentication */}
      <div className="bg-white/5 backdrop-blur-lg rounded-lg border border-white/10 p-6 mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-lg font-medium text-white">Two-Factor Authentication</h2>
            <p className="text-sm text-gray-400 mt-1">Add an extra layer of security</p>
          </div>
          <Key className="w-5 h-5 text-purple-400" />
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-white">Status: <span className="text-red-400">Not Enabled</span></p>
            <p className="text-sm text-gray-400 mt-1">Protect your account with 2FA</p>
          </div>
          <Button variant="outline">Enable 2FA</Button>
        </div>
      </div>

      {/* Connected Devices */}
      <div className="bg-white/5 backdrop-blur-lg rounded-lg border border-white/10 p-6 mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-lg font-medium text-white">Connected Devices</h2>
            <p className="text-sm text-gray-400 mt-1">Manage your active sessions</p>
          </div>
          <Smartphone className="w-5 h-5 text-purple-400" />
        </div>
        <div className="space-y-4">
          {[
            { device: 'MacBook Pro', location: 'San Francisco, US', lastActive: 'Now' },
            { device: 'iPhone 13', location: 'San Francisco, US', lastActive: '2 hours ago' }
          ].map((session, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                  <History className="w-5 h-5 text-purple-400" />
                </div>
                <div className="ml-4">
                  <p className="text-white">{session.device}</p>
                  <p className="text-sm text-gray-400">{session.location} • {session.lastActive}</p>
                </div>
              </div>
              <Button variant="outline" size="sm">
                Revoke Access
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};