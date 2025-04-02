import React from 'react';
import { User, Mail, Phone } from 'lucide-react';
import { Button } from '../../../components/ui/Button';

export const AccountSettings = () => {
  return (
    <div className="space-y-6">
      {/* Profile Photo */}
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

      {/* Personal Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Full Name
          </label>
          <input
            type="text"
            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50"
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Email Address
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="email"
              className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50"
              placeholder="Enter your email"
            />
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Phone Number
        </label>
        <div className="relative">
          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="tel"
            className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50"
            placeholder="Enter your phone number"
          />
        </div>
      </div>

      <div className="pt-4">
        <Button>Save Changes</Button>
      </div>
    </div>
  );
};