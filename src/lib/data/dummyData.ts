// Dummy data for the application
import type { Partner, Doctor, Patient } from '../types';

export const partners: Partner[] = [
  {
    id: 'hp1',
    name: 'Global Health Network',
    type: 'HEALTHCARE_PROVIDER',
    location: 'New York, USA',
    specialization: 'Multi-Specialty Hospital',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2053'
  },
  {
    id: 'tp1',
    name: 'TechMed Solutions',
    type: 'TECH_PARTNER',
    location: 'San Francisco, USA',
    specialization: 'AI Healthcare Solutions',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=2069'
  },
  {
    id: 'sp1',
    name: 'Quantum Shield Security',
    type: 'SECURITY_PROVIDER',
    location: 'London, UK',
    specialization: 'Healthcare Data Security',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=2070'
  },
  {
    id: 'ip1',
    name: 'Global Care Insurance',
    type: 'INSURANCE_PARTNER',
    location: 'Zurich, Switzerland',
    specialization: 'International Health Insurance',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=2070'
  },
  {
    id: 'rp1',
    name: 'BioTech Research Institute',
    type: 'RESEARCH_PARTNER',
    location: 'Boston, USA',
    specialization: 'Clinical Research',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=2070'
  }
];

export const doctors: Doctor[] = [
  {
    id: 'd1',
    name: 'Dr. Sarah Johnson',
    specialization: 'Cardiology',
    hospital: 'Global Health Network',
    experience: '15 years',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=2070'
  },
  {
    id: 'd2',
    name: 'Dr. Michael Chen',
    specialization: 'Neurology',
    hospital: 'Global Health Network',
    experience: '12 years',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=2070'
  },
  {
    id: 'd3',
    name: 'Dr. Emily Davis',
    specialization: 'Pediatrics',
    hospital: 'Children\'s Medical Center',
    experience: '10 years',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=2070'
  },
  {
    id: 'd4',
    name: 'Dr. James Wilson',
    specialization: 'Orthopedics',
    hospital: 'Sports Medicine Center',
    experience: '18 years',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=2070'
  },
  {
    id: 'd5',
    name: 'Dr. Maria Garcia',
    specialization: 'Oncology',
    hospital: 'Cancer Research Institute',
    experience: '14 years',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=2070'
  }
];

export const patients: Patient[] = [
  {
    id: 'p1',
    name: 'John Smith',
    age: 45,
    bloodType: 'A+',
    condition: 'Hypertension',
    lastVisit: '2024-03-15',
    doctor: 'Dr. Sarah Johnson'
  },
  {
    id: 'p2',
    name: 'Emma Thompson',
    age: 32,
    bloodType: 'O-',
    condition: 'Diabetes Type 2',
    lastVisit: '2024-03-14',
    doctor: 'Dr. Michael Chen'
  },
  {
    id: 'p3',
    name: 'David Lee',
    age: 28,
    bloodType: 'B+',
    condition: 'Asthma',
    lastVisit: '2024-03-12',
    doctor: 'Dr. Emily Davis'
  },
  {
    id: 'p4',
    name: 'Sofia Rodriguez',
    age: 52,
    bloodType: 'AB+',
    condition: 'Arthritis',
    lastVisit: '2024-03-10',
    doctor: 'Dr. James Wilson'
  },
  {
    id: 'p5',
    name: 'Michael Brown',
    age: 39,
    bloodType: 'O+',
    condition: 'Migraine',
    lastVisit: '2024-03-08',
    doctor: 'Dr. Maria Garcia'
  }
];