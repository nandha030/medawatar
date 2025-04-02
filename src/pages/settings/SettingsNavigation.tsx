import React from 'react';
import { User, Lock, Bell, Link2, Shield, Palette, Laptop, Languages } from 'lucide-react';
import { cn } from '../../lib/utils';
import { settingsSections } from './settingsConfig';

interface SettingsNavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export const SettingsNavigation: React.FC<SettingsNavigationProps> = ({
  activeSection,
  onSectionChange
}) => {
  return (
    <div className="w-80 border-r border-white/10 overflow-y-auto">
      <nav className="p-4 space-y-2">
        {settingsSections.map(section => (
          <button
            key={section.id}
            onClick={() => onSectionChange(section.id)}
            className={cn(
              "w-full text-left px-4 py-3 rounded-lg transition-all duration-200",
              "hover:bg-white/5 group relative overflow-hidden",
              activeSection === section.id
                ? "bg-purple-500/20 text-purple-400"
                : "text-gray-400 hover:text-white"
            )}
          >
            <div className="flex items-center">
              <section.icon className="w-5 h-5 mr-3" />
              <div>
                <div className="font-medium">{section.label}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-gray-300">
                  {section.description}
                </div>
              </div>
            </div>
            {activeSection === section.id && (
              <div className="absolute inset-y-0 left-0 w-1 bg-purple-500 rounded-r"></div>
            )}
          </button>
        ))}
      </nav>
    </div>
  );
};