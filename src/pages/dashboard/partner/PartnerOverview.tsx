import React from 'react';
import { Search, Filter, TrendingUp, Shield } from 'lucide-react';
import type { UserType } from '../../../lib/db';

interface PartnerOverviewProps {
  userType: UserType;
}

export const PartnerOverview: React.FC<PartnerOverviewProps> = ({ userType }) => {
  const getOverviewData = () => {
    switch (userType) {
      case 'TECH_PARTNER':
        return {
          title: 'System Performance',
          metrics: [
            { label: 'API Response Time', value: '45ms', trend: 'up' },
            { label: 'Error Rate', value: '0.02%', trend: 'down' },
            { label: 'Data Processing', value: '2.4TB', trend: 'up' }
          ]
        };
      case 'SECURITY_PROVIDER':
        return {
          title: 'Security Metrics',
          metrics: [
            { label: 'Threats Blocked', value: '15.2K', trend: 'up' },
            { label: 'Average Response', value: '1.2min', trend: 'down' },
            { label: 'Security Score', value: '98/100', trend: 'up' }
          ]
        };
      case 'RESEARCH_PARTNER':
        return {
          title: 'Research Progress',
          metrics: [
            { label: 'Active Studies', value: '24', trend: 'up' },
            { label: 'Data Points', value: '1.2M', trend: 'up' },
            { label: 'Publications', value: '18', trend: 'up' }
          ]
        };
      default:
        return {
          title: 'Partner Overview',
          metrics: [
            { label: 'Active Services', value: '12', trend: 'up' },
            { label: 'User Growth', value: '22%', trend: 'up' },
            { label: 'Service Uptime', value: '99.9%', trend: 'stable' }
          ]
        };
    }
  };

  const overview = getOverviewData();

  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-lg border border-white/10 overflow-hidden">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-white">{overview.title}</h2>
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search metrics..."
                className="pl-9 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
              />
            </div>
            <button className="p-2 text-gray-400 hover:text-white transition-colors">
              <Filter className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {overview.metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-white/5 rounded-lg p-4"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">{metric.label}</p>
                  <p className="text-2xl font-semibold text-white mt-1">{metric.value}</p>
                </div>
                <div className={`p-2 rounded-lg ${
                  metric.trend === 'up' ? 'bg-green-500/20' : 
                  metric.trend === 'down' ? 'bg-red-500/20' : 
                  'bg-yellow-500/20'
                }`}>
                  <TrendingUp className={`w-5 h-5 ${
                    metric.trend === 'up' ? 'text-green-400' :
                    metric.trend === 'down' ? 'text-red-400' :
                    'text-yellow-400'
                  }`} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};