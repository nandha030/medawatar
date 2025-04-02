import React, { useState } from 'react';
import { FileText, Plus, Filter, Search, Calendar } from 'lucide-react';
import { Button } from '../../../components/ui/Button';
import { RecordsList } from './RecordsList';
import { RecordUploadModal } from './RecordUploadModal';
import { DashboardLayout } from '../DashboardLayout';
import { DashboardSidebar } from '../DashboardSidebar';
import { RecordStats } from './RecordStats';
import { RecordFilters } from './RecordFilters';
import { useHealthRecords } from '../../../hooks/useHealthRecords';
import { useUser } from '../../../hooks/useUser';

export const HealthRecords = () => {
  const { user, loading } = useUser();
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<string>('all');
  const { records, isLoading } = useHealthRecords();

  if (loading || !user) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-quantum-900 to-quantum-800 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  const recordTypes = [
    { value: 'all', label: 'All Records' },
    { value: 'lab', label: 'Lab Results' },
    { value: 'prescription', label: 'Prescriptions' },
    { value: 'imaging', label: 'Imaging' },
    { value: 'vaccination', label: 'Vaccinations' },
    { value: 'consultation', label: 'Consultations' }
  ];

  const filteredRecords = records.filter(record => {
    const matchesSearch = record.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         record.provider.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = selectedType === 'all' || record.type === selectedType;
    return matchesSearch && matchesType;
  });

  return (
    <DashboardLayout>
      <DashboardSidebar user={user} />
      <div className="flex-1 overflow-hidden">
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="flex-shrink-0 bg-white/5 backdrop-blur-lg border-b border-white/10 px-8 py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-semibold text-white">Health Records</h1>
                <p className="text-gray-400 mt-1">Manage and view your medical history</p>
              </div>
              <Button
                onClick={() => setIsUploadModalOpen(true)}
                className="flex items-center shadow-lg hover:shadow-purple-500/20"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Record
              </Button>
            </div>
            
            <div className="mt-6">
              <RecordStats records={records} />
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1 overflow-hidden">
            <div className="h-full flex">
              {/* Filters Sidebar */}
              <div className="w-64 flex-shrink-0 border-r border-white/10 p-6 overflow-y-auto">
                <RecordFilters
                  selectedType={selectedType}
                  onTypeChange={setSelectedType}
                  searchQuery={searchQuery}
                  onSearchChange={setSearchQuery}
                  recordTypes={recordTypes}
                />
              </div>

              {/* Records List */}
              <div className="flex-1 overflow-y-auto p-6">
                {isLoading ? (
                  <div className="flex items-center justify-center h-full">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
                  </div>
                ) : filteredRecords.length > 0 ? (
                  <RecordsList records={filteredRecords} />
                ) : (
                  <div className="flex flex-col items-center justify-center h-full text-center">
                    <FileText className="w-16 h-16 text-gray-400 mb-4" />
                    <h3 className="text-lg font-medium text-white mb-2">No records found</h3>
                    <p className="text-gray-400 mb-6 max-w-md">
                      {searchQuery || selectedType !== 'all'
                        ? 'Try adjusting your search or filters'
                        : 'Start by adding your first medical record'}
                    </p>
                    <Button
                      onClick={() => setIsUploadModalOpen(true)}
                      variant="outline"
                      className="inline-flex items-center"
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Add Your First Record
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Upload Modal */}
      <RecordUploadModal
        isOpen={isUploadModalOpen}
        onClose={() => setIsUploadModalOpen(false)}
      />
    </DashboardLayout>
  );
};