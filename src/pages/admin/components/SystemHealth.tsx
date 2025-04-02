import React from 'react';
import { Activity, Server, Database, Cloud } from 'lucide-react';

const metrics = [
  {
    label: 'API Response Time',
    value: '45ms',
    status: 'healthy',
    icon: Activity
  },
  {
    label: 'Server Load',
    value: '42%',
    status: 'healthy',
    icon: Server
  },
  {
    label: 'Database Status',
    value: 'Connected',
    status: 'healthy',
    icon: Database
  },
  {
    label: 'Storage Usage',
    value: '78%',
    status: 'warning',
    icon: Cloud
  }
];

export const SystemHealth = () => {
  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-lg border border-white/10 p-6">
      <div className="flex items-center mb-6">
        <Activity className="w-5 h-5 text-purple-400 mr-2" />
        <h2 className="text-lg font-semibold text-white">System Health</h2>
      </div>

      <div className="space-y-4">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 bg-white/5 rounded-lg"
          >
            <div className="flex items-center">
              <div className={`p-2 rounded-lg ${
                metric.status === 'healthy' ? 'bg-green-500/20' :
                metric.status === 'warning' ? 'bg-yellow-500/20' :
                'bg-red-500/20'
              }`}>
                <metric.icon className={`w-4 h-4 ${
                  metric.status === 'healthy' ? 'text-green-400' :
                  metric.status === 'warning' ? 'text-yellow-400' :
                  'text-red-400'
                }`} />
              </div>
              <div className="ml-4">
                <p className="text-white">{metric.label}</p>
                <p className="text-sm text-gray-400">{metric.value}</p>
              </div>
            </div>
            <div className={`h-2 w-2 rounded-full ${
              metric.status === 'healthy' ? 'bg-green-400' :
              metric.status === 'warning' ? 'bg-yellow-400' :
              'bg-red-400'
            }`} />
          </div>
        ))}
      </div>
    </div>
  );
};