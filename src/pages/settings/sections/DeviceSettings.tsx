import React from 'react';
import { Laptop, Smartphone, Tablet, X } from 'lucide-react';
import { Button } from '../../../components/ui/Button';

const devices = [
  {
    type: 'laptop',
    name: 'MacBook Pro',
    icon: Laptop,
    lastActive: 'Active now',
    location: 'San Francisco, CA'
  },
  {
    type: 'phone',
    name: 'iPhone 13',
    icon: Smartphone,
    lastActive: '2 hours ago',
    location: 'San Francisco, CA'
  },
  {
    type: 'tablet',
    name: 'iPad Pro',
    icon: Tablet,
    lastActive: '1 day ago',
    location: 'San Francisco, CA'
  }
];

export const DeviceSettings = () => {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        {devices.map((device, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10"
          >
            <div className="flex items-center">
              <div className="p-2 bg-purple-500/20 rounded-lg">
                <device.icon className="w-6 h-6 text-purple-400" />
              </div>
              <div className="ml-4">
                <h4 className="text-white font-medium">{device.name}</h4>
                <div className="flex items-center text-sm text-gray-400">
                  <span>{device.lastActive}</span>
                  <span className="mx-2">•</span>
                  <span>{device.location}</span>
                </div>
              </div>
            </div>
            <Button variant="outline" size="sm" className="text-red-400 hover:text-red-300">
              <X className="w-4 h-4" />
            </Button>
          </div>
        ))}
      </div>

      <div className="pt-4">
        <Button variant="outline" className="w-full">
          Add New Device
        </Button>
      </div>
    </div>
  );
};