import React from 'react';
import { Building } from 'lucide-react';

interface PartnerSelectProps {
  value: string;
  onChange: (value: string) => void;
}

const partners = [
  { id: 'medawatar', name: 'Medawatar' },
  { id: 'global-health', name: 'Global Health Network' },
  { id: 'city-hospital', name: 'City Hospital' },
  { id: 'care-plus', name: 'Care Plus Medical' }
];

export const PartnerSelect: React.FC<PartnerSelectProps> = ({ value, onChange }) => {
  return (
    <div className="relative">
      <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="pl-9 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white appearance-none focus:outline-none focus:ring-2 focus:ring-purple-500/50"
      >
        {partners.map(partner => (
          <option key={partner.id} value={partner.id}>
            {partner.name}
          </option>
        ))}
      </select>
    </div>
  );
};