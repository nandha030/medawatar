import React from 'react';
import { FileText, Download, Trash2, ExternalLink } from 'lucide-react';
import type { MedicalRecord } from '../../../lib/db';

interface RecordsListProps {
  records: MedicalRecord[];
}

export const RecordsList: React.FC<RecordsListProps> = ({ records }) => {
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  };

  return (
    <div className="space-y-4">
      {records.map((record) => (
        <div
          key={record.id}
          className="bg-white/5 backdrop-blur-lg rounded-lg p-6 border border-white/10 hover:border-purple-500/30 transition-colors duration-300"
        >
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-4">
              <div className="p-2 bg-purple-500/20 rounded-lg">
                <FileText className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-white">{record.type}</h3>
                <p className="text-gray-400 mt-1">{record.description}</p>
                <div className="flex items-center space-x-4 mt-2 text-sm">
                  <span className="text-gray-400">
                    {formatDate(record.date)}
                  </span>
                  <span className="text-gray-400">
                    Provider: {record.provider}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button
                className="p-2 text-gray-400 hover:text-white transition-colors duration-200"
                title="View Details"
              >
                <ExternalLink className="w-5 h-5" />
              </button>
              <button
                className="p-2 text-gray-400 hover:text-white transition-colors duration-200"
                title="Download"
              >
                <Download className="w-5 h-5" />
              </button>
              <button
                className="p-2 text-gray-400 hover:text-red-400 transition-colors duration-200"
                title="Delete"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};