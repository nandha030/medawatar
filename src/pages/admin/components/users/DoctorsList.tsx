import React from 'react';
import { MoreVertical, Star, Clock, Users } from 'lucide-react';

interface DoctorsListProps {
  searchQuery: string;
  onEdit: (doctor: any) => void;
}

const doctors = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    specialization: 'Cardiology',
    experience: '15 years',
    rating: 4.8,
    patients: 1250,
    availability: 'Full-time',
    status: 'Active'
  },
  {
    id: 2,
    name: 'Dr. Michael Chen',
    specialization: 'Neurology',
    experience: '12 years',
    rating: 4.9,
    patients: 980,
    availability: 'Part-time',
    status: 'Active'
  },
  {
    id: 3,
    name: 'Dr. Emily Davis',
    specialization: 'Pediatrics',
    experience: '8 years',
    rating: 4.7,
    patients: 750,
    availability: 'Full-time',
    status: 'On Leave'
  }
];

export const DoctorsList: React.FC<DoctorsListProps> = ({ searchQuery, onEdit }) => {
  const filteredDoctors = doctors.filter(doctor =>
    doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doctor.specialization.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="text-left border-b border-white/10">
            <th className="pb-3 text-sm font-medium text-gray-400">Doctor</th>
            <th className="pb-3 text-sm font-medium text-gray-400">Specialization</th>
            <th className="pb-3 text-sm font-medium text-gray-400">Experience</th>
            <th className="pb-3 text-sm font-medium text-gray-400">Rating</th>
            <th className="pb-3 text-sm font-medium text-gray-400">Patients</th>
            <th className="pb-3 text-sm font-medium text-gray-400">Availability</th>
            <th className="pb-3 text-sm font-medium text-gray-400">Status</th>
            <th className="pb-3 text-sm font-medium text-gray-400"></th>
          </tr>
        </thead>
        <tbody>
          {filteredDoctors.map((doctor) => (
            <tr key={doctor.id} className="border-b border-white/5">
              <td className="py-3">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                    {doctor.name.charAt(0)}
                  </div>
                  <span className="ml-3 text-white">{doctor.name}</span>
                </div>
              </td>
              <td className="py-3">
                <span className="px-2 py-1 text-sm rounded-full bg-purple-500/20 text-purple-400">
                  {doctor.specialization}
                </span>
              </td>
              <td className="py-3 text-gray-300">{doctor.experience}</td>
              <td className="py-3">
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 mr-1" />
                  <span className="text-white">{doctor.rating}</span>
                </div>
              </td>
              <td className="py-3">
                <div className="flex items-center text-gray-300">
                  <Users className="w-4 h-4 mr-1" />
                  {doctor.patients}
                </div>
              </td>
              <td className="py-3">
                <div className="flex items-center text-gray-300">
                  <Clock className="w-4 h-4 mr-1" />
                  {doctor.availability}
                </div>
              </td>
              <td className="py-3">
                <span className={`px-2 py-1 text-sm rounded-full ${
                  doctor.status === 'Active'
                    ? 'bg-green-500/20 text-green-400'
                    : 'bg-yellow-500/20 text-yellow-400'
                }`}>
                  {doctor.status}
                </span>
              </td>
              <td className="py-3">
                <button
                  onClick={() => onEdit(doctor)}
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