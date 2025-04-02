import React from 'react';
import { User, Building, Heart, AlertTriangle, Phone } from 'lucide-react';
import { doctors, partners, patients } from '../../lib/data/dummyData';
import { triageSymptom } from '../../lib/search/triageEngine';
import type { Doctor, Partner, Patient } from '../../lib/types';
import type { Symptom } from '../../lib/data/symptoms';
import { Button } from '../ui/Button';

interface SearchResultsProps {
  query: string;
}

export const SearchResults: React.FC<SearchResultsProps> = ({ query }) => {
  const searchResults = React.useMemo(() => {
    const normalizedQuery = query.toLowerCase();
    const triageResult = triageSymptom(query);
    
    const matchedDoctors = doctors.filter(doctor => 
      doctor.name.toLowerCase().includes(normalizedQuery) ||
      doctor.specialization.toLowerCase().includes(normalizedQuery) ||
      doctor.hospital.toLowerCase().includes(normalizedQuery)
    );

    const matchedPartners = partners.filter(partner =>
      partner.name.toLowerCase().includes(normalizedQuery) ||
      partner.type.toLowerCase().includes(normalizedQuery) ||
      partner.specialization.toLowerCase().includes(normalizedQuery)
    );

    const matchedPatients = patients.filter(patient =>
      patient.name.toLowerCase().includes(normalizedQuery) ||
      patient.condition.toLowerCase().includes(normalizedQuery) ||
      patient.doctor.toLowerCase().includes(normalizedQuery)
    );

    return {
      triageResult,
      doctors: matchedDoctors,
      partners: matchedPartners,
      patients: matchedPatients
    };
  }, [query]);

  if (!query) return null;

  return (
    <div className="fixed inset-x-4 top-32 mx-auto max-w-6xl bg-white/10 backdrop-blur-lg rounded-2xl border border-white/10 shadow-2xl overflow-hidden z-[100]">
      <div className="max-h-[60vh] overflow-y-auto">
        {/* Triage Results */}
        {searchResults.triageResult && (
          <div className="p-6 border-b border-white/10">
            <TriageResult result={searchResults.triageResult} />
          </div>
        )}

        {/* Doctors */}
        {searchResults.doctors.length > 0 && (
          <div className="p-6 border-b border-white/10">
            <h3 className="text-sm font-medium text-gray-400 mb-4">Doctors</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {searchResults.doctors.map((doctor) => (
                <DoctorResult key={doctor.id} doctor={doctor} />
              ))}
            </div>
          </div>
        )}

        {/* Partners */}
        {searchResults.partners.length > 0 && (
          <div className="p-6 border-b border-white/10">
            <h3 className="text-sm font-medium text-gray-400 mb-4">Partners</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {searchResults.partners.map((partner) => (
                <PartnerResult key={partner.id} partner={partner} />
              ))}
            </div>
          </div>
        )}

        {/* Patients */}
        {searchResults.patients.length > 0 && (
          <div className="p-6">
            <h3 className="text-sm font-medium text-gray-400 mb-4">Patients</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {searchResults.patients.map((patient) => (
                <PatientResult key={patient.id} patient={patient} />
              ))}
            </div>
          </div>
        )}

        {/* No Results */}
        {!searchResults.triageResult && !searchResults.doctors.length && !searchResults.partners.length && !searchResults.patients.length && (
          <div className="p-6 text-center text-gray-400">
            No results found for "{query}"
          </div>
        )}
      </div>
    </div>
  );
};

const DoctorResult: React.FC<{ doctor: Doctor }> = ({ doctor }) => (
  <div className="flex items-center p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-purple-500/30">
    <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
      <User className="w-6 h-6 text-purple-400" />
    </div>
    <div className="ml-4 flex-1">
      <div className="text-white font-medium">{doctor.name}</div>
      <div className="text-sm text-gray-400">
        {doctor.specialization} • {doctor.hospital}
      </div>
    </div>
    <Button variant="outline" size="sm" className="ml-4">
      View Profile
    </Button>
  </div>
);

const PartnerResult: React.FC<{ partner: Partner }> = ({ partner }) => (
  <div className="flex items-center p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-purple-500/30">
    <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
      <Building className="w-6 h-6 text-blue-400" />
    </div>
    <div className="ml-4 flex-1">
      <div className="text-white font-medium">{partner.name}</div>
      <div className="text-sm text-gray-400">
        {partner.type} • {partner.location}
      </div>
    </div>
    <Button variant="outline" size="sm" className="ml-4">
      Learn More
    </Button>
  </div>
);

const PatientResult: React.FC<{ patient: Patient }> = ({ patient }) => (
  <div className="flex items-center p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-purple-500/30">
    <div className="w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center">
      <Heart className="w-6 h-6 text-pink-400" />
    </div>
    <div className="ml-4 flex-1">
      <div className="text-white font-medium">{patient.name}</div>
      <div className="text-sm text-gray-400">
        {patient.condition} • {patient.doctor}
      </div>
    </div>
    <Button variant="outline" size="sm" className="ml-4">
      View Records
    </Button>
  </div>
);

const TriageResult: React.FC<{ result: { symptom: Symptom, recommendedDoctors: Doctor[], isEmergency: boolean, emergencyAdvice?: string } }> = ({ result }) => (
  <div className="space-y-6">
    <div className="flex items-start justify-between">
      <div>
        <h3 className="text-xl font-medium text-white">{result.symptom.name}</h3>
        <p className="text-gray-400 mt-1">{result.symptom.description}</p>
      </div>
      {result.isEmergency && (
        <div className="flex items-center bg-red-500/20 px-4 py-2 rounded-full">
          <AlertTriangle className="w-5 h-5 text-red-400 mr-2" />
          <span className="text-red-400 font-medium">Emergency</span>
        </div>
      )}
    </div>

    {result.isEmergency && (
      <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
        <p className="text-red-400 mb-4">{result.emergencyAdvice}</p>
        <Button className="bg-red-500 hover:bg-red-600">
          <Phone className="w-4 h-4 mr-2" />
          Call Emergency Services
        </Button>
      </div>
    )}

    <div>
      <h4 className="text-sm font-medium text-gray-400 mb-4">Recommended Specialists</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {result.recommendedDoctors.slice(0, 4).map(doctor => (
          <DoctorResult key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </div>
  </div>
);