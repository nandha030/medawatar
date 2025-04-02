import React from 'react';
import { Logo } from '../Logo';
import { FooterLinks } from './FooterLinks';
import { FooterSocial } from './FooterSocial';
import { Shield } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-quantum-900 to-quantum-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <Logo className="mb-6" />
            <p className="text-gray-400 mb-6">
              Revolutionizing healthcare through quantum-secure digital identities and AI-powered matchmaking.
            </p>
            <div className="flex items-center text-gray-400">
              <Shield className="w-5 h-5 mr-2" />
              <span className="text-sm">ISO 27001 & HIPAA Certified</span>
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-2">
            <FooterLinks />
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <FooterSocial />
        </div>

        {/* Copyright and Additional Links */}
        <div className="text-center text-gray-400 text-sm">
          <p className="mb-4">
            © {new Date().getFullYear()} Medawatar. All rights reserved.
          </p>
          <p>
            Medawatar is committed to protecting your privacy and ensuring the security of your health information.
            We comply with all applicable healthcare regulations and data protection standards.
          </p>
        </div>
      </div>
    </footer>
  );
};