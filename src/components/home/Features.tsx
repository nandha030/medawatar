import React from 'react';
import { Shield, Dna, Stethoscope, Globe2, Brain, Lock } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Quantum-Secure Identity',
    description: 'Military-grade encryption protecting your medical data with quantum-resistant algorithms'
  },
  {
    icon: Brain,
    title: 'AI-Powered Matching',
    description: 'Advanced algorithms match you with the perfect healthcare providers based on your unique needs'
  },
  {
    icon: Dna,
    title: 'Genetic Profiling',
    description: 'Comprehensive DNA analysis for personalized treatment and preventive care'
  },
  {
    icon: Globe2,
    title: 'Global Healthcare Access',
    description: 'Connect with top medical facilities and specialists worldwide'
  },
  {
    icon: Stethoscope,
    title: 'Telemedicine Integration',
    description: 'Seamless virtual consultations with healthcare providers anywhere, anytime'
  },
  {
    icon: Lock,
    title: 'Blockchain Records',
    description: 'Immutable medical records ensuring data integrity and secure sharing'
  }
];

export const Features = () => {
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-quantum-800 to-quantum-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Revolutionary Healthcare Features
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Experience the future of healthcare with our cutting-edge technology and comprehensive solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-300 group"
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
    </section>
  );
};