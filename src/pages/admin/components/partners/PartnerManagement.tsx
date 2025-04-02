import React, { useState } from 'react';
import { Users, Search, Filter, Plus, MoreVertical, Building, Shield, Link2 } from 'lucide-react';
import { AdminLayout } from '../../AdminLayout';
import { Button } from '../../../../components/ui/Button';
import { PartnerModal } from './PartnerModal';

const partners = [
  {
    name: 'Global Health Network',
    type: 'Healthcare Provider',
    status: 'Active',
    integrationStatus: 'Connected',
    securityScore: 98,
    lastAudit: '2024-03-15'
  },
  {
    name: 'TechMed Solutions',
    type: 'Technology Partner',
    status: 'Active',
    integrationStatus: 'Connected',
    securityScore: 95,
    lastAudit: '2024-03-10'
  },
  {
    name: 'Quantum Security',
    type: 'Security Provider',
    status: 'Pending',
    integrationStatus: 'In Progress',
    securityScore: 97,
    lastAudit: '2024-03-12'
  }
];

export const PartnerManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPartner, setSelectedPartner] = useState<any>(null);

  return (
    <AdminLayout>
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white">Partner Management</h1>
          <p className="text-gray-400 mt-1">Manage healthcare partners and integrations</p>
        </div>
        <Button onClick={() => setIsModalOpen(true)}>
          <Plus className="w-4 h-4 mr-2" />
          Add Partner
        </Button>
      </div>

      {/* Partner Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white/5 backdrop-blur-lg rounded-lg p-6 border border-white/10">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-400">Total Partners</p>
              <p className="text-2xl font-semibold text-white mt-1">24</p>
              <p className="text-sm text-green-400">+3 this month</p>
            </div>
            <div className="p-3 rounded-lg bg-purple-500/20">
              <Building className="w-6 h-6 text-purple-400" />
            </div>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-lg rounded-lg p-6 border border-white/10">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-400">Integration Status</p>
              <p className="text-2xl font-semibold text-white mt-1">92%</p>
              <p className="text-sm text-green-400">18 Connected</p>
            </div>
            <div className="p-3 rounded-lg bg-blue-500/20">
              <Link2 className="w-6 h-6 text-blue-400" />
            </div>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-lg rounded-lg p-6 border border-white/10">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-400">Security Score</p>
              <p className="text-2xl font-semibold text-white mt-1">96/100</p>
              <p className="text-sm text-green-400">Above threshold</p>
            </div>
            <div className="p-3 rounded-lg bg-green-500/20">
              <Shield className="w-6 h-6 text-green-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Partner List */}
      <div className="bg-white/5 backdrop-blur-lg rounded-lg border border-white/10 p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <Building className="w-5 h-5 text-purple-400 mr-2" />
            <h2 className="text-lg font-semibold text-white">Healthcare Partners</h2>
          </div>
        </div>

        <div className="flex items-center space-x-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search partners..."
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
                <th className="pb-3 text-sm font-medium text-gray-400">Partner</th>
                <th className="pb-3 text-sm font-medium text-gray-400">Type</th>
                <th className="pb-3 text-sm font-medium text-gray-400">Status</th>
                <th className="pb-3 text-sm font-medium text-gray-400">Integration</th>
                <th className="pb-3 text-sm font-medium text-gray-400">Security Score</th>
                <th className="pb-3 text-sm font-medium text-gray-400">Last Audit</th>
                <th className="pb-3 text-sm font-medium text-gray-400"></th>
              </tr>
            </thead>
            <tbody>
              {partners.map((partner, index) => (
                <tr key={index} className="border-b border-white/5">
                  <td className="py-3 text-white">{partner.name}</td>
                  <td className="py-3">
                    <span className="px-2 py-1 text-sm rounded-full bg-purple-500/20 text-purple-400">
                      {partner.type}
                    </span>
                  </td>
                  <td className="py-3">
                    <span className={`px-2 py-1 text-sm rounded-full ${
                      partner.status === 'Active'
                        ? 'bg-green-500/20 text-green-400'
                        : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {partner.status}
                    </span>
                  </td>
                  <td className="py-3">
                    <span className={`px-2 py-1 text-sm rounded-full ${
                      partner.integrationStatus === 'Connected'
                        ? 'bg-blue-500/20 text-blue-400'
                        : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {partner.integrationStatus}
                    </span>
                  </td>
                  <td className="py-3">
                    <div className="flex items-center">
                      <span className={`text-sm ${
                        partner.securityScore >= 95 ? 'text-green-400' :
                        partner.securityScore >= 90 ? 'text-yellow-400' :
                        'text-red-400'
                      }`}>
                        {partner.securityScore}/100
                      </span>
                    </div>
                  </td>
                  <td className="py-3 text-gray-300">{partner.lastAudit}</td>
                  <td className="py-3">
                    <button 
                      className="p-1 text-gray-400 hover:text-white"
                      onClick={() => {
                        setSelectedPartner(partner);
                        setIsModalOpen(true);
                      }}
                    >
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <PartnerModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedPartner(null);
        }}
        partner={selectedPartner}
      />
    </div>
    </AdminLayout>
  );
};