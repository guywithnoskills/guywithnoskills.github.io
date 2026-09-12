import React, { useState, useEffect, useRef } from 'react';
import { Search, ExternalLink } from 'lucide-react';
import { useSearch } from './SearchUtils';

interface SearchBarProps {
  placeholder?: string;
  className?: string;
  showMessage?: boolean;
}

export default function SearchBar({ 
  placeholder = "Search for anything...", 
  className = "",
  showMessage = true 
}: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const { searchContent, navigateToResult, getCurrentMode } = useSearch();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Get search results
  const searchResults = searchQuery.trim() ? searchContent(searchQuery) : [];
  const currentMode = getCurrentMode();

  // Handle clicking outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
        setSelectedIndex(-1);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle search input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    setIsDropdownOpen(value.trim().length > 0);
    setSelectedIndex(-1);
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isDropdownOpen || searchResults.length === 0) {
      if (e.key === 'Enter' && searchQuery.trim()) {
        setIsDropdownOpen(false);
        // If no results found, just close dropdown
        if (searchResults.length === 0) {
          return;
        }
      }
      return;
    }

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev => 
          prev < searchResults.length - 1 ? prev + 1 : prev
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => prev > 0 ? prev - 1 : -1);
        break;
      case 'Enter':
        e.preventDefault();
        if (selectedIndex >= 0 && selectedIndex < searchResults.length) {
          handleResultClick(searchResults[selectedIndex]);
        } else if (searchResults.length > 0) {
          handleResultClick(searchResults[0]);
        }
        break;
      case 'Escape':
        setIsDropdownOpen(false);
        setSelectedIndex(-1);
        inputRef.current?.blur();
        break;
    }
  };

  // Handle result selection
  const handleResultClick = (result: any) => {
    navigateToResult(result);
    setSearchQuery('');
    setIsDropdownOpen(false);
    setSelectedIndex(-1);
    inputRef.current?.blur();
  };

  // Handle input focus
  const handleInputFocus = () => {
    if (searchQuery.trim()) {
      setIsDropdownOpen(true);
    }
  };

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#B3B3B3] z-10" size={16} />
      <input 
        ref={inputRef}
        type="text" 
        placeholder={placeholder}
        value={searchQuery}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        onFocus={handleInputFocus}
        className="w-full bg-[#2a2a2a] border border-[#404040] rounded-full pl-10 pr-4 py-2 text-white placeholder-[#B3B3B3] focus:border-[#1DB954] focus:outline-none transition-all duration-300"
      />
      
      {/* Search Results Dropdown */}
      {isDropdownOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-[#2a2a2a] border border-[#404040] rounded-lg shadow-2xl z-50 max-h-80 overflow-y-auto">
          {searchResults.length > 0 ? (
            <div className="py-2">
              {searchResults.map((result, index) => (
                <div
                  key={`${result.path}-${result.section || ''}-${index}`}
                  className={`px-4 py-3 cursor-pointer transition-all duration-200 ${
                    selectedIndex === index 
                      ? 'bg-[#1DB954] text-black' 
                      : 'text-[#B3B3B3] hover:bg-[#333333] hover:text-white'
                  }`}
                  onClick={() => handleResultClick(result)}
                  onMouseEnter={() => setSelectedIndex(index)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1 min-w-0">
                      <div className={`font-medium truncate ${
                        selectedIndex === index ? 'text-black' : 'text-white'
                      }`}>
                        {result.title}
                      </div>
                      <div className={`text-xs mt-1 flex items-center gap-2 ${
                        selectedIndex === index ? 'text-black/70' : 'text-[#B3B3B3]'
                      }`}>
                        <span className="truncate">{result.location}</span>
                        {result.path.startsWith('http') && (
                          <ExternalLink size={12} className="flex-shrink-0" />
                        )}
                      </div>
                      {result.description && (
                        <div className={`text-xs mt-1 truncate ${
                          selectedIndex === index ? 'text-black/60' : 'text-[#888]'
                        }`}>
                          {result.description}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : searchQuery.trim() ? (
            <div className="px-4 py-6 text-center">
              <div className="text-[#B3B3B3] text-sm">No results found</div>
              <div className="text-[#888] text-xs mt-1">
                Try searching for skills, experience, or projects
              </div>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}