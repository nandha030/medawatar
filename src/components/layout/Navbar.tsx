import React, { useState, useEffect, useMemo } from 'react';
import { Menu, X, LogIn, UserPlus, LogOut, LayoutDashboard } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../ui/Button';
import { NavLinks } from './NavLinks';
import { MobileMenu } from './MobileMenu';
import { Logo } from './Logo';
import { ThemeToggle } from '../ui/ThemeToggle';
import { Theme, setTheme } from '../../lib/theme';
import { useUser } from '../../hooks/useUser';

export const Navbar = () => {
  const { user, logout } = useUser();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [theme, setThemeState] = useState<Theme>(() => 
    (localStorage.getItem('theme') as Theme) || 'system'
  );
  const isAuthenticated = useMemo(() => Boolean(user), [user]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleThemeChange = (newTheme: Theme) => {
    setThemeState(newTheme);
    setTheme(newTheme);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled || isHovered
        ? 'bg-white/10 backdrop-blur-lg shadow-xl rounded-b-3xl border-b border-white/10'
        : 'bg-transparent'
    }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between h-16 items-center">
          <Logo className="group hover:opacity-90 transition-opacity duration-200" />

          <div className="hidden md:flex items-center space-x-6">
            <NavLinks />
            <ThemeToggle 
              theme={theme}
              onThemeChange={handleThemeChange}
            />
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <Link to="/dashboard">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-purple-500/50 backdrop-blur-lg rounded-full flex items-center transition-all duration-300"
                  >
                    <LayoutDashboard className="w-4 h-4 mr-2" />
                    Dashboard
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    logout();
                    navigate('/');
                  }}
                  className="border border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-red-500/50 backdrop-blur-lg rounded-full flex items-center transition-all duration-300"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/signup">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-purple-500/50 backdrop-blur-lg rounded-full flex items-center transition-all duration-300"
                  >
                    <UserPlus className="w-4 h-4 mr-2" />
                    Sign Up
                  </Button>
                </Link>
                <Link to="/login">
                  <Button
                    variant="primary"
                    size="sm"
                    className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full flex items-center shadow-lg hover:shadow-purple-500/20 transition-all duration-300 border-0"
                  >
                    <LogIn className="w-4 h-4 mr-2" />
                    Login
                  </Button>
                </Link>
              </div>
            )}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-purple-900"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <MobileMenu isOpen={isMobileMenuOpen} isAuthenticated={isAuthenticated} user={user} />
    </nav>
  );
};