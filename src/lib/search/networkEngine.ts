import { networkData } from '../data/networkData';
import { doctors, partners } from '../data/dummyData';
import type { Doctor, Partner } from '../types';

interface NetworkSearchResult {
  condition: string;
  severity: string;
  specialists: Doctor[];
  facilities: Partner[];
  coverage: {
    insurance: string[];
    travel: string[];
    research: string[];
  };
}

export function searchNetwork(query: string): NetworkSearchResult | null {
  // Find matching condition
  const condition = Object.entries(networkData).find(([key]) => 
    key.toLowerCase().includes(query.toLowerCase())
  );

  if (!condition) return null;

  const [conditionName, data] = condition;

  // Find matching doctors based on specialties
  const specialists = doctors.filter(doctor =>
    data.primarySpecialties.includes(doctor.specialization)
  );

  // Find matching facilities
  const facilities = partners.filter(partner =>
    data.relatedServices.hospitals.includes(partner.name) ||
    data.relatedServices.clinics.includes(partner.name)
  );

  return {
    condition: conditionName,
    severity: data.severity,
    specialists,
    facilities,
    coverage: {
      insurance: data.relatedServices.insurance,
      travel: data.relatedServices.travel,
      research: data.relatedServices.research
    }
  };
}