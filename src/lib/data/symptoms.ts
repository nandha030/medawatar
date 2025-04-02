// Symptom categories and specializations mapping
export interface Symptom {
  id: string;
  name: string;
  description: string;
  urgency: 'low' | 'medium' | 'high' | 'emergency';
  specializations: string[];
  commonConditions: string[];
}

export const symptoms: Symptom[] = [
  {
    id: 'chest-pain',
    name: 'Chest Pain',
    description: 'Pain or discomfort in the chest area',
    urgency: 'emergency',
    specializations: ['Cardiology', 'Emergency Medicine'],
    commonConditions: ['Heart Attack', 'Angina', 'Anxiety']
  },
  {
    id: 'headache',
    name: 'Headache',
    description: 'Pain in the head or upper neck',
    urgency: 'medium',
    specializations: ['Neurology', 'General Medicine'],
    commonConditions: ['Migraine', 'Tension Headache', 'Sinusitis']
  },
  {
    id: 'joint-pain',
    name: 'Joint Pain',
    description: 'Pain, stiffness, or swelling in joints',
    urgency: 'low',
    specializations: ['Orthopedics', 'Rheumatology'],
    commonConditions: ['Arthritis', 'Gout', 'Injury']
  },
  {
    id: 'shortness-breath',
    name: 'Shortness of Breath',
    description: 'Difficulty breathing or catching breath',
    urgency: 'high',
    specializations: ['Pulmonology', 'Cardiology', 'Emergency Medicine'],
    commonConditions: ['Asthma', 'COPD', 'Heart Failure']
  },
  {
    id: 'abdominal-pain',
    name: 'Abdominal Pain',
    description: 'Pain in the stomach or belly area',
    urgency: 'medium',
    specializations: ['Gastroenterology', 'General Surgery'],
    commonConditions: ['Appendicitis', 'Gastritis', 'IBS']
  }
];