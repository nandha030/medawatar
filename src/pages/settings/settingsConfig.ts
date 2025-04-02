import { User, Lock, Bell, Link2, Shield, Palette, Laptop, Languages } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface SettingsSection {
  id: string;
  label: string;
  icon: LucideIcon;
  description: string;
}

export const settingsSections: SettingsSection[] = [
  {
    id: 'account',
    label: 'Account',
    icon: User,
    description: 'Manage your account settings and preferences'
  },
  {
    id: 'security',
    label: 'Security',
    icon: Lock,
    description: 'Update your security settings and passwords'
  },
  {
    id: 'notifications',
    label: 'Notifications',
    icon: Bell,
    description: 'Configure how you receive notifications'
  },
  {
    id: 'appearance',
    label: 'Appearance',
    icon: Palette,
    description: 'Customize how Medawatar looks on your device'
  },
  {
    id: 'devices',
    label: 'Devices',
    icon: Laptop,
    description: 'Manage your connected devices and sessions'
  },
  {
    id: 'language',
    label: 'Language & Region',
    icon: Languages,
    description: 'Set your language and regional preferences'
  },
  {
    id: 'integrations',
    label: 'Integrations',
    icon: Link2,
    description: 'Manage connected apps and services'
  },
  {
    id: 'privacy',
    label: 'Privacy & Security',
    icon: Shield,
    description: 'Control your privacy and security settings'
  }
];