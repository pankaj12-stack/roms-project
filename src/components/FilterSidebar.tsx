import React, { useState } from 'react';
import { ChevronDown, Monitor, Gamepad, Globe, Languages, Calendar } from 'lucide-react';
import SelectedFilters from './SelectedFilters';

const filters = {
  console: {
    icon: <Monitor className="w-4 h-4" />,
    title: 'Console',
    options: ['PlayStation', 'Nintendo 64', 'GameCube', 'Game Boy Advance', 'PS Vita']
  },
  genre: {
    icon: <Gamepad className="w-4 h-4" />,
    title: 'Genre',
    options: ['Action', 'Adventure', 'RPG', 'Sports', 'Racing', 'Strategy']
  },
  region: {
    icon: <Globe className="w-4 h-4" />,
    title: 'Region',
    options: ['USA', 'Europe', 'Japan', 'World']
  },
  language: {
    icon: <Languages className="w-4 h-4" />,
    title: 'Language',
    options: ['English', 'Japanese', 'French', 'German', 'Spanish']
  },
  year: {
    icon: <Calendar className="w-4 h-4" />,
    title: 'Release Year',
    options: ['2023', '2022', '2021', '2020', '2019', 'Before 2019']
  }
};

function FilterSidebar() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [selectedFilters, setSelectedFilters] = useState<{type: string; value: string}[]>([]);

  const handleFilterSelect = (type: string, value: string) => {
    const exists = selectedFilters.some(f => f.type === type && f.value === value);
    
    if (exists) {
      setSelectedFilters(selectedFilters.filter(
        f => !(f.type === type && f.value === value)
      ));
    } else {
      setSelectedFilters([...selectedFilters, { type, value }]);
    }
  };

  const handleFilterRemove = (filterToRemove: {type: string; value: string}) => {
    setSelectedFilters(selectedFilters.filter(
      f => !(f.type === filterToRemove.type && f.value === filterToRemove.value)
    ));
  };

  return (
    <div className="w-full space-y-3">
      <SelectedFilters 
        filters={selectedFilters}
        onRemove={handleFilterRemove}
      />
      
      {Object.entries(filters).map(([key, filter]) => (
        <div key={key}>
          <button
            onClick={() => setActiveFilter(activeFilter === key ? null : key)}
            className="w-full bg-gray-800/50 backdrop-blur-sm px-5 py-4 rounded-lg flex items-center justify-between hover:bg-gray-700/80 transition-colors"
          >
            <div className="flex items-center gap-3">
              <span className="text-gray-400">{React.cloneElement(filter.icon, { className: 'w-5 h-5' })}</span>
              <span className="text-base font-medium">{filter.title}</span>
            </div>
            <ChevronDown 
              className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                activeFilter === key ? 'rotate-180' : ''
              }`}
            />
          </button>
          
          {activeFilter === key && (
            <div className="mt-3 bg-gray-800 rounded-lg shadow-xl border border-gray-700 py-3">
              {filter.options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleFilterSelect(filter.title, option)}
                  className="w-full px-5 py-3 text-base text-left hover:bg-gray-700/50 flex items-center gap-3"
                >
                  <span className={`w-5 h-5 rounded border border-gray-600 flex items-center justify-center ${
                    selectedFilters.some(f => f.type === filter.title && f.value === option)
                      ? 'bg-purple-500 border-purple-500'
                      : ''
                  }`}>
                    {selectedFilters.some(f => f.type === filter.title && f.value === option) && 
                      <span className="text-white text-sm">✓</span>
                    }
                  </span>
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default FilterSidebar; 