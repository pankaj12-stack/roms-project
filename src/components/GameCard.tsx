import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Gamepad } from 'lucide-react';
import { Game } from '../types';

interface GameCardProps {
  game: Game;
}

function GameCard({ game }: GameCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link to={`/game/${game.id}`} className="block">
      <div 
        className="w-full max-w-[240px] mx-auto h-auto overflow-hidden border-0 bg-gradient-to-br from-zinc-900 to-zinc-950 text-white transition-all duration-300 transform hover:scale-105 group rounded-lg"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image Container */}
        <div className="relative w-full aspect-[3/4] overflow-hidden rounded-t-lg">
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
          
          {/* Main Image */}
          <img
            src={game.image}
            alt={game.title}
            className="w-full h-full object-cover transition-transform duration-500"
            style={{
              transform: isHovered ? "scale(1.08)" : "scale(1)",
            }}
          />
          
          {/* Base Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-80" />

          {/* Platform Badge */}
          <div className="absolute top-2 left-2 sm:top-3 sm:left-3 z-20">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 border-0 shadow-lg hover:from-purple-700 hover:to-blue-700 text-white text-[10px] sm:text-xs font-medium px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md">
              PS4
            </div>
          </div>

          {/* Rating Badge */}
          <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 flex items-center gap-1 bg-black/70 backdrop-blur-sm px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full z-20">
            <Star className="h-3 w-3 sm:h-3.5 sm:w-3.5 fill-yellow-400 text-yellow-400" />
            <span className="text-[10px] sm:text-xs font-medium">{game.rating}</span>
          </div>
        </div>

        {/* Info Section */}
        <div className="p-2 sm:p-4 relative">
          {/* Extra Gradient for Smooth Transition */}
          <div className="absolute -top-12 left-0 right-0 h-12 bg-gradient-to-t from-zinc-900 to-transparent" />

          <h3 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3 line-clamp-1 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            {game.title}
          </h3>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-1 sm:gap-1.5 text-xs sm:text-sm text-zinc-400">
              <Gamepad className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
              <span>{game.releaseYear || 2024}</span>
            </div>
            <span className="text-xs sm:text-sm font-medium px-1.5 sm:px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-300">
              {game.size}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default GameCard;