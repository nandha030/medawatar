import React from 'react';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-quantum-900 to-quantum-800 pt-16 flex">
      <div className="flex flex-1 overflow-hidden">
        {children}
      </div>
    </div>
  );
};