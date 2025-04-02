import { symptoms } from '../data/symptoms';
import { doctors, partners } from '../data/dummyData';
import type { Doctor, Partner } from '../types';
import type { Symptom } from '../data/symptoms';

interface TriageResult {
  symptom: Symptom;
  recommendedDoctors: Doctor[];
  nearbyFacilities: Partner[];
  isEmergency: boolean;
  emergencyAdvice?: string;
}

export function triageSymptom(query: string): TriageResult | null {
  // Find matching symptom
  const matchedSymptom = symptoms.find(s => 
    s.name.toLowerCase().includes(query.toLowerCase()) ||
    s.description.toLowerCase().includes(query.toLowerCase()) ||
    s.commonConditions.some(c => c.toLowerCase().includes(query.toLowerCase()))
  );

  if (!matchedSymptom) return null;

  // Find relevant doctors based on specializations
  const recommendedDoctors = doctors.filter(doctor =>
    matchedSymptom.specializations.includes(doctor.specialization)
  );

  // Find nearby healthcare facilities
  const nearbyFacilities = partners.filter(partner =>
    partner.type === 'HEALTHCARE_PROVIDER' &&
    partner.specialization.toLowerCase().includes('emergency')
  );

  const isEmergency = matchedSymptom.urgency === 'emergency' || matchedSymptom.urgency === 'high';

  return {
    symptom: matchedSymptom,
    recommendedDoctors,
    nearbyFacilities,
    isEmergency,
    emergencyAdvice: isEmergency ? 'Please seek immediate medical attention or call emergency services.' : undefined
  };
}