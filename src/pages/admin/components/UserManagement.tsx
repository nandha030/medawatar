import React from 'react';
import { Users, Search, Filter, MoreVertical } from 'lucide-react';
import { Button } from '../../../components/ui/Button';

const users = [
  {
    name: 'Sarah Johnson',
    email: 'sarah.j@example.com',
    role: 'Patient',
    status: 'Active'
  },
  {
    name: 'Dr. Michael Chen',
    email: 'dr.chen@example.com',
    role: 'Doctor',
    status: 'Active'
  },
  {
    name: 'Emily Davis',
    email: 'emily.d@example.com',
    role: 'Staff',
    status: 'Pending'
  }
];

export const UserManagement = () => {
  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-lg border border-white/10 p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Users className="w-5 h-5 text-purple-400 mr-2" />
          <h2 className="text-lg font-semibold text-white">User Management</h2>
        </div>
        <Button variant="outline" size="sm">Add User</Button>
      </div>

      <div className="flex items-center space-x-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search users..."
            className="w-full pl-9 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
          />
        </div>
        <Button variant="outline" size="sm">
          <Filter className="w-4 h-4 mr-2" />
          Filter
        </Button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left border-b border-white/10">
              <th className="pb-3 text-sm font-medium text-gray-400">Name</th>
              <th className="pb-3 text-sm font-medium text-gray-400">Email</th>
              <th className="pb-3 text-sm font-medium text-gray-400">Role</th>
              <th className="pb-3 text-sm font-medium text-gray-400">Status</th>
              <th className="pb-3 text-sm font-medium text-gray-400"></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index} className="border-b border-white/5">
                <td className="py-3 text-white">{user.name}</td>
                <td className="py-3 text-gray-300">{user.email}</td>
                <td className="py-3">
                  <span className="px-2 py-1 text-sm rounded-full bg-purple-500/20 text-purple-400">
                    {user.role}
                  </span>
                </td>
                <td className="py-3">
                  <span className={`px-2 py-1 text-sm rounded-full ${
                    user.status === 'Active'
                      ? 'bg-green-500/20 text-green-400'
                      : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {user.status}
                  </span>
                </td>
                <td className="py-3">
                  <button className="p-1 text-gray-400 hover:text-white">
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};