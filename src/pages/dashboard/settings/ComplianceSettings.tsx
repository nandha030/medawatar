import React from 'react';
import { Shield, FileCheck, AlertTriangle, Clock } from 'lucide-react';
import { Button } from '../../../components/ui/Button';
import type { User } from '../../../lib/db';

interface ComplianceSettingsProps {
  user: User;
}

export const ComplianceSettings: React.FC<ComplianceSettingsProps> = ({ user }) => {
  return (
    <div className="max-w-3xl">
      {/* Compliance Status */}
      <div className="bg-white/5 backdrop-blur-lg rounded-lg border border-white/10 p-6 mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-lg font-medium text-white">Compliance Status</h2>
            <p className="text-sm text-gray-400 mt-1">View your compliance requirements</p>
          </div>
          <Shield className="w-5 h-5 text-purple-400" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { label: 'HIPAA', status: 'Compliant', icon: FileCheck, color: 'text-green-400' },
            { label: 'GDPR', status: 'Review Required', icon: AlertTriangle, color: 'text-yellow-400' },
            { label: 'ISO 27001', status: 'Pending', icon: Clock, color: 'text-gray-400' }
          ].map((item, index) => (
            <div key={index} className="bg-white/5 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-white">{item.label}</h3>
                <item.icon className={`w-5 h-5 ${item.color}`} />
              </div>
              <p className={`text-sm ${item.color}`}>{item.status}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Required Training */}
      <div className="bg-white/5 backdrop-blur-lg rounded-lg border border-white/10 p-6 mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-lg font-medium text-white">Required Training</h2>
            <p className="text-sm text-gray-400 mt-1">Complete mandatory compliance training</p>
          </div>
          <FileCheck className="w-5 h-5 text-purple-400" />
        </div>
        <div className="space-y-4">
          {[
            {
              title: 'HIPAA Compliance Training',
              dueDate: '2024-04-15',
              status: 'Completed',
              progress: 100
            },
            {
              title: 'Data Security Fundamentals',
              dueDate: '2024-04-30',
              status: 'In Progress',
              progress: 60
            },
            {
              title: 'Privacy Policy Update',
              dueDate: '2024-05-15',
              status: 'Not Started',
              progress: 0
            }
          ].map((training, index) => (
            <div key={index} className="p-4 bg-white/5 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <p className="text-white">{training.title}</p>
                  <p className="text-sm text-gray-400">Due: {training.dueDate}</p>
                </div>
                <Button
                  variant={training.status === 'Completed' ? 'outline' : 'primary'}
                  size="sm"
                  disabled={training.status === 'Completed'}
                >
                  {training.status === 'Completed' ? 'Completed' : 'Start Training'}
                </Button>
              </div>
              <div className="mt-2">
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-purple-500 rounded-full h-2"
                    style={{ width: `${training.progress} ```%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-400 mt-1">{training.progress}% Complete</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Audit Logs */}
      <div className="bg-white/5 backdrop-blur-lg rounded-lg border border-white/10 p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-lg font-medium text-white">Audit Logs</h2>
            <p className="text-sm text-gray-400 mt-1">Review compliance-related activities</p>
          </div>
          <Clock className="w-5 h-5 text-purple-400" />
        </div>
        <div className="space-y-4">
          {[
            {
              action: 'HIPAA Training Completed',
              user: 'Dr. Sarah Johnson',
              timestamp: '2024-03-15 14:30',
              type: 'Training'
            },
            {
              action: 'Privacy Policy Updated',
              user: 'System Admin',
              timestamp: '2024-03-14 09:15',
              type: 'Policy'
            },
            {
              action: 'Security Assessment',
              user: 'Security Team',
              timestamp: '2024-03-13 16:45',
              type: 'Audit'
            }
          ].map((log, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-purple-400" />
                </div>
                <div className="ml-4">
                  <p className="text-white">{log.action}</p>
                  <p className="text-sm text-gray-400">By: {log.user}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-400">{log.timestamp}</p>
                <p className="text-sm text-purple-400">{log.type}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};