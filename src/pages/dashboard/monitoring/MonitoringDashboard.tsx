import React from 'react';
import { useUser } from '../../../hooks/useUser';
import { DashboardLayout } from '../DashboardLayout';
import { DashboardSidebar } from '../DashboardSidebar';
import { Activity, Heart, TrendingUp, Clock } from 'lucide-react';

export const MonitoringDashboard = () => {
  const { user, loading } = useUser();

  if (loading || !user) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-quantum-900 to-quantum-800 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  const metrics = [
    {
      icon: Heart,
      label: 'Heart Rate',
      value: '72 bpm',
      change: '+2 from last check',
      color: 'text-pink-400'
    },
    {
      icon: Activity,
      label: 'Blood Pressure',
      value: '120/80',
      change: 'Normal range',
      color: 'text-green-400'
    },
    {
      icon: TrendingUp,
      label: 'Blood Sugar',
      value: '95 mg/dL',
      change: 'Within target',
      color: 'text-blue-400'
    },
    {
      icon: Clock,
      label: 'Last Update',
      value: '2h ago',
      change: 'Auto-synced',
      color: 'text-purple-400'
    }
  ];

  return (
    <DashboardLayout>
      <DashboardSidebar user={user} />
      <div className="flex-1 overflow-hidden">
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="bg-white/5 backdrop-blur-lg border-b border-white/10 px-8 py-6">
            <h1 className="text-2xl font-semibold text-white">Health Monitoring</h1>
            <p className="text-gray-400 mt-1">Track your vital signs and health metrics</p>
          </div>

          {/* Metrics Grid */}
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {metrics.map((metric, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-lg p-6 border border-white/10"
                >
                  <div className="flex items-center">
                    <div className={`p-3 rounded-lg bg-white/10 ${metric.color}`}>
                      <metric.icon className="w-6 h-6" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm text-gray-400">{metric.label}</p>
                      <p className="text-2xl font-semibold text-white mt-1">{metric.value}</p>
                      <p className="text-sm text-gray-400">{metric.change}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};