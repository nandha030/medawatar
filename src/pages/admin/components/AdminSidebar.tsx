import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, Users, Shield, Settings, Activity, 
  Database, FileText, LogOut, Building
} from 'lucide-react';
import { cn } from '../../../lib/utils';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/admin/dashboard' },
  { icon: Users, label: 'User Management', path: '/admin/users' },
  { icon: Building, label: 'Partner Management', path: '/admin/partners' },
  { icon: Shield, label: 'Security', path: '/admin/security' },
  { icon: Database, label: 'Database', path: '/admin/database' },
  { icon: Activity, label: 'Monitoring', path: '/admin/monitoring' },
  { icon: FileText, label: 'Logs', path: '/admin/logs' },
  { icon: Settings, label: 'Settings', path: '/admin/settings' },
];

export const AdminSidebar = () => {
  const location = useLocation();

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-white/5 backdrop-blur-lg border-r border-white/10">
      <div className="p-6">
        <div className="flex items-center space-x-3 mb-8">
          <Shield className="w-8 h-8 text-purple-400" />
          <span className="text-xl font-bold text-white">Admin Panel</span>
        </div>

        <nav className="space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center px-4 py-3 rounded-lg transition-colors",
                "hover:bg-white/5 group",
                location.pathname === item.path
                  ? "bg-purple-500/20 text-purple-400"
                  : "text-gray-400 hover:text-white"
              )}
            >
              <item.icon className="w-5 h-5 mr-3" />
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6">
        <button
          onClick={() => {
            localStorage.removeItem('adminToken');
            window.location.href = '/admin/login';
          }}
          className="flex items-center w-full px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
        >
          <LogOut className="w-5 h-5 mr-3" />
          Logout
        </button>
      </div>
    </aside>
  );
};