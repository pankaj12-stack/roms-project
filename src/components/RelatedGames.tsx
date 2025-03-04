import React from 'react';
import GameCard from './GameCard';
import { Game } from '../data/games';

interface RelatedGamesProps {
  title: string;
  games: Game[];
}

function RelatedGames({ title, games }: RelatedGamesProps) {
  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold text-white mb-8">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10">
        {games.slice(0, 10).map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
}

export default RelatedGames; 