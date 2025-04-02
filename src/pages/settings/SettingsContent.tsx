import React from 'react';
import { settingsSections } from './settingsConfig';
import {
  AccountSettings,
  SecuritySettings,
  NotificationSettings,
  AppearanceSettings,
  DeviceSettings,
  LanguageSettings,
  IntegrationSettings,
  PrivacySettings
} from './sections';

interface SettingsContentProps {
  activeSection: string;
}

const sectionComponents = {
  account: AccountSettings,
  security: SecuritySettings,
  notifications: NotificationSettings,
  appearance: AppearanceSettings,
  devices: DeviceSettings,
  language: LanguageSettings,
  integrations: IntegrationSettings,
  privacy: PrivacySettings
};

export const SettingsContent: React.FC<SettingsContentProps> = ({ activeSection }) => {
  const SectionComponent = sectionComponents[activeSection as keyof typeof sectionComponents];

  return (
    <div className="flex-1 overflow-y-auto p-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white/5 backdrop-blur-lg rounded-lg border border-white/10 p-6">
          <h2 className="text-xl font-semibold text-white mb-6">
            {settingsSections.find(s => s.id === activeSection)?.label}
          </h2>
          {SectionComponent ? <SectionComponent /> : (
            <p className="text-gray-400">
              Settings content for {activeSection} will be displayed here.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};