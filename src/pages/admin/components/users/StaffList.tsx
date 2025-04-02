import React from 'react';
import { MoreVertical, Briefcase, Calendar } from 'lucide-react';

interface StaffListProps {
  searchQuery: string;
  onEdit: (staff: any) => void;
}

const staffMembers = [
  {
    id: 1,
    name: 'Jane Smith',
    role: 'Head Nurse',
    department: 'Emergency',
    shift: 'Morning',
    joinDate: '2022-03-15',
    status: 'Active'
  },
  {
    id: 2,
    name: 'Robert Wilson',
    role: 'Lab Technician',
    department: 'Laboratory',
    shift: 'Evening',
    joinDate: '2021-08-22',
    status: 'Active'
  },
  {
    id: 3,
    name: 'Maria Garcia',
    role: 'Receptionist',
    department: 'Front Desk',
    shift: 'Morning',
    joinDate: '2023-01-10',
    status: 'On Leave'
  }
];

export const StaffList: React.FC<StaffListProps> = ({ searchQuery, onEdit }) => {
  const filteredStaff = staffMembers.filter(staff =>
    staff.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    staff.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
    staff.department.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="text-left border-b border-white/10">
            <th className="pb-3 text-sm font-medium text-gray-400">Staff Member</th>
            <th className="pb-3 text-sm font-medium text-gray-400">Role</th>
            <th className="pb-3 text-sm font-medium text-gray-400">Department</th>
            <th className="pb-3 text-sm font-medium text-gray-400">Shift</th>
            <th className="pb-3 text-sm font-medium text-gray-400">Join Date</th>
            <th className="pb-3 text-sm font-medium text-gray-400">Status</th>
            <th className="pb-3 text-sm font-medium text-gray-400"></th>
          </tr>
        </thead>
        <tbody>
          {filteredStaff.map((staff) => (
            <tr key={staff.id} className="border-b border-white/5">
              <td className="py-3">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                    {staff.name.charAt(0)}
                  </div>
                  <span className="ml-3 text-white">{staff.name}</span>
                </div>
              </td>
              <td className="py-3">
                <div className="flex items-center">
                  <Briefcase className="w-4 h-4 text-blue-400 mr-2" />
                  <span className="text-gray-300">{staff.role}</span>
                </div>
              </td>
              <td className="py-3">
                <span className="px-2 py-1 text-sm rounded-full bg-blue-500/20 text-blue-400">
                  {staff.department}
                </span>
              </td>
              <td className="py-3 text-gray-300">{staff.shift}</td>
              <td className="py-3">
                <div className="flex items-center text-gray-300">
                  <Calendar className="w-4 h-4 mr-2" />
                  {staff.joinDate}
                </div>
              </td>
              <td className="py-3">
                <span className={`px-2 py-1 text-sm rounded-full ${
                  staff.status === 'Active'
                    ? 'bg-green-500/20 text-green-400'
                    : 'bg-yellow-500/20 text-yellow-400'
                }`}>
                  {staff.status}
                </span>
              </td>
              <td className="py-3">
                <button
                  onClick={() => onEdit(staff)}
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