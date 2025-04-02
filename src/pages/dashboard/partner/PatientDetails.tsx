import React from 'react';
import { Search, Filter, User, Calendar, Activity, AlertCircle } from 'lucide-react';
import { Button } from '../../../components/ui/Button';

interface Patient {
  id: string;
  name: string;
  age: number;
  status: 'Active' | 'Inactive' | 'Pending';
  lastVisit: string;
  condition: string;
  riskLevel: 'Low' | 'Medium' | 'High';
  insuranceStatus: 'Verified' | 'Pending' | 'Expired';
}

const patients: Patient[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    age: 32,
    status: 'Active',
    lastVisit: '2024-03-15',
    condition: 'Hypertension',
    riskLevel: 'Medium',
    insuranceStatus: 'Verified'
  },
  {
    id: '2',
    name: 'Michael Chen',
    age: 45,
    status: 'Active',
    lastVisit: '2024-03-12',
    condition: 'Diabetes Type 2',
    riskLevel: 'High',
    insuranceStatus: 'Verified'
  },
  {
    id: '3',
    name: 'Emily Davis',
    age: 28,
    status: 'Pending',
    lastVisit: '2024-03-10',
    condition: 'Asthma',
    riskLevel: 'Low',
    insuranceStatus: 'Pending'
  }
];

export const PatientDetails = () => {
  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-lg border border-white/10 overflow-hidden">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-semibold text-white">Patient Management</h2>
            <p className="text-sm text-gray-400 mt-1">View and manage patient records</p>
          </div>
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search patients..."
                className="pl-9 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
              />
            </div>
            <Button variant="outline" size="sm" className="flex items-center">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left border-b border-white/10">
                <th className="pb-3 text-sm font-medium text-gray-400">Patient</th>
                <th className="pb-3 text-sm font-medium text-gray-400">Status</th>
                <th className="pb-3 text-sm font-medium text-gray-400">Last Visit</th>
                <th className="pb-3 text-sm font-medium text-gray-400">Condition</th>
                <th className="pb-3 text-sm font-medium text-gray-400">Risk Level</th>
                <th className="pb-3 text-sm font-medium text-gray-400">Insurance</th>
                <th className="pb-3 text-sm font-medium text-gray-400">Actions</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((patient) => (
                <tr key={patient.id} className="border-b border-white/5">
                  <td className="py-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                        <User className="w-4 h-4 text-purple-400" />
                      </div>
                      <div className="ml-3">
                        <p className="text-white font-medium">{patient.name}</p>
                        <p className="text-sm text-gray-400">Age: {patient.age}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4">
                    <span className={`px-2 py-1 rounded text-sm ${
                      patient.status === 'Active' ? 'bg-green-500/20 text-green-400' :
                      patient.status === 'Inactive' ? 'bg-red-500/20 text-red-400' :
                      'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {patient.status}
                    </span>
                  </td>
                  <td className="py-4">
                    <div className="flex items-center text-gray-300">
                      <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                      {patient.lastVisit}
                    </div>
                  </td>
                  <td className="py-4 text-gray-300">{patient.condition}</td>
                  <td className="py-4">
                    <span className={`px-2 py-1 rounded text-sm ${
                      patient.riskLevel === 'Low' ? 'bg-green-500/20 text-green-400' :
                      patient.riskLevel === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {patient.riskLevel}
                    </span>
                  </td>
                  <td className="py-4">
                    <span className={`px-2 py-1 rounded text-sm ${
                      patient.insuranceStatus === 'Verified' ? 'bg-green-500/20 text-green-400' :
                      patient.insuranceStatus === 'Pending' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {patient.insuranceStatus}
                    </span>
                  </td>
                  <td className="py-4">
                    <div className="flex items-center space-x-2">
                      <button className="p-1 text-gray-400 hover:text-white transition-colors">
                        <Activity className="w-4 h-4" />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-white transition-colors">
                        <AlertCircle className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};