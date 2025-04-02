import React from 'react';

interface FooterSection {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
}

const footerSections: FooterSection[] = [
  {
    title: 'Legal',
    links: [
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Cookie Policy', href: '/cookies' },
      { label: 'Data Protection', href: '/data-protection' }
    ]
  },
  {
    title: 'Compliance',
    links: [
      { label: 'HIPAA Compliance', href: '/hipaa' },
      { label: 'GDPR', href: '/gdpr' },
      { label: 'ISO 27001', href: '/iso-27001' },
      { label: 'SOC 2 Type II', href: '/soc2' }
    ]
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'Careers', href: '/careers' },
      { label: 'Press Kit', href: '/press' }
    ]
  },
  {
    title: 'Support',
    links: [
      { label: 'Help Center', href: '/help' },
      { label: 'FAQs', href: '/faqs' },
      { label: 'Provider Support', href: '/provider-support' },
      { label: 'Patient Resources', href: '/resources' }
    ]
  }
];

export const FooterLinks = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
      {footerSections.map((section) => (
        <div key={section.title}>
          <h3 className="text-white font-semibold mb-4">{section.title}</h3>
          <ul className="space-y-2">
            {section.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};