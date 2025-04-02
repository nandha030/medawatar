import React from 'react';
import { Activity, Users, Calendar, TrendingUp } from 'lucide-react';
import { QuantumIDCard } from '../../components/home/QuantumIDCard';
import type { User } from '../../lib/db';

interface DashboardOverviewProps {
  user: User;
}

export const DashboardOverview: React.FC<DashboardOverviewProps> = ({ user }) => {
  const stats = [
    {
      icon: Activity,
      label: 'Health Score',
      value: '92',
      change: '+2.5%',
      trend: 'up'
    },
    {
      icon: Users,
      label: 'Consultations',
      value: '24',
      change: '+4',
      trend: 'up'
    },
    {
      icon: Calendar,
      label: 'Appointments',
      value: '3',
      change: 'Next: Tomorrow',
      trend: 'neutral'
    },
    {
      icon: TrendingUp,
      label: 'Activity',
      value: '87%',
      change: '+12%',
      trend: 'up'
    }
  ];

  return (
    <div className="flex-1 pb-24 overflow-y-auto">
      <div className="px-8 py-6">
        {/* Top Section: Quantum ID and Recent Activity */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 mb-8">
          {/* Quantum ID Card */}
          <div className="bg-white/5 backdrop-blur-lg rounded-lg p-6 border border-white/10">
            <h2 className="text-lg font-medium text-white mb-4">Quantum ID</h2>
            <QuantumIDCard
              userType={user.userType}
              name={user.name}
              quantumId={user.quantumId}
            />
          </div>

          {/* Recent Activity */}
          <div className="bg-white/5 backdrop-blur-lg rounded-lg p-6 border border-white/10">
            <h2 className="text-lg font-medium text-white mb-4">Recent Activity</h2>
            <div className="flow-root">
              <ul className="-mb-8">
                {[
                  {
                    event: 'Medical Record Updated',
                    time: '2 hours ago',
                    description: 'Added new blood test results'
                  },
                  {
                    event: 'Appointment Scheduled',
                    time: '1 day ago',
                    description: 'Follow-up consultation with Dr. Smith'
                  },
                  {
                    event: 'Prescription Renewed',
                    time: '3 days ago',
                    description: 'Monthly medication refill'
                  }
                ].map((item, index) => (
                  <li key={index}>
                    <div className="relative pb-8">
                      {index !== 2 && (
                        <span
                          className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-white/10"
                          aria-hidden="true"
                        />
                      )}
                      <div className="relative flex space-x-3">
                        <div>
                          <span className="h-8 w-8 rounded-full bg-purple-500/20 flex items-center justify-center ring-8 ring-quantum-900">
                            <Activity className="h-4 w-4 text-purple-400" aria-hidden="true" />
                          </span>
                        </div>
                        <div className="flex min-w-0 flex-1 justify-between space-x-4">
                          <div>
                            <p className="text-sm text-white">{item.event}</p>
                            <p className="text-sm text-gray-400">{item.description}</p>
                          </div>
                          <div className="whitespace-nowrap text-right text-sm text-gray-400">
                            {item.time}
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg bg-white/5 backdrop-blur-lg p-6 border border-white/10"
            >
              <dt>
                <div className="absolute rounded-lg bg-purple-500/20 p-3">
                  <stat.icon className="h-6 w-6 text-purple-400" aria-hidden="true" />
                </div>
                <p className="ml-16 truncate text-sm font-medium text-gray-300">{stat.label}</p>
              </dt>
              <dd className="ml-16 flex items-baseline">
                <p className="text-2xl font-semibold text-white">{stat.value}</p>
                <p className={`ml-2 flex items-baseline text-sm font-semibold ${
                  stat.trend === 'up' ? 'text-green-400' : 'text-gray-400'
                }`}>
                  {stat.change}
                </p>
              </dd>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};