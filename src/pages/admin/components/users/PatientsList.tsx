import React from 'react';
import { MoreVertical, Heart, Calendar, FileText } from 'lucide-react';

interface PatientsListProps {
  partnerId: string;
  searchQuery: string;
  onEdit: (patient: any) => void;
}

const patients = [
  {
    id: 1,
    name: 'Sarah Johnson',
    age: 32,
    bloodType: 'O+',
    lastVisit: '2024-03-15',
    condition: 'Hypertension',
    insurance: 'Blue Cross',
    status: 'Active'
  },
  {
    id: 2,
    name: 'Michael Chen',
    age: 45,
    bloodType: 'A-',
    lastVisit: '2024-03-12',
    condition: 'Diabetes Type 2',
    insurance: 'Aetna',
    status: 'Active'
  },
  {
    id: 3,
    name: 'Emily Davis',
    age: 28,
    bloodType: 'B+',
    lastVisit: '2024-03-10',
    condition: 'Asthma',
    insurance: 'United',
    status: 'Inactive'
  }
];

export const PatientsList: React.FC<PatientsListProps> = ({ 
  partnerId,
  searchQuery, 
  onEdit 
}) => {
  const filteredPatients = patients.filter(patient =>
    patient.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    patient.condition.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="text-left border-b border-white/10">
            <th className="pb-3 text-sm font-medium text-gray-400">Patient</th>
            <th className="pb-3 text-sm font-medium text-gray-400">Age</th>
            <th className="pb-3 text-sm font-medium text-gray-400">Blood Type</th>
            <th className="pb-3 text-sm font-medium text-gray-400">Last Visit</th>
            <th className="pb-3 text-sm font-medium text-gray-400">Condition</th>
            <th className="pb-3 text-sm font-medium text-gray-400">Insurance</th>
            <th className="pb-3 text-sm font-medium text-gray-400">Status</th>
            <th className="pb-3 text-sm font-medium text-gray-400"></th>
          </tr>
        </thead>
        <tbody>
          {filteredPatients.map((patient) => (
            <tr key={patient.id} className="border-b border-white/5">
              <td className="py-3">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-pink-500/20 flex items-center justify-center">
                    {patient.name.charAt(0)}
                  </div>
                  <span className="ml-3 text-white">{patient.name}</span>
                </div>
              </td>
              <td className="py-3 text-gray-300">{patient.age}</td>
              <td className="py-3">
                <span className="px-2 py-1 text-sm rounded-full bg-red-500/20 text-red-400">
                  {patient.bloodType}
                </span>
              </td>
              <td className="py-3">
                <div className="flex items-center text-gray-300">
                  <Calendar className="w-4 h-4 mr-2" />
                  {patient.lastVisit}
                </div>
              </td>
              <td className="py-3">
                <div className="flex items-center">
                  <Heart className="w-4 h-4 text-pink-400 mr-2" />
                  <span className="text-gray-300">{patient.condition}</span>
                </div>
              </td>
              <td className="py-3">
                <div className="flex items-center">
                  <FileText className="w-4 h-4 text-blue-400 mr-2" />
                  <span className="text-gray-300">{patient.insurance}</span>
                </div>
              </td>
              <td className="py-3">
                <span className={`px-2 py-1 text-sm rounded-full ${
                  patient.status === 'Active'
                    ? 'bg-green-500/20 text-green-400'
                    : 'bg-yellow-500/20 text-yellow-400'
                }`}>
                  {patient.status}
                </span>
              </td>
              <td className="py-3">
                <button
                  onClick={() => onEdit(patient)}
                  className="p-1 text-gray-400 hover:text-white transition-colors"
                >
                  <MoreVertical className="w-4 h-4" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};