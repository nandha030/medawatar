import React from 'react';
import { LogIn, UserPlus, LayoutDashboard, LogOut } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../ui/Button';
import { navLinks } from './NavLinks';
import { useUser } from '../../hooks/useUser';

interface MobileMenuProps {
  isOpen: boolean;
  isAuthenticated: boolean;
  user: User | null;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, isAuthenticated, user }) => {
  const { logout } = useUser();
  const navigate = useNavigate();

  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-white/90 backdrop-blur-md border-t border-white/20 rounded-b-2xl shadow-lg">
      <div className="px-2 pt-2 pb-3 space-y-1">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-purple-900 dark:hover:text-purple-400 hover:bg-purple-50/50 dark:hover:bg-purple-900/20 rounded-lg transition-colors duration-200"
          >
            {link.label}
          </a>
        ))}
        {isAuthenticated ? (
          <div className="flex flex-col space-y-2 mt-4">
            <Link to="/dashboard" className="w-full">
              <Button
                variant="outline"
                size="sm"
                className="w-full border-white/20 text-white hover:bg-white/10 flex items-center justify-center"
              >
                <LayoutDashboard className="w-4 h-4 mr-2" />
                Dashboard
              </Button>
            </Link>
            <Button
              variant="primary"
              size="sm"
              onClick={() => {
                logout();
                navigate('/');
              }}
              className="w-full flex items-center justify-center"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        ) : (
          <div className="flex flex-col space-y-2 mt-4">
          <Link to="/signup" className="w-full">
            <Button
              variant="outline"
              size="sm"
              className="w-full border-white/20 text-white hover:bg-white/10 flex items-center justify-center"
            >
              <UserPlus className="w-4 h-4 mr-2" />
              Sign Up
            </Button>
          </Link>
          <Link to="/login" className="w-full">
            <Button
              variant="primary"
              size="sm"
              className="w-full shadow-lg hover:shadow-purple-500/20 dark:hover:shadow-purple-400/20 transition-shadow duration-300 flex items-center justify-center"
            >
              <LogIn className="w-4 h-4 mr-2" />
              Login
            </Button>
          </Link>
          </div>
        )}
      </div>
    </div>
  );
};