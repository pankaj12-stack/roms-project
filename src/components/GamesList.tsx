import React, { useState } from 'react';
import GameCard from './GameCard';
import { games } from '../data/games';
import FilterSidebar from './FilterSidebar';
import SortDropdown from './SortDropdown';

function GamesList() {
  const [currentSort, setCurrentSort] = useState('popular');

  const handleSort = (value: string) => {
    setCurrentSort(value);
    // Add your sorting logic here
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex flex-col 2xl:flex-row gap-8">
        {/* Filters Sidebar - only shown on large screens */}
        <div className="hidden 2xl:block w-64">
          <FilterSidebar />
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-bold">PlayStation (PSX) ROMs</h1>
            <SortDropdown 
              onSort={handleSort}
              currentSort={currentSort}
            />
          </div>

          {/* Filters for mobile/tablet/vertical - shown on top when not 2xl screen */}
          <div className="2xl:hidden w-full mb-8">
            <FilterSidebar />
          </div>

          {/* Games Grid - 2 columns on mobile, 3 on vertical/tablet, 4 on very wide screens */}
          <div className="grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-4 md:gap-6">
            {games.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12 space-x-2">
            {[1, 2, 3, 4, 5].map((page) => (
              <button
                key={page}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  page === 1
                    ? 'bg-purple-500 text-white'
                    : 'bg-gray-800/50 backdrop-blur-sm hover:bg-purple-500'
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default GamesList;