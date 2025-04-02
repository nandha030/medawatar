import React from 'react';
import { ChevronDown, Shield, Dna, Globe2, Building, Cpu, Microscope } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../../lib/utils';

interface FeatureCategory {
  label: string;
  href: string;
  description: string;
  icon: React.ElementType;
}

export const featureCategories: FeatureCategory[] = [
  {
    label: 'Quantum Security',
    href: '/features/quantum-security',
    description: 'Military-grade encryption for your health data',
    icon: Shield
  },
  {
    label: 'Genetic Testing',
    href: '/features/genetic-testing',
    description: 'Comprehensive DNA analysis and profiling',
    icon: Dna
  },
  {
    label: 'Medical Tourism',
    href: '/features/medical-tourism',
    description: 'Global healthcare access and travel support',
    icon: Globe2
  }
];

interface PartnerCategory {
  label: string;
  href: string;
  description: string;
  icon: React.ElementType;
}

export const partnerCategories: PartnerCategory[] = [
  {
    label: 'Healthcare Providers',
    href: '/partners/healthcare-providers',
    description: 'Leading hospitals and medical facilities',
    icon: Building
  },
  {
    label: 'Technology Partners',
    href: '/partners/technology',
    description: 'Innovative healthcare technology solutions',
    icon: Cpu
  },
  {
    label: 'Security Partners',
    href: '/partners/security',
    description: 'Advanced quantum security solutions',
    icon: Shield
  },
  {
    label: 'Insurance Partners',
    href: '/partners/insurance',
    description: 'Global healthcare coverage providers',
    icon: Shield
  },
  {
    label: 'Travel Partners',
    href: '/partners/travel',
    description: 'Medical tourism and travel support',
    icon: Globe2
  },
  {
    label: 'Research Institutions',
    href: '/partners/research',
    description: 'Academic and research organizations',
    icon: Microscope
  }
];

export const navLinks = [
  { href: '/features', label: 'Features', hasDropdown: true, categories: featureCategories },
  { href: '/partners', label: 'Partners', hasDropdown: true, categories: partnerCategories },
  { href: '/contact', label: 'Contact' }
];

export const NavLinks = () => {
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null);
  const [isHovered, setIsHovered] = React.useState(false);
  const location = useLocation();
  const dropdownRef = React.useRef<HTMLDivElement>(null);
  const timeoutRef = React.useRef<NodeJS.Timeout>();

  const handleMouseEnter = (href: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveDropdown(href);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
      setIsHovered(false);
    }, 150);
  };

  React.useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <nav className="flex items-center space-x-1">
      {navLinks.map((link) => (
        <div
          key={link.href}
          className="relative group"
          onMouseEnter={() => handleMouseEnter(link.href)}
          onMouseLeave={handleMouseLeave}
        >
          <Link
            to={link.href}
            className={cn(
              "relative px-4 py-3 rounded-full text-sm font-medium",
              "flex items-center gap-1.5 transition-all duration-300",
              "hover:bg-white/10 hover:shadow-lg hover:shadow-purple-500/10",
              location.pathname.startsWith(link.href) 
                ? "text-purple-400 bg-white/5" 
                : "text-white/90 hover:text-white"
            )}
          >
            {link.label}
            {link.hasDropdown && (
              <ChevronDown className={cn(
                "w-4 h-4 transition-transform duration-300",
                activeDropdown === link.href && "rotate-180"
              )} />
            )}
          </Link>
          
          {link.hasDropdown && activeDropdown === link.href && (
            <div 
              ref={dropdownRef}
              className={cn(
                "absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80",
                "bg-white/10 rounded-2xl shadow-xl border border-white/10",
                "backdrop-blur-lg overflow-hidden z-50 transform",
                "transition-all duration-300 origin-top",
                isHovered ? "opacity-100 scale-100" : "opacity-0 scale-95"
              )}
            >
              <div className="p-2">
                {link.categories.map((category) => (
                  <Link
                    key={category.href}
                    to={category.href}
                    className={cn(
                      "flex items-center px-4 py-3 rounded-xl",
                      "hover:bg-white/10 group transition-all duration-300",
                      "hover:shadow-lg hover:shadow-purple-500/5",
                      location.pathname === category.href
                        ? "bg-white/5 text-purple-400"
                        : "text-white"
                    )}
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center mr-4 group-hover:bg-white/10 transition-colors">
                      <category.icon className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <div className="font-medium group-hover:text-purple-400 transition-colors">
                        {category.label}
                      </div>
                      <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                        {category.description}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </nav>
  );
};