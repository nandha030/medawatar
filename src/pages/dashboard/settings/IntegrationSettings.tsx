import React from 'react';
import { Link2, Database, Cloud, Lock } from 'lucide-react';
import { Button } from '../../../components/ui/Button';
import type { User } from '../../../lib/db';

interface IntegrationSettingsProps {
  user: User;
}

export const IntegrationSettings: React.FC<IntegrationSettingsProps> = ({ user }) => {
  return (
    <div className="max-w-3xl">
      {/* API Access */}
      <div className="bg-white/5 backdrop-blur-lg rounded-lg border border-white/10 p-6 mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-lg font-medium text-white">API Access</h2>
            <p className="text-sm text-gray-400 mt-1">Manage your API keys and access</p>
          </div>
          <Link2 className="w-5 h-5 text-purple-400" />
        </div>
        <div className="space-y-4">
          <div className="p-4 bg-white/5 rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-white">API Key</p>
                <p className="text-sm text-gray-400">Use this key to authenticate API requests</p>
              </div>
              <Button variant="outline" size="sm">
                Generate New Key
              </Button>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value="••••••••••••••••"
                disabled
                className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white"
              />
              <Button variant="outline" size="sm">
                Copy
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Connected Services */}
      <div className="bg-white/5 backdrop-blur-lg rounded-lg border border-white/10 p-6 mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-lg font-medium text-white">Connected Services</h2>
            <p className="text-sm text-gray-400 mt-1">Manage your integrated services</p>
          </div>
          <Cloud className="w-5 h-5 text-purple-400" />
        </div>
        <div className="space-y-4">
          {[
            { name: 'Electronic Health Records', status: 'Connected', icon: Database },
            { name: 'Laboratory System', status: 'Not Connected', icon: Database },
            { name: 'Imaging System', status: 'Connected', icon: Database }
          ].map((service, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                  <service.icon className="w-5 h-5 text-purple-400" />
                </div>
                <div className="ml-4">
                  <p className="text-white">{service.name}</p>
                  <p className={`text-sm ${
                    service.status === 'Connected' ? 'text-green-400' : 'text-gray-400'
                  }`}>
                    {service.status}
                  </p>
                </div>
              </div>
              <Button
                variant={service.status === 'Connected' ? 'outline' : 'primary'}
                size="sm"
              >
                {service.status === 'Connected' ? 'Disconnect' : 'Connect'}
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Data Sharing */}
      <div className="bg-white/5 backdrop-blur-lg rounded-lg border border-white/10 p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-lg font-medium text-white">Data Sharing</h2>
            <p className="text-sm text-gray-400 mt-1">Control how your data is shared</p>
          </div>
          <Lock className="w-5 h-5 text-purple-400" />
        </div>
        <div className="space-y-4">
          {[
            { label: 'Share Analytics', description: 'Allow anonymous usage data collection' },
            { label: 'Research Participation', description: 'Participate in medical research studies' },
            { label: 'Third-party Access', description: 'Allow verified partners to access data' }
          ].map((setting, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
              <div>
                <p className="text-white">{setting.label}</p>
                <p className="text-sm text-gray-400">{setting.description}</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-500/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-500"></div>
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};