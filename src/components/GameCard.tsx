import React from 'react';
import { Link } from 'react-router-dom';
import { Download } from 'lucide-react';
import { Game } from '../types';

interface GameCardProps {
  game: Game;
}

function GameCard({ game }: GameCardProps) {
  return (
    <Link to={`/game/${game.id}`} className="block">
      <div className="group relative bg-gray-800 rounded-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        {/* DVD cover aspect ratio is typically 1.4:1 */}
        <div className="relative" style={{ paddingBottom: '140%' }}>
          <img
            src={game.image}
            alt={game.title}
            className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
          />
          {/* Dark gradient overlay at bottom - enhanced for better readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
          
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="bg-purple-500 text-white py-2 px-4 rounded-lg flex items-center space-x-2 transform scale-95 hover:scale-100 transition-transform duration-300">
              <Download className="w-4 h-4" />
              <span>View Details</span>
            </div>
          </div>

          {/* Game info at bottom */}
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="font-semibold text-white mb-2 line-clamp-1 drop-shadow-lg">
              {game.title}
            </h3>
            <div className="flex items-center text-sm text-white">
              <span className="text-yellow-400">★</span>
              <span className="ml-1 drop-shadow-lg">{game.rating}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default GameCard;