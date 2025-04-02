import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  showProfile?: boolean;
  profileName?: string;
}

export const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  showProfile = false,
  profileName,
  ...props 
}) => {
  return (
    <Link to="/" className={`flex items-center space-x-3 ${className}`} {...props}>
      <div className="relative w-14 h-14">
        <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700] to-[#FFA500] rounded-lg blur-sm opacity-75 animate-pulse" />
        <img 
          src="/logo.svg" 
          alt="Medawatar" 
          className="relative w-full h-full drop-shadow-lg transform hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="flex flex-col">
        <span className="text-2xl font-bold font-orbitron bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FF8C00] bg-clip-text text-transparent tracking-wider hover:scale-105 transition-transform duration-300">
          Medawatar
        </span>
        {showProfile && profileName ? (
          <span className="text-sm font-medium text-gray-300 tracking-wide">
            Welcome, {profileName}
          </span>
        ) : (
          <span className="text-xs font-medium bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent tracking-wide hover:from-blue-300 hover:to-blue-500 transition-colors duration-300">
            Your visa for Global Healthcare
          </span>
        )}
      </div>
    </Link>
  );
};