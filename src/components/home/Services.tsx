import React from 'react';
import { Activity, UserPlus, Microscope, Plane } from 'lucide-react';

const services = [
  {
    icon: Activity,
    title: 'Health Monitoring',
    description: 'Real-time health tracking and predictive analytics',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2070'
  },
  {
    icon: UserPlus,
    title: 'Provider Network',
    description: 'Access to global network of certified healthcare providers',
    image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&q=80&w=2091'
  },
  {
    icon: Microscope,
    title: 'Advanced Diagnostics',
    description: 'Cutting-edge diagnostic tools and genetic testing',
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=2070'
  },
  {
    icon: Plane,
    title: 'Medical Tourism',
    description: 'Comprehensive medical travel planning and support',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=2074'
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-medical-white dark:bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Comprehensive Healthcare Services
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            From preventive care to specialized treatments, we offer a full spectrum of healthcare services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl"
            >
              <div className="absolute inset-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/0"></div>
              </div>
              <div className="relative p-8 h-full min-h-[320px] flex flex-col justify-end">
                <service.icon className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="text-2xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-gray-200">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};