import React from 'react';
import { Search, Filter, TrendingUp, Users } from 'lucide-react';

export const PatientOverview = () => {
  const patients = [
    {
      id: 1,
      name: 'Sarah Johnson',
      age: 32,
      lastVisit: '2024-03-10',
      condition: 'Hypertension',
      status: 'Stable'
    },
    {
      id: 2,
      name: 'Michael Chen',
      age: 45,
      lastVisit: '2024-03-08',
      condition: 'Diabetes Type 2',
      status: 'Improving'
    },
    {
      id: 3,
      name: 'Emily Davis',
      age: 28,
      lastVisit: '2024-03-05',
      condition: 'Asthma',
      status: 'Stable'
    }
  ];

  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-lg border border-white/10 overflow-hidden">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-semibold text-white">Patient Overview</h2>
            <p className="text-sm text-gray-400 mt-1">Monitor your patient's progress</p>
          </div>
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search patients..."
                className="pl-9 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
              />
            </div>
            <button className="p-2 text-gray-400 hover:text-white transition-colors">
              <Filter className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left border-b border-white/10">
                <th className="pb-3 text-sm font-medium text-gray-400">Patient</th>
                <th className="pb-3 text-sm font-medium text-gray-400">Age</th>
                <th className="pb-3 text-sm font-medium text-gray-400">Last Visit</th>
                <th className="pb-3 text-sm font-medium text-gray-400">Condition</th>
                <th className="pb-3 text-sm font-medium text-gray-400">Status</th>
                <th className="pb-3 text-sm font-medium text-gray-400">Trend</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((patient) => (
                <tr key={patient.id} className="border-b border-white/5">
                  <td className="py-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                        <Users className="w-4 h-4 text-purple-400" />
                      </div>
                      <span className="ml-3 text-white">{patient.name}</span>
                    </div>
                  </td>
                  <td className="py-4 text-gray-300">{patient.age}</td>
                  <td className="py-4 text-gray-300">{patient.lastVisit}</td>
                  <td className="py-4 text-gray-300">{patient.condition}</td>
                  <td className="py-4">
                    <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-sm">
                      {patient.status}
                    </span>
                  </td>
                  <td className="py-4">
                    <TrendingUp className="w-4 h-4 text-green-400" />
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