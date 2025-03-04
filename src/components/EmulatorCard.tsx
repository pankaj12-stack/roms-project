import React from 'react';
import { Link } from 'react-router-dom';

interface EmulatorCardProps {
  id: number;
  name: string;
  logo: string;
  emuCount: number;
  slug: string;
}

function EmulatorCard({ id, name, logo, emuCount, slug }: EmulatorCardProps) {
  return (
    <Link 
      to={`/emulator/${slug}`}
      className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300"
    >
      <div className="aspect-[4/3] relative bg-gray-900/50">
        <img 
          src={logo} 
          alt={name}
          className="w-full h-full object-contain p-8"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium text-white mb-1">{name}</h3>
        <p className="text-sm text-gray-400">{emuCount} Emulators</p>
      </div>
    </Link>
  );
}

export default EmulatorCard; 