import React from 'react';
import { Bell, Search } from 'lucide-react';
import { Button } from '../../../components/ui/Button';

export const AdminHeader = () => {
  return (
    <header className="fixed right-0 left-64 h-16 bg-white/5 backdrop-blur-lg border-b border-white/10 z-10">
      <div className="h-full px-8 flex items-center justify-between">
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
        </div>
      </div>
    </header>
  );
};