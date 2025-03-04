import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const sortOptions = [
  { value: 'popular', label: 'Sort by Popular' },
  { value: 'name', label: 'Sort by Name' },
  { value: 'date', label: 'Sort by Date' },
  { value: 'rating', label: 'Sort by Rating' },
  { value: 'downloads', label: 'Sort by Downloads' }
];

interface SortDropdownProps {
  onSort: (value: string) => void;
  currentSort: string;
}

function SortDropdown({ onSort, currentSort }: SortDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleSelect = (value: string) => {
    onSort(value);
    setIsOpen(false);
  };

  const currentLabel = sortOptions.find(option => option.value === currentSort)?.label || sortOptions[0].label;

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gray-800/50 backdrop-blur-sm px-5 py-4 rounded-lg flex items-center justify-between hover:bg-gray-700/80 transition-colors min-w-[200px]"
      >
        <span className="text-base font-medium">{currentLabel}</span>
        <ChevronDown 
          className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      <div 
        className={`
          absolute right-0 w-full overflow-hidden transition-all duration-300 ease-in-out z-50
          ${isOpen ? 'opacity-100 mt-3' : 'opacity-0 mt-0 h-0'}
        `}
      >
        <div className="bg-gray-800 rounded-lg shadow-xl border border-gray-700 py-3">
          {sortOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => handleSelect(option.value)}
              className="w-full px-5 py-3 text-base text-left hover:bg-gray-700/50 flex items-center gap-3"
            >
              <span className={`w-5 h-5 rounded border border-gray-600 flex items-center justify-center ${
                currentSort === option.value ? 'bg-purple-500 border-purple-500' : ''
              }`}>
                {currentSort === option.value && 
                  <span className="text-white text-sm">✓</span>
                }
              </span>
              <span className="text-gray-300">{option.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SortDropdown; 