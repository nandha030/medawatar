import React from 'react';
import { Bell, Search } from 'lucide-react';
import { Button } from '../ui/Button';
import type { User } from '../../lib/db';

interface DashboardHeaderProps {
  user: User;
}

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({ user }) => {
  return (
    <header className="sticky top-0 z-10 bg-white/5 backdrop-blur-lg border-b border-white/10">
      <div className="h-16 px-8 flex items-center justify-between">
        <div className="flex-1 max-w-xl">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
            />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm" className="relative">
            <Bell className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-purple-500 rounded-full text-xs flex items-center justify-center">
              3
            </span>
          </Button>
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
              {user.name.charAt(0)}
            </div>
            <span className="ml-3 text-white font-medium">{user.name}</span>
          </div>
        </div>
      </div>
    </header>
  );
};