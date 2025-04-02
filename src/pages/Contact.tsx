import React from 'react';
import { ContactForm } from '../components/contact/ContactForm';
import { ContactInfo } from '../components/contact/ContactInfo';

export const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-quantum-900 to-quantum-800 pt-32 pb-24 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
      
      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="relative text-center mb-16">
          <div className="absolute -inset-x-20 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-20"></div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have questions about our quantum-secure healthcare platform? We're here to help 24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-semibold text-white mb-8">
              Contact Information
            </h2>
            <ContactInfo />
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold text-white mb-8">
              Send us a Message
            </h2>
            <ContactForm />
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-24 relative">
          <div className="absolute -inset-px bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl opacity-20"></div>
          <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101268.89799290095!2d-122.18118575!3d37.4040875!4m2!3m1!1s0x808fb7495bec0189:0x7c17d44a466baf9b!5e0!3m2!1sen!2sus!4v1710337200000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="filter grayscale opacity-80 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};