import React from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';
import { Button } from '../../../components/ui/Button';

export const AppearanceSettings = () => {
  return (
    <div className="space-y-6">
      {/* Theme Selection */}
      <div>
        <h3 className="text-lg font-medium text-white mb-4">Theme</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { id: 'light', icon: Sun, label: 'Light' },
            { id: 'dark', icon: Moon, label: 'Dark' },
            { id: 'system', icon: Monitor, label: 'System' }
          ].map(theme => (
            <button
              key={theme.id}
              className="flex items-center p-4 bg-white/5 rounded-lg border border-white/10 hover:border-purple-500/50 transition-colors"
            >
              <theme.icon className="w-5 h-5 text-purple-400" />
              <span className="ml-3 text-white">{theme.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Color Scheme */}
      <div className="pt-6 border-t border-white/10">
        <h3 className="text-lg font-medium text-white mb-4">Color Scheme</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { id: 'purple', color: 'bg-purple-500' },
            { id: 'blue', color: 'bg-blue-500' },
            { id: 'green', color: 'bg-green-500' },
            { id: 'pink', color: 'bg-pink-500' }
          ].map(scheme => (
            <button
              key={scheme.id}
              className="p-4 rounded-lg border border-white/10 hover:border-purple-500/50 transition-colors"
            >
              <div className={`w-full h-8 rounded-md ${scheme.color}`} />
              <span className="block text-sm text-white mt-2 capitalize">
                {scheme.id}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};