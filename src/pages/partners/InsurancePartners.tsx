import React from 'react';
import { Shield, Globe2, Heart, FileText } from 'lucide-react';

const features = [
  {
    icon: Globe2,
    title: 'Global Coverage',
    description: 'Comprehensive healthcare coverage across international borders'
  },
  {
    icon: Heart,
    title: 'Personalized Plans',
    description: 'Tailored insurance solutions for individual healthcare needs'
  },
  {
    icon: FileText,
    title: 'Smart Claims',
    description: 'Automated, quantum-secure claims processing system'
  }
];

export const InsurancePartners = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-quantum-900 to-quantum-800 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full blur opacity-75 animate-pulse"></div>
              <div className="relative bg-white p-4 rounded-full">
                <Shield className="w-12 h-12 text-purple-900" />
              </div>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Insurance Partners
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Global healthcare coverage with seamless integration
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-300"
            >
              <div className="relative mb-4 inline-block">
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                <feature.icon className="w-8 h-8 text-purple-400 relative" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};