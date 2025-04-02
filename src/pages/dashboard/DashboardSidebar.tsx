import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, Heart, Calendar, Activity, MessageSquare,
  Users, FileText, Building, Shield, Database, Microscope,
  ClipboardList, TrendingUp, Settings, BarChart
} from 'lucide-react';
import type { User } from '../../lib/db';
import { Logo } from '../../components/layout/Logo';

interface DashboardSidebarProps {
  user: User;
}

const getMenuItems = (userType: string) => {
  const baseItems = [
    { icon: LayoutDashboard, label: 'Overview', path: '/dashboard' }
  ];

  const roleSpecificItems = {
  patient: [
    { icon: Heart, label: 'Health Records', path: '/dashboard/records' },
    { icon: Calendar, label: 'Appointments', path: '/dashboard/appointments' },
    { icon: BarChart, label: 'Analytics', path: '/dashboard/analytics' },
    { icon: MessageSquare, label: 'Messages', path: '/dashboard/messages' }
  ],
  doctor: [
    { icon: Users, label: 'Patients', path: '/dashboard/patients' },
    { icon: Calendar, label: 'Schedule', path: '/dashboard/schedule' },
    { icon: ClipboardList, label: 'Consultations', path: '/dashboard/consultations' },
    { icon: MessageSquare, label: 'Messages', path: '/dashboard/messages' }
  ],
  HEALTHCARE_PROVIDER: [
    { icon: Building, label: 'Facilities', path: '/dashboard/facilities' },
    { icon: Users, label: 'Staff', path: '/dashboard/staff' },
    { icon: Calendar, label: 'Appointments', path: '/dashboard/appointments' },
    { icon: TrendingUp, label: 'Analytics', path: '/dashboard/analytics' }
  ],
  TECH_PARTNER: [
    { icon: Activity, label: 'System Status', path: '/dashboard/system' },
    { icon: Shield, label: 'Security', path: '/dashboard/security' },
    { icon: Database, label: 'Integration', path: '/dashboard/integration' }
  ],
  RESEARCH_PARTNER: [
    { icon: Microscope, label: 'Studies', path: '/dashboard/studies' },
    { icon: Users, label: 'Participants', path: '/dashboard/participants' },
    { icon: FileText, label: 'Publications', path: '/dashboard/publications' }
  ],
  INSURANCE_PARTNER: [
    { icon: ClipboardList, label: 'Claims', path: '/dashboard/claims' },
    { icon: Users, label: 'Members', path: '/dashboard/members' },
    { icon: TrendingUp, label: 'Analytics', path: '/dashboard/analytics' }
  ]
};

  const commonItems = [
    { icon: Settings, label: 'Settings', path: '/dashboard/settings' }
  ];

  const items = roleSpecificItems[userType] || roleSpecificItems.patient;
  return [...baseItems, ...items, ...commonItems];
};

export const DashboardSidebar: React.FC<DashboardSidebarProps> = ({ user }) => {
  const location = useLocation();
  const items = getMenuItems(user.userType);

  return (
    <div className="flex flex-shrink-0 border-r border-white/10">
      <div className="flex w-64 flex-col">
        <div className="flex min-h-[calc(100vh-64px)] flex-col bg-white/5 backdrop-blur-lg">
          <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
            <nav className="mt-5 flex-1 space-y-1 px-4">
              {items.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`group flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 hover:bg-white/5 ${
                      isActive
                        ? 'bg-purple-500/20 text-white'
                        : 'text-gray-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <item.icon
                      className={`mr-3 h-5 w-5 flex-shrink-0 transition-colors duration-200 ${
                        isActive ? 'text-purple-400' : 'text-gray-400 group-hover:text-white'
                      }`}
                    />
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};