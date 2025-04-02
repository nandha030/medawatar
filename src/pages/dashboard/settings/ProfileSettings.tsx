import React from 'react';
import { User, Mail, Phone, MapPin, Shield } from 'lucide-react';
import { Button } from '../../../components/ui/Button';
import type { User as UserType } from '../../../lib/db';

interface ProfileSettingsProps {
  user: UserType;
}

export const ProfileSettings: React.FC<ProfileSettingsProps> = ({ user }) => {
  return (
    <div className="max-w-3xl">
      {/* Profile Photo */}
      <div className="bg-white/5 backdrop-blur-lg rounded-lg border border-white/10 p-6 mb-8">
        <h2 className="text-lg font-medium text-white mb-4">Profile Photo</h2>
        <div className="flex items-center">
          <div className="w-20 h-20 rounded-full bg-purple-500/20 flex items-center justify-center">
            <User className="w-10 h-10 text-purple-400" />
          </div>
          <div className="ml-6">
            <Button variant="outline" size="sm" className="mr-3">
              Change Photo
            </Button>
            <Button variant="outline" size="sm">
              Remove
            </Button>
          </div>
        </div>
      </div>

      {/* Personal Information */}
      <div className="bg-white/5 backdrop-blur-lg rounded-lg border border-white/10 p-6 mb-8">
        <h2 className="text-lg font-medium text-white mb-4">Personal Information</h2>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Full Name
              </label>
              <input
                type="text"
                defaultValue={user.name}
                className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Email Address
              </label>
              <input
                type="email"
                defaultValue={user.email}
                className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Role
              </label>
              <input
                type="text"
                defaultValue={user.userType.replace(/_/g, ' ')}
                disabled
                className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white/50 cursor-not-allowed"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Professional Information */}
      {(user.userType === 'DOCTOR' || user.userType === 'HEALTHCARE_PROVIDER') && (
        <div className="bg-white/5 backdrop-blur-lg rounded-lg border border-white/10 p-6 mb-8">
          <h2 className="text-lg font-medium text-white mb-4">Professional Information</h2>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  License Number
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Specialization
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Save Changes */}
      <div className="flex justify-end">
        <Button type="submit" className="w-full md:w-auto">
          Save Changes
        </Button>
      </div>
    </div>
  );
};