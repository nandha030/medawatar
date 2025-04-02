import React from 'react';
import { Globe, Clock } from 'lucide-react';
import { Button } from '../../../components/ui/Button';

const languages = [
  { code: 'en', name: 'English', native: 'English' },
  { code: 'es', name: 'Spanish', native: 'Español' },
  { code: 'fr', name: 'French', native: 'Français' },
  { code: 'de', name: 'German', native: 'Deutsch' }
];

const timezones = [
  'America/New_York',
  'America/Los_Angeles',
  'Europe/London',
  'Asia/Tokyo'
];

export const LanguageSettings = () => {
  return (
    <div className="space-y-6">
      {/* Language Selection */}
      <div>
        <h3 className="text-lg font-medium text-white mb-4">Language</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {languages.map(lang => (
            <button
              key={lang.code}
              className="flex items-center p-4 bg-white/5 rounded-lg border border-white/10 hover:border-purple-500/50 transition-colors"
            >
              <Globe className="w-5 h-5 text-purple-400" />
              <div className="ml-3 text-left">
                <div className="text-white">{lang.name}</div>
                <div className="text-sm text-gray-400">{lang.native}</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Timezone Selection */}
      <div className="pt-6 border-t border-white/10">
        <h3 className="text-lg font-medium text-white mb-4">Timezone</h3>
        <div className="space-y-4">
          <div className="relative">
            <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <select
              className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 appearance-none"
            >
              {timezones.map(tz => (
                <option key={tz} value={tz}>{tz}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="pt-4">
        <Button>Save Preferences</Button>
      </div>
    </div>
  );
};