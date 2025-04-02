import React from 'react';
import { Shield } from 'lucide-react';
import { SearchEngine } from '../search/SearchEngine';
import { QuantumIDCard } from './QuantumIDCard';

export const HeroContent = () => {
  return (
    <div className="flex flex-col lg:flex-row items-start justify-between gap-16">
      <div className="text-center lg:text-left lg:flex-1 relative">
        {/* Decorative background blur */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        
        <div className="relative flex lg:justify-start justify-center mb-8">
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full blur opacity-75 animate-pulse"></div>
            <div className="relative bg-white p-4 rounded-full">
              <Shield className="w-12 h-12 text-purple-900" />
            </div>
          </div>
        </div>

        <h1 className="text-4xl sm:text-7xl font-bold text-white mb-6 tracking-tight relative z-20">
          Transform Your
          <span className="block mt-2 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
            Healthcare Journey
          </span>
        </h1>

        <p className="text-xl text-gray-300 mb-12 max-w-2xl lg:mx-0 relative z-20">
          Experience the future of healthcare with quantum-secure identity and AI-powered personalization.
        </p>

        <div className="relative z-[60] mb-32">
          <SearchEngine />
        </div>
      </div>
      
      <div className="lg:flex-1 flex justify-center lg:justify-end relative">
        {/* Decorative elements */}
        <div className="absolute -top-10 -right-10 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
        
        <div className="relative">
          {/* Background glow effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-xl opacity-30 animate-pulse"></div>
          
          {/* Sample ID cards stacked */}
          <div className="relative space-y-4 transform hover:scale-105 transition-transform duration-500">
            <QuantumIDCard
              userType="TECH_PARTNER"
              name="Quantum Security"
              specialization="Security Provider"
              quantumId="QSEC-2024-0001"
              className="w-96 transform translate-x-4 translate-y-4 opacity-40 hover:opacity-60 transition-opacity duration-300"
            />
            <QuantumIDCard
              userType="HEALTHCARE_PROVIDER"
              name="Global Health Network"
              specialization="Healthcare Provider"
              quantumId="GHN-2024-0001"
              className="w-96 transform translate-x-2 translate-y-2 opacity-70 hover:opacity-90 transition-opacity duration-300"
            />
            <QuantumIDCard
              userType="RESEARCH_PARTNER"
              name="GenomeTech Labs"
              specialization="Research Partner"
              quantumId="GTL-2024-0001"
              className="w-96 hover:shadow-2xl transition-shadow duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};