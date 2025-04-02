import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, Users, FileText, Calendar, Settings, Activity,
  Heart, Building, Shield, Stethoscope, Microscope, Database,
  ClipboardList, MessageSquare
} from 'lucide-react';
import { cn } from '../../lib/utils';
import type { User } from '../../lib/db';

export interface NavItem {
  icon: React.ElementType;
  label: string;
  path: string;
  description?: string;
}

interface DashboardNavProps {
  user: User;
}

const getNavItems = (user: User): NavItem[] => {
  const baseItems = [
    { 
      icon: LayoutDashboard, 
      label: 'Overview', 
      path: '/dashboard',
      description: 'View your dashboard summary'
    }
  ];

  const roleSpecificItems: Record<string, NavItem[]> = {
    PATIENT: [
      { 
        icon: Heart, 
        label: 'Health Records', 
        path: '/dashboard/records',
        description: 'Access your medical history'
      },
      { 
        icon: Calendar, 
        label: 'Appointments', 
        path: '/dashboard/appointments',
        description: 'Schedule and manage appointments'
      },
      { 
        icon: Activity, 
        label: 'Monitoring', 
        path: '/dashboard/monitoring',
        description: 'Track your health metrics'
      },
      { 
        icon: MessageSquare, 
        label: 'Messages', 
        path: '/dashboard/messages',
        description: 'Communicate with your healthcare team'
      }
    ],
    DOCTOR: [
      { 
        icon: Users, 
        label: 'Patients', 
        path: '/dashboard/patients',
        description: 'Manage your patient list'
      },
      { 
        icon: Calendar, 
        label: 'Appointments', 
        path: '/dashboard/appointments',
        description: 'View and manage appointments'
      },
      { 
        icon: ClipboardList, 
        label: 'Consultations', 
        path: '/dashboard/consultations',
        description: 'Track patient consultations'
      },
      { 
        icon: MessageSquare, 
        label: 'Messages', 
        path: '/dashboard/messages',
        description: 'Communicate with patients'
      }
    ],
    HEALTHCARE_PROVIDER: [
      { 
        icon: Building, 
        label: 'Facilities', 
        path: '/dashboard/facilities',
        description: 'Manage healthcare facilities'
      },
      { 
        icon: Users, 
        label: 'Staff', 
        path: '/dashboard/staff',
        description: 'Manage medical staff'
      },
      { 
        icon: Calendar, 
        label: 'Appointments', 
        path: '/dashboard/appointments',
        description: 'View all appointments'
      },
      { 
        icon: Activity, 
        label: 'Analytics', 
        path: '/dashboard/analytics',
        description: 'View performance metrics'
      }
    ],
    TECH_PARTNER: [
      { 
        icon: Activity, 
        label: 'System Status', 
        path: '/dashboard/system',
        description: 'Monitor system health'
      },
      { 
        icon: Shield, 
        label: 'Security', 
        path: '/dashboard/security',
        description: 'Manage security settings'
      },
      { 
        icon: Database, 
        label: 'Integration', 
        path: '/dashboard/integration',
        description: 'Manage system integrations'
      }
    ],
    RESEARCH_PARTNER: [
      { 
        icon: Microscope, 
        label: 'Studies', 
        path: '/dashboard/studies',
        description: 'Manage research studies'
      },
      { 
        icon: Users, 
        label: 'Participants', 
        path: '/dashboard/participants',
        description: 'View study participants'
      },
      { 
        icon: FileText, 
        label: 'Publications', 
        path: '/dashboard/publications',
        description: 'Manage research publications'
      }
    ],
    INSURANCE_PARTNER: [
      { 
        icon: ClipboardList, 
        label: 'Claims', 
        path: '/dashboard/claims',
        description: 'Process insurance claims'
      },
      { 
        icon: Users, 
        label: 'Members', 
        path: '/dashboard/members',
        description: 'Manage insurance members'
      },
      { 
        icon: Activity, 
        label: 'Analytics', 
        path: '/dashboard/analytics',
        description: 'View insurance metrics'
      }
    ]
  };

  const commonItems = [
    { 
      icon: Settings, 
      label: 'Settings', 
      path: '/dashboard/settings',
      description: 'Manage your preferences'
    }
  ];

  return [
    ...baseItems,
    ...(roleSpecificItems[user.userType] || []),
    ...commonItems
  ];
};

export const DashboardNav: React.FC<DashboardNavProps> = ({ user }) => {
  const location = useLocation();
  const navItems = getNavItems(user);

  return (
    <nav className="space-y-1">
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={cn(
            "flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200",
            "hover:bg-white/5 group relative overflow-hidden",
            location.pathname === item.path
              ? "bg-purple-500/20 text-purple-400"
              : "text-gray-400 hover:text-white"
          )}
        >
          <item.icon className="w-5 h-5 mr-3" />
          <div>
            <div>{item.label}</div>
            {item.description && (
              <div className="text-xs text-gray-500 dark:text-gray-400 group-hover:text-gray-300">
                {item.description}
              </div>
            )}
          </div>
          {location.pathname === item.path && (
            <div className="absolute inset-y-0 left-0 w-1 bg-purple-500 rounded-r" />
          )}
        </Link>
      ))}
    </nav>
  );
};