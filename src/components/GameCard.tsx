import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Download, HardDrive } from 'lucide-react';
import { Game } from '../types';

interface GameCardProps {
  game: Game;
}

function GameCard({ game }: GameCardProps) {
  return (
    <Link to={`/game/${game.id}`} className="block transform transition-all duration-300 hover:scale-105">
      <div className="group bg-gray-800/50 rounded-lg overflow-hidden hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl">
        {/* Image Container */}
        <div className="relative overflow-hidden">
          <img
            src={game.image}
            alt={game.title}
            className="w-full h-auto transform transition-transform duration-300 group-hover:scale-110"
          />
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300" />
        </div>

        {/* Game Info Section */}
        <div className="p-4">
          <h3 className="text-xl font-bold text-white mb-6 whitespace-normal">
            {game.title}
          </h3>
          
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 fill-current text-yellow-400" />
              <span className="text-base text-white font-bold">{game.rating}</span>
            </div>
            <div className="flex items-center gap-2">
              <Download className="w-5 h-5 text-emerald-400" />
              <span className="text-base text-emerald-400 font-bold">1,847</span>
            </div>
            <div className="flex items-center gap-2">
              <HardDrive className="w-5 h-5 text-gray-400" />
              <span className="text-base text-gray-400 font-medium">{game.size}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default GameCard;