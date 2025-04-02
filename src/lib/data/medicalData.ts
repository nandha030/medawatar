import type { MedicalSymptom, VitalSign, PatientVitals } from '../types';

export const medicalSymptoms: MedicalSymptom[] = [
  { id: 'S001', symptom: "Headache", frequency: 342, severity: 6.5, duration: "4-6 hours", commonCauses: ["Stress", "Dehydration", "Migraine"], recommendedSpecialist: "Neurologist" },
  { id: 'S002', symptom: "Fatigue", frequency: 289, severity: 5.8, duration: "All day", commonCauses: ["Sleep Deprivation", "Anemia", "Depression"], recommendedSpecialist: "General Physician" },
  { id: 'S003', symptom: "Fever", frequency: 256, severity: 7.2, duration: "2-3 days", commonCauses: ["Infection", "Flu", "COVID-19"], recommendedSpecialist: "Infectious Disease Specialist" },
  { id: 'S004', symptom: "Cough", frequency: 234, severity: 5.4, duration: "1-2 weeks", commonCauses: ["Cold", "Allergies", "Bronchitis"], recommendedSpecialist: "Pulmonologist" },
  { id: 'S005', symptom: "Muscle Pain", frequency: 198, severity: 6.1, duration: "3-4 days", commonCauses: ["Exercise", "Strain", "Fibromyalgia"], recommendedSpecialist: "Rheumatologist" },
  { id: 'S006', symptom: "Sore Throat", frequency: 187, severity: 5.9, duration: "5-7 days", commonCauses: ["Viral Infection", "Strep", "Allergies"], recommendedSpecialist: "ENT Specialist" },
  { id: 'S007', symptom: "Shortness of Breath", frequency: 165, severity: 7.8, duration: "1-2 hours", commonCauses: ["Asthma", "Anxiety", "Heart Condition"], recommendedSpecialist: "Pulmonologist" },
  { id: 'S008', symptom: "Nausea", frequency: 154, severity: 6.3, duration: "2-4 hours", commonCauses: ["Food Poisoning", "Migraine", "Pregnancy"], recommendedSpecialist: "Gastroenterologist" },
  { id: 'S009', symptom: "Loss of Appetite", frequency: 143, severity: 4.9, duration: "3-5 days", commonCauses: ["Depression", "Infection", "Medication"], recommendedSpecialist: "Gastroenterologist" },
  { id: 'S010', symptom: "Dizziness", frequency: 132, severity: 5.7, duration: "15-30 mins", commonCauses: ["Low Blood Pressure", "Vertigo", "Dehydration"], recommendedSpecialist: "Neurologist" },
  { id: 'S011', symptom: "Chest Pain", frequency: 121, severity: 8.1, duration: "1-2 hours", commonCauses: ["Heart Attack", "Anxiety", "GERD"], recommendedSpecialist: "Cardiologist" },
  { id: 'S012', symptom: "Diarrhea", frequency: 112, severity: 6.2, duration: "2-3 days", commonCauses: ["Food Poisoning", "IBS", "Infection"], recommendedSpecialist: "Gastroenterologist" },
  { id: 'S013', symptom: "Back Pain", frequency: 98, severity: 6.7, duration: "1-2 weeks", commonCauses: ["Strain", "Herniated Disc", "Poor Posture"], recommendedSpecialist: "Orthopedist" },
  { id: 'S014', symptom: "Joint Pain", frequency: 87, severity: 6.4, duration: "3-4 days", commonCauses: ["Arthritis", "Injury", "Gout"], recommendedSpecialist: "Rheumatologist" },
  { id: 'S015', symptom: "Skin Rash", frequency: 76, severity: 4.8, duration: "5-7 days", commonCauses: ["Allergies", "Infection", "Autoimmune"], recommendedSpecialist: "Dermatologist" },
  { id: 'S016', symptom: "Chills", frequency: 65, severity: 5.3, duration: "1-2 days", commonCauses: ["Fever", "Infection", "Flu"], recommendedSpecialist: "Infectious Disease Specialist" },
  { id: 'S017', symptom: "Sweating", frequency: 54, severity: 4.6, duration: "2-4 hours", commonCauses: ["Fever", "Anxiety", "Hormones"], recommendedSpecialist: "Endocrinologist" },
  { id: 'S018', symptom: "Vision Changes", frequency: 43, severity: 6.9, duration: "30-60 mins", commonCauses: ["Migraine", "Eye Strain", "Diabetes"], recommendedSpecialist: "Ophthalmologist" },
  { id: 'S019', symptom: "Ear Pain", frequency: 32, severity: 5.6, duration: "2-3 days", commonCauses: ["Infection", "Pressure Changes", "Wax Buildup"], recommendedSpecialist: "ENT Specialist" },
  { id: 'S020', symptom: "Anxiety", frequency: 21, severity: 6.8, duration: "Variable", commonCauses: ["Stress", "Trauma", "Chemical Imbalance"], recommendedSpecialist: "Psychiatrist" }
];

export const vitalSigns: VitalSign[] = [
  { id: 'V001', name: 'Heart Rate', unit: 'bpm', normalRange: { min: 60, max: 100 } },
  { id: 'V002', name: 'Blood Pressure', unit: 'mmHg', normalRange: { systolic: { min: 90, max: 120 }, diastolic: { min: 60, max: 80 } } },
  { id: 'V003', name: 'Body Temperature', unit: '°C', normalRange: { min: 36.5, max: 37.5 } },
  { id: 'V004', name: 'Respiratory Rate', unit: 'breaths/min', normalRange: { min: 12, max: 20 } },
  { id: 'V005', name: 'Oxygen Saturation', unit: '%', normalRange: { min: 95, max: 100 } },
  { id: 'V006', name: 'Blood Glucose', unit: 'mg/dL', normalRange: { fasting: { min: 70, max: 100 }, postMeal: { min: 100, max: 140 } } }
];

// Sample patient vitals data
export const patientVitals: PatientVitals[] = patients.map(patient => ({
  patientId: patient.id,
  vitals: [
    {
      timestamp: new Date(),
      readings: [
        { vitalId: 'V001', value: Math.floor(Math.random() * (100 - 60) + 60) },
        { vitalId: 'V002', value: { systolic: Math.floor(Math.random() * (120 - 90) + 90), diastolic: Math.floor(Math.random() * (80 - 60) + 60) } },
        { vitalId: 'V003', value: (Math.random() * (37.5 - 36.5) + 36.5).toFixed(1) },
        { vitalId: 'V004', value: Math.floor(Math.random() * (20 - 12) + 12) },
        { vitalId: 'V005', value: Math.floor(Math.random() * (100 - 95) + 95) },
        { vitalId: 'V006', value: { fasting: Math.floor(Math.random() * (100 - 70) + 70), postMeal: Math.floor(Math.random() * (140 - 100) + 100) } }
      ]
    }
  ]
}));