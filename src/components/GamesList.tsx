import React from 'react';
import GameCard from './GameCard';
import { games } from '../data/games';

function GamesList() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold">PlayStation (PSX) ROMs</h1>
        <select className="bg-gray-700 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
          <option>Sort by Popular</option>
          <option>Sort by Name</option>
          <option>Sort by Date</option>
        </select>
      </div>

      {/* Games Grid - Fixed 4 games per row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
                : 'bg-gray-700 hover:bg-purple-500'
            }`}
          >
            {page}
          </button>
        ))}
      </div>
    </main>
  );
}

export default GamesList;