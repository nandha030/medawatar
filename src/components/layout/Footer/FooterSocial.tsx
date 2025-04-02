import React from 'react';
import { Twitter, Linkedin, Facebook, Instagram, Youtube, Mail } from 'lucide-react';

const socialLinks = [
  { icon: Twitter, href: 'https://twitter.com/medawatar', label: 'Twitter' },
  { icon: Linkedin, href: 'https://linkedin.com/company/medawatar', label: 'LinkedIn' },
  { icon: Facebook, href: 'https://facebook.com/medawatar', label: 'Facebook' },
  { icon: Instagram, href: 'https://instagram.com/medawatar', label: 'Instagram' },
  { icon: Youtube, href: 'https://youtube.com/medawatar', label: 'YouTube' },
  { icon: Mail, href: 'mailto:contact@medawatar.com', label: 'Email' }
];

export const FooterSocial = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {socialLinks.map((social) => (
        <a
          key={social.label}
          href={social.href}
          className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
        >
          <social.icon className="w-6 h-6" />
        </a>
      ))}
    </div>
  );
};