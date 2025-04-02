export interface Partner {
  id: string;
  name: string;
  type: string;
  location: string;
  specialization: string;
  rating: number;
  image: string;
}

export interface Doctor {
  id: string;
  name: string;
  specialization: string;
  hospital: string;
  experience: string;
  rating: number;
  image: string;
}

export interface Patient {
  id: string;
  name: string;
  age: number;
  bloodType: string;
  condition: string;
  lastVisit: string;
  doctor: string;
}

export interface MedicalSymptom {
  id: string;
  symptom: string;
  frequency: number;
  severity: number;
  duration: string;
  commonCauses: string[];
  recommendedSpecialist: string;
}

export interface VitalSign {
  id: string;
  name: string;
  unit: string;
  normalRange: {
    min?: number;
    max?: number;
    systolic?: { min: number; max: number };
    diastolic?: { min: number; max: number };
    fasting?: { min: number; max: number };
    postMeal?: { min: number; max: number };
  };
}

export interface VitalReading {
  vitalId: string;
  value: number | { systolic: number; diastolic: number } | { fasting: number; postMeal: number };
}

export interface PatientVitals {
  patientId: string;
  vitals: Array<{
    timestamp: Date;
    readings: VitalReading[];
  }>;
}

export interface HealthcareNetwork {
  severity: string;
  primarySpecialties: string[];
  relatedServices: NetworkService;
  coverage: Coverage;
}

export interface NetworkService {
  doctors: string[];
  clinics: string[];
  hospitals: string[];
  labs: string[];
  pharmacies: string[];
  insurance: string[];
  travel: string[];
  research: string[];
}

export interface Coverage {
  insuranceNotes: string;
  travelSupport: string;
  researchPrograms: string;
}