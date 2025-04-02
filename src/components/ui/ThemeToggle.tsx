import React from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';
import { Button } from './Button';
import { Theme } from '../../lib/theme';

interface ThemeToggleProps {
  theme: Theme;
  onThemeChange: (theme: Theme) => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, onThemeChange }) => {
  const icons = {
    light: Sun,
    dark: Moon,
    system: Monitor
  };

  const Icon = icons[theme];

  return (
    <div className="flex items-center gap-2">
      <Button
        variant="outline"
        size="sm"
        className="relative group dark:border-gray-700"
        onClick={() => onThemeChange(theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light')}
      >
        <Icon className="w-4 h-4 transition-transform group-hover:scale-110" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  );
};