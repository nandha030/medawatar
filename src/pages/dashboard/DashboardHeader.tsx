import React from 'react';
import { Bell } from 'lucide-react';
import type { User } from '../../lib/db';

interface DashboardHeaderProps {
  user: User;
}

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({ user }) => {
  return (
    <header className="bg-white/5 backdrop-blur-lg border-b border-white/10 px-8 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-white">
            Welcome, {user.name}
          </h1>
          <p className="text-sm text-gray-400">
            {user.userType.toLowerCase().replace('_', ' ')}
          </p>
        </div>
        <div className="ml-4 flex items-center space-x-4">
          <button className="relative p-2 text-gray-400 hover:text-white">
            <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-pink-500 text-[10px] font-medium text-white flex items-center justify-center">
              3
            </span>
            <Bell className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
};