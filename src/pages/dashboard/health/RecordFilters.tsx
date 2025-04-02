import React from 'react';
import { Search, Filter, Calendar } from 'lucide-react';

interface RecordFiltersProps {
  selectedType: string;
  onTypeChange: (type: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  recordTypes: Array<{ value: string; label: string; }>;
}

export const RecordFilters: React.FC<RecordFiltersProps> = ({
  selectedType,
  onTypeChange,
  searchQuery,
  onSearchChange,
  recordTypes
}) => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium text-gray-400 mb-3">Search Records</h3>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
          />
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-400 mb-3">Record Type</h3>
        <div className="space-y-2">
          {recordTypes.map(type => (
            <button
              key={type.value}
              onClick={() => onTypeChange(type.value)}
              className={`w-full flex items-center px-3 py-2 rounded-lg transition-colors ${
                selectedType === type.value
                  ? 'bg-purple-500/20 text-purple-400'
                  : 'text-gray-400 hover:bg-white/5'
              }`}
            >
              <Filter className="w-4 h-4 mr-2" />
              {type.label}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-400 mb-3">Date Range</h3>
        <div className="space-y-2">
          <button className="w-full flex items-center px-3 py-2 rounded-lg text-gray-400 hover:bg-white/5 transition-colors">
            <Calendar className="w-4 h-4 mr-2" />
            Last 30 Days
          </button>
          <button className="w-full flex items-center px-3 py-2 rounded-lg text-gray-400 hover:bg-white/5 transition-colors">
            <Calendar className="w-4 h-4 mr-2" />
            Last 3 Months
          </button>
          <button className="w-full flex items-center px-3 py-2 rounded-lg text-gray-400 hover:bg-white/5 transition-colors">
            <Calendar className="w-4 h-4 mr-2" />
            Last Year
          </button>
          <button className="w-full flex items-center px-3 py-2 rounded-lg text-gray-400 hover:bg-white/5 transition-colors">
            <Calendar className="w-4 h-4 mr-2" />
            Custom Range
          </button>
        </div>
      </div>
    </div>
  );
};