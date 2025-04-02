import React from 'react';
import { Users, Activity, TrendingUp, Shield } from 'lucide-react';
import type { UserType } from '../../../lib/db';

interface PartnerStatsProps {
  userType: UserType;
}

export const PartnerStats: React.FC<PartnerStatsProps> = ({ userType }) => {
  const getStatsByType = () => {
    switch (userType) {
      case 'TECH_PARTNER':
        return [
          { icon: Users, label: 'Active Users', value: '15.2K', change: '+12% this month' },
          { icon: Activity, label: 'System Uptime', value: '99.9%', change: 'Last 30 days' },
          { icon: Shield, label: 'Security Score', value: '98/100', change: '+2 points' },
          { icon: TrendingUp, label: 'API Calls', value: '2.4M', change: '+8% this week' }
        ];
      case 'SECURITY_PROVIDER':
        return [
          { icon: Shield, label: 'Protected Records', value: '1.2M', change: '+5K this week' },
          { icon: Activity, label: 'Threat Detection', value: '99.8%', change: 'Accuracy rate' },
          { icon: Users, label: 'Active Clients', value: '248', change: '+12 this month' },
          { icon: TrendingUp, label: 'Security Score', value: '97/100', change: '+3 points' }
        ];
      case 'RESEARCH_PARTNER':
        return [
          { icon: Users, label: 'Study Participants', value: '5.2K', change: '+120 this month' },
          { icon: Activity, label: 'Active Studies', value: '24', change: '3 pending approval' },
          { icon: Shield, label: 'Data Compliance', value: '100%', change: 'HIPAA Compliant' },
          { icon: TrendingUp, label: 'Publications', value: '18', change: '+2 this quarter' }
        ];
      default:
        return [
          { icon: Users, label: 'Total Users', value: '10.5K', change: '+8% this month' },
          { icon: Activity, label: 'Active Services', value: '12', change: '2 in review' },
          { icon: Shield, label: 'Compliance Score', value: '95/100', change: '+5 points' },
          { icon: TrendingUp, label: 'Growth Rate', value: '22%', change: '+3% this quarter' }
        ];
    }
  };

  const stats = getStatsByType();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white/5 backdrop-blur-lg rounded-lg p-4 border border-white/10"
        >
          <div className="flex items-center">
            <div className="p-2 rounded-lg bg-purple-500/20">
              <stat.icon className="w-5 h-5 text-purple-400" />
            </div>
            <div className="ml-3">
              <p className="text-sm text-gray-400">{stat.label}</p>
              <p className="text-2xl font-semibold text-white">{stat.value}</p>
              <p className="text-sm text-gray-400">{stat.change}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};