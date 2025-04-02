import React, { useState } from 'react';
import { X, Building, Shield, Link2 } from 'lucide-react';
import { Button } from '../../../../components/ui/Button';

interface PartnerModalProps {
  isOpen: boolean;
  onClose: () => void;
  partner?: any;
}

export const PartnerModal: React.FC<PartnerModalProps> = ({
  isOpen,
  onClose,
  partner
}) => {
  const [formData, setFormData] = useState({
    name: partner?.name || '',
    type: partner?.type || 'Healthcare Provider',
    email: '',
    phone: '',
    address: '',
    integrationKey: '',
    securityLevel: 'high',
    dataAccess: ['medical_records', 'appointments']
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-quantum-800 rounded-xl w-full max-w-2xl p-6 border border-white/10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-white">
            {partner ? 'Edit Partner' : 'Add New Partner'}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Partner Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                placeholder="Enter partner name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Partner Type
              </label>
              <select
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50"
              >
                <option value="Healthcare Provider">Healthcare Provider</option>
                <option value="Technology Partner">Technology Partner</option>
                <option value="Security Provider">Security Provider</option>
                <option value="Research Partner">Research Partner</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Contact Email
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50"
              placeholder="partner@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Integration Settings
            </label>
            <div className="bg-white/5 rounded-lg p-4 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  API Key
                </label>
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    value={formData.integrationKey || 'Generate new API key'}
                    disabled
                    className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-gray-400"
                  />
                  <Button variant="outline" size="sm">Generate</Button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Security Level
                </label>
                <select
                  value={formData.securityLevel}
                  onChange={(e) => setFormData({ ...formData, securityLevel: e.target.value })}
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                >
                  <option value="high">High Security</option>
                  <option value="medium">Medium Security</option>
                  <option value="standard">Standard Security</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Data Access Permissions
                </label>
                <div className="space-y-2">
                  {[
                    { id: 'medical_records', label: 'Medical Records' },
                    { id: 'appointments', label: 'Appointments' },
                    { id: 'billing', label: 'Billing Information' },
                    { id: 'analytics', label: 'Analytics Data' }
                  ].map(permission => (
                    <label key={permission.id} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.dataAccess.includes(permission.id)}
                        onChange={(e) => {
                          const newAccess = e.target.checked
                            ? [...formData.dataAccess, permission.id]
                            : formData.dataAccess.filter(id => id !== permission.id);
                          setFormData({ ...formData, dataAccess: newAccess });
                        }}
                        className="rounded border-white/20 bg-white/5 text-purple-600 focus:ring-purple-500"
                      />
                      <span className="ml-2 text-gray-300">{permission.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-4">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">
              {partner ? 'Update Partner' : 'Add Partner'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};