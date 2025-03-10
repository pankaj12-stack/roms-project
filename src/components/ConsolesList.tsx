import React from 'react';
import { Link } from 'react-router-dom';
import { consoles } from '../data/consoles';
import SortDropdown from './SortDropdown';

interface ConsolesListProps {
  type?: 'roms' | 'emulators';
}

function ConsolesList({ type = 'roms' }: ConsolesListProps) {
  const isEmulators = type === 'emulators';
  
  return (
    <main className="max-w-[1400px] mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold">
          {isEmulators ? 'Gaming Consoles' : 'ROM Consoles'}
        </h1>
        <SortDropdown 
          onSort={() => {}}
          currentSort="popular"
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {consoles.map((console) => (
          <Link 
            key={console.id}
            to={isEmulators ? `/emulators/${console.slug}` : `/roms/${console.slug}`}
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <div className="aspect-[4/3] relative bg-slate-300">
              <img 
                src={console.logo} 
                alt={console.name}
                className="w-full h-full object-contain p-8"
              />
            </div>
            <div className="p-4 bg-gray-800/80">
              <h3 className="text-lg font-medium text-white mb-1">{console.name}</h3>
              <p className="text-sm text-gray-400">
                {isEmulators 
                  ? `${console.emuCount} Emulators`
                  : `${console.gameCount} Games`
                }
              </p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}

export default ConsolesList; 