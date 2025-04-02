import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const contactDetails = [
  {
    icon: Phone,
    title: 'Phone',
    details: [
      '+1 (888) MEDAWATAR',
      '+1 (888) 633-2928'
    ]
  },
  {
    icon: Mail,
    title: 'Email',
    details: [
      'contact@medawatar.com',
      'support@medawatar.com'
    ]
  },
  {
    icon: MapPin,
    title: 'Address',
    details: [
      'Medawatar Healthcare Tower',
      '123 Innovation Drive',
      'Silicon Valley, CA 94025'
    ]
  },
  {
    icon: Clock,
    title: 'Hours',
    details: [
      'Monday - Friday: 24/7',
      'Weekend: 24/7',
      'Emergency Support: Always Available'
    ]
  }
];

export const ContactInfo = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {contactDetails.map((detail, index) => (
        <div
          key={index}
          className="group bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-300"
        >
          <div className="flex items-center mb-4">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition-opacity duration-300"></div>
              <detail.icon className="w-6 h-6 text-purple-400 relative" />
            </div>
            <h3 className="ml-4 text-lg font-semibold text-white">{detail.title}</h3>
          </div>
          <div className="space-y-2 text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
            {detail.details.map((text, idx) => (
              <p key={idx}>{text}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};