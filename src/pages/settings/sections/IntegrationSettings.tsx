import React from 'react';
import { Link2, Shield, Database } from 'lucide-react';
import { Button } from '../../../components/ui/Button';

const integrations = [
  {
    name: 'Electronic Health Records',
    icon: Database,
    status: 'Connected',
    lastSync: '2 hours ago'
  },
  {
    name: 'Laboratory System',
    icon: Link2,
    status: 'Not Connected',
    lastSync: null
  },
  {
    name: 'Imaging System',
    icon: Database,
    status: 'Connected',
    lastSync: '1 day ago'
  }
];

export const IntegrationSettings = () => {
  return (
    <div className="space-y-6">
      {/* Connected Services */}
      <div className="space-y-4">
        {integrations.map((integration, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10"
          >
            <div className="flex items-center">
              <div className="p-2 bg-purple-500/20 rounded-lg">
                <integration.icon className="w-6 h-6 text-purple-400" />
              </div>
              <div className="ml-4">
                <h4 className="text-white font-medium">{integration.name}</h4>
                <div className="flex items-center text-sm">
                  <span className={integration.status === 'Connected' ? 'text-green-400' : 'text-gray-400'}>
                    {integration.status}
                  </span>
                  {integration.lastSync && (
                    <>
                      <span className="mx-2 text-gray-400">•</span>
                      <span className="text-gray-400">Last sync: {integration.lastSync}</span>
                    </>
                  )}
                </div>
              </div>
            </div>
            <Button
              variant={integration.status === 'Connected' ? 'outline' : 'primary'}
              size="sm"
            >
              {integration.status === 'Connected' ? 'Disconnect' : 'Connect'}
            </Button>
          </div>
        ))}
      </div>

      {/* API Access */}
      <div className="pt-6 border-t border-white/10">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-medium text-white">API Access</h3>
            <p className="text-sm text-gray-400">Manage your API keys and access tokens</p>
          </div>
          <Button variant="outline" size="sm">
            <Shield className="w-4 h-4 mr-2" />
            Generate New Key
          </Button>
        </div>
      </div>
    </div>
  );
};