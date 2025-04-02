import type { HealthcareNetwork, NetworkService, Coverage } from '../types';

export const networkData: Record<string, HealthcareNetwork> = {
  "Chest Pain": {
    severity: "High",
    primarySpecialties: ["Cardiology", "Emergency Medicine"],
    relatedServices: {
      doctors: ["Dr. Sarah Chen", "Dr. Michael Patel"],
      clinics: ["Bay Area Health Clinic", "SOMA Health Services"],
      hospitals: ["Pacific Medical Center", "Bay Area General Hospital"],
      labs: ["Bay Area Clinical Labs"],
      pharmacies: ["CityHealth Pharmacy", "Golden Gate Pharmacy"],
      insurance: ["Pacific Health Insurance", "Golden State Healthcare"],
      travel: ["MedTravel Assistance", "Care Without Borders"],
      research: ["BioInnovate Research", "Medical Technology Institute"]
    },
    coverage: {
      insuranceNotes: "Requires pre-authorization for non-emergency procedures",
      travelSupport: "Emergency medical evacuation covered",
      researchPrograms: "Ongoing clinical trials for cardiac treatments"
    }
  },
  "Chronic Pain": {
    severity: "High",
    primarySpecialties: ["Pain Management", "Neurology"],
    relatedServices: {
      doctors: ["Dr. James Wilson", "Dr. Michael Patel"],
      clinics: ["North Beach Wellness Center"],
      hospitals: ["Pacific Medical Center"],
      labs: ["Bay Area Clinical Labs"],
      pharmacies: ["Bay Area Prescription Center"],
      insurance: ["Bay Area Medical Insurance", "West Coast Health Plan"],
      travel: ["HealthCare Voyages", "MedJourney Solutions"],
      research: ["Advanced Medical Research", "Bay Area Research Consortium"]
    },
    coverage: {
      insuranceNotes: "Long-term pain management requires treatment plan approval",
      travelSupport: "Medical transportation for specialized treatment",
      researchPrograms: "Pain management clinical studies available"
    }
  },
  "Genetic Disorders": {
    severity: "Variable",
    primarySpecialties: ["Medical Genetics", "Specialty-Specific"],
    relatedServices: {
      doctors: ["Dr. Maria Rodriguez", "Dr. Robert Garcia"],
      clinics: ["Pacific Heights Medical Group"],
      hospitals: ["Silicon Valley Medical Center"],
      labs: ["GenomicsDirect", "Advanced Genetic Research"],
      pharmacies: ["Bay Area Prescription Center", "MedPlus Pharmacy"],
      insurance: ["Pacific Health Insurance", "California Care Solutions"],
      travel: ["Global Patient Services", "MedTravel Assistance"],
      research: ["LifeScience Innovations", "BioInnovate Research"]
    },
    coverage: {
      insuranceNotes: "Genetic testing coverage varies by plan",
      travelSupport: "International genetic center referrals available",
      researchPrograms: "Multiple genetic research studies ongoing"
    }
  },
  "Complex Surgical Needs": {
    severity: "High",
    primarySpecialties: ["Surgery", "Specialty-Specific"],
    relatedServices: {
      doctors: ["Dr. Michael Patel", "Dr. Sarah Chen"],
      clinics: ["Bay Area Health Clinic"],
      hospitals: ["Bay Area General Hospital", "Pacific Medical Center"],
      labs: ["Bay Area Clinical Labs", "Peninsula Pathology"],
      pharmacies: ["Golden Gate Pharmacy"],
      insurance: ["Golden State Healthcare", "West Coast Health Plan"],
      travel: ["MedTravel Assistance", "HealthCare Voyages"],
      research: ["Medical Technology Institute", "Advanced Medical Research"]
    },
    coverage: {
      insuranceNotes: "Pre-authorization required, second opinion coverage available",
      travelSupport: "Medical tourism options for specific procedures",
      researchPrograms: "Surgical technique research studies"
    }
  }
};