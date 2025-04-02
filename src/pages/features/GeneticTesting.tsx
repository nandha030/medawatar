import React from 'react';
import { Dna } from 'lucide-react';

export const GeneticTesting = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-quantum-900 to-quantum-800 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full blur opacity-75 animate-pulse"></div>
              <div className="relative bg-white p-4 rounded-full">
                <Dna className="w-12 h-12 text-purple-900" />
              </div>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Genetic Testing
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive DNA analysis and profiling for personalized healthcare
          </p>
        </div>
      </div>
    </div>
  );
};