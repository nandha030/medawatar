import React, { useState } from 'react';
import { Search, Mic, FileText, X } from 'lucide-react';
import { Button } from '../ui/Button';
import { SearchInput } from './SearchInput';
import { VoiceSearch } from './VoiceSearch';
import { DocumentUpload } from './DocumentUpload';

type SearchMode = 'text' | 'voice' | 'document';

export const SearchEngine = () => {
  const [searchMode, setSearchMode] = useState<SearchMode>('text');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const searchModes = [
    { type: 'text', icon: Search, label: 'Text Search' },
    { type: 'voice', icon: Mic, label: 'Voice Search' },
    { type: 'document', icon: FileText, label: 'Document Upload' }
  ] as const;

  return (
    <div className="w-full max-w-3xl mx-auto mt-12">
      <div className={`relative bg-white/5 backdrop-blur-xl rounded-2xl p-2 transition-all duration-300 ${
        isSearchFocused ? 'shadow-2xl scale-105' : 'shadow-lg'
      }`}>
        {/* Search Mode Toggles */}
        <div className="flex items-center justify-end gap-2 p-2">
          {searchModes.map(({ type, icon: Icon, label }) => (
            <button
              key={type}
              onClick={() => setSearchMode(type)}
              className={`p-2 rounded-full transition-all duration-200 ${
                searchMode === type
                  ? 'bg-purple-500/20 text-purple-300 shadow-lg shadow-purple-500/20'
                  : 'text-gray-400 hover:text-purple-300 hover:bg-purple-500/10'
              }`}
              title={label}
            >
              <Icon className="w-5 h-5" />
              <span className="sr-only">{label}</span>
            </button>
          ))}
        </div>

        {/* Search Content */}
        <div className="p-2">
          {searchMode === 'text' && (
            <SearchInput 
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
            />
          )}
          {searchMode === 'voice' && <VoiceSearch />}
          {searchMode === 'document' && <DocumentUpload />}
        </div>
      </div>
    </div>
  );
};