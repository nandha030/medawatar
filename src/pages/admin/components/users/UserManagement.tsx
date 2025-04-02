import React, { useState } from 'react';
import { Users, Search, Filter, Plus } from 'lucide-react';
import { AdminLayout } from '../../AdminLayout';
import { Button } from '../../../../components/ui/Button';
import { DoctorsList } from './DoctorsList';
import { StaffList } from './StaffList';
import { UserModal } from './UserModal';
import { PartnerSelect } from './PartnerSelect';

export const UserManagement = () => {
  const [activeTab, setActiveTab] = useState<'doctors' | 'staff'>('doctors');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPartner, setSelectedPartner] = useState('medawatar');

  return (
    <AdminLayout>
    <div className="bg-white/5 backdrop-blur-lg rounded-lg border border-white/10 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold text-white">Healthcare Team Management</h2>
          <p className="text-gray-400 mt-1">Manage doctors and staff members</p>
        </div>
        <div className="flex items-center space-x-4">
          <PartnerSelect value={selectedPartner} onChange={setSelectedPartner} />
          <Button onClick={() => setIsModalOpen(true)}>
            <Plus className="w-4 h-4 mr-2" />
            Add {activeTab === 'doctors' ? 'Doctor' : 'Staff'}
          </Button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setActiveTab('doctors')}
          className={`px-4 py-2 rounded-lg transition-colors ${
            activeTab === 'doctors'
              ? 'bg-purple-500/20 text-purple-400'
              : 'text-gray-400 hover:text-white hover:bg-white/5'
          }`}
        >
          Doctors
        </button>
        <button
          onClick={() => setActiveTab('staff')}
          className={`px-4 py-2 rounded-lg transition-colors ${
            activeTab === 'staff'
              ? 'bg-purple-500/20 text-purple-400'
              : 'text-gray-400 hover:text-white hover:bg-white/5'
          }`}
        >
          Staff
        </button>
      </div>

      {/* Search and Filter */}
      <div className="flex items-center space-x-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={`Search ${activeTab}...`}
            className="w-full pl-9 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
          />
        </div>
        <Button variant="outline" size="sm">
          <Filter className="w-4 h-4 mr-2" />
          Filter
        </Button>
      </div>

      {/* List View */}
      {activeTab === 'doctors' ? (
        <DoctorsList
          partnerId={selectedPartner}
          searchQuery={searchQuery}
          onEdit={(doctor) => {
            setSelectedUser(doctor);
            setIsModalOpen(true);
          }}
        />
      ) : (
        <StaffList
          partnerId={selectedPartner}
          searchQuery={searchQuery}
          onEdit={(staff) => {
            setSelectedUser(staff);
            setIsModalOpen(true);
          }}
        />
      )}

      {/* Add/Edit Modal */}
      <UserModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedUser(null);
        }}
        userType={activeTab}
        user={selectedUser}
        partnerId={selectedPartner}
      />
    </div>
    </AdminLayout>
  );
};