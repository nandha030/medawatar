import React from 'react';
import { Shield, Brain, Dna } from 'lucide-react';
import { Button } from '../ui/Button';

const features = [
  {
    icon: Shield,
    title: 'Quantum-Secure Identity',
    description: 'Your medical data protected by next-generation quantum cryptography',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Brain,
    title: 'AI-Powered Matching',
    description: 'Smart provider recommendations based on your unique health profile',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Dna,
    title: 'Genetic Profiling',
    description: 'Comprehensive genetic analysis for personalized healthcare',
    color: 'from-emerald-500 to-teal-500'
  }
];

export const KeyFeatures = () => {
  return (
    <section className="relative py-24 bg-white">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDEwMCwxMDAsMTAwLDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-10" />
      
      {/* Top Gradient Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-30" />
      
      {/* Bottom Gradient Border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Revolutionizing Healthcare Security
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the future of healthcare with our cutting-edge technology and comprehensive solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Card Background with Gradient Border */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
              
              {/* Card Content */}
              <div className="relative flex flex-col h-full bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300">
                {/* Icon with Gradient Background */}
                <div className="mb-6">
                  <div className="relative inline-block">
                    <div className={`absolute -inset-2 bg-gradient-to-r ${feature.color} rounded-lg blur-lg opacity-50 group-hover:opacity-100 transition duration-500`}></div>
                    <div className="relative w-14 h-14 bg-white rounded-lg flex items-center justify-center shadow-lg">
                      <feature.icon className={`w-8 h-8 bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`} />
                    </div>
                  </div>
                </div>

                {/* Title and Description */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow">{feature.description}</p>

                {/* Learn More Button */}
                <Button 
                  variant="outline"
                  className="mt-auto w-full group border-gray-200 hover:border-purple-500/50 text-gray-700 hover:text-purple-600"
                >
                  Learn More
                  <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};