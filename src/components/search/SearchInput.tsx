import React, { useState } from 'react';
import { Search, X } from 'lucide-react';
import { SearchResults } from './SearchResults';
import { useClickOutside } from '../../hooks/useClickOutside';

interface SearchInputProps {
  onFocus?: () => void;
  onBlur?: () => void;
}

export const SearchInput: React.FC<SearchInputProps> = ({ onFocus, onBlur }) => {
  const [query, setQuery] = useState('');
  const [isResultsVisible, setIsResultsVisible] = useState(false);
  const searchRef = React.useRef<HTMLDivElement>(null);

  useClickOutside(searchRef, () => {
    setIsResultsVisible(false);
  });
  return (
    <div className="relative w-full max-w-3xl mx-auto z-[60]" ref={searchRef}>
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => {
          setIsResultsVisible(true);
          onFocus?.();
        }}
        placeholder="Search symptoms, providers, or medical conditions..."
        className="w-full pl-12 pr-12 py-4 bg-white/5 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
      />
      {query && (
        <button
          onClick={() => setQuery('')}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-purple-300 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      )}
      {isResultsVisible && <SearchResults query={query} />}
    </div>
  );
};