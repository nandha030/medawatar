import React from 'react';
import { Shield, Lock, HeartPulse } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Quantum-Secure Identity',
    description: 'Your medical data protected by next-generation quantum cryptography'
  },
  {
    icon: HeartPulse,
    title: 'AI-Powered Matching',
    description: 'Smart provider recommendations based on your unique health profile'
  },
  {
    icon: Lock,
    title: 'Genetic Profiling',
    description: 'Comprehensive genetic analysis for personalized healthcare'
  }
];

export const HeroFeatures = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left relative z-10">
      {features.map((feature, index) => (
        <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
          <feature.icon className="w-10 h-10 text-pink-500 mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
          <p className="text-gray-300">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};