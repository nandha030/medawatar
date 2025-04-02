import React from 'react';
import { useUser } from '../../../hooks/useUser';
import { DashboardLayout } from '../DashboardLayout';
import { DashboardSidebar } from '../DashboardSidebar';
import { Building, Search, Filter } from 'lucide-react';
import { Button } from '../../../components/ui/Button';

export const FacilitiesDashboard = () => {
  const { user, loading } = useUser();

  if (loading || !user) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-quantum-900 to-quantum-800 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  return (
    <DashboardLayout>
      <DashboardSidebar user={user} />
      <div className="flex-1 overflow-hidden">
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="bg-white/5 backdrop-blur-lg border-b border-white/10 px-8 py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-semibold text-white">Facilities</h1>
                <p className="text-gray-400 mt-1">Manage healthcare facilities</p>
              </div>
              <Button>
                <Building className="w-4 h-4 mr-2" />
                Add Facility
              </Button>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-8">
            {/* Search and Filter */}
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search facilities..."
                  className="w-full pl-9 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                />
              </div>
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </div>

            {/* Facilities List */}
            <div className="space-y-6">
              {/* Implementation of facilities list */}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};