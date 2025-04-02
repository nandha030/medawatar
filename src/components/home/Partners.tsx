import React from 'react';
import { ChevronRight } from 'lucide-react';

const partners = [
  {
    name: 'Global Health Network',
    logo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070',
    category: 'Healthcare Provider'
  },
  {
    name: 'TechMed Solutions',
    logo: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2070',
    category: 'Technology Partner'
  },
  {
    name: 'Quantum Security',
    logo: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=2070',
    category: 'Security Provider'
  },
  {
    name: 'GenomeTech Labs',
    logo: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=2070',
    category: 'Research Partner'
  },
  {
    name: 'Global Insurance Group',
    logo: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2070',
    category: 'Insurance Partner'
  },
  {
    name: 'MedTravel Solutions',
    logo: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2070',
    category: 'Travel Partner'
  }
];

export const Partners = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-quantum-900 to-quantum-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Collaborating with top healthcare and technology partners to deliver excellence
          </p>
          <div className="mt-4">
            <a
              href="/partners"
              className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-200"
            >
              View All Partners
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-lg border border-white/10"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <div className="p-6">
                <span className="text-sm text-purple-400">{partner.category}</span>
                <h3 className="text-xl font-semibold text-white mt-1">{partner.name}</h3>
                <a
                  href={`/partners/${partner.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="mt-2 inline-flex items-center text-purple-400 hover:text-purple-300 text-sm transition-colors duration-200"
                >
                  Learn More
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};