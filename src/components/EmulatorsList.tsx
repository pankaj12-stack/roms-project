import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { emulators } from '../data/emulators';
import { consoles } from '../data/consoles';
import SortDropdown from './SortDropdown';

function EmulatorsList() {
  const { slug } = useParams();
  const console = consoles.find(c => c.slug === slug);
  const consoleEmulators = emulators.filter(e => e.consoleSlug === slug);

  if (!console) {
    return (
      <div className="max-w-[1400px] mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Console not found</h1>
          <Link to="/emulators" className="text-purple-400 hover:text-purple-300">
            Return to emulators list
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="max-w-[1400px] mx-auto px-4 py-8">
      <div className="space-y-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-400">
          <Link to="/emulators" className="hover:text-purple-400 transition-colors flex items-center">
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back to Emulators
          </Link>
        </div>

        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">{console.name} Emulators</h1>
          <SortDropdown 
            onSort={() => {}}
            currentSort="popular"
          />
        </div>

        {/* Emulators Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {consoleEmulators.map((emulator) => (
            <Link 
              key={emulator.id}
              to={`/emulator/${emulator.slug}`}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <div className="aspect-[4/3] relative bg-slate-300">
                <img 
                  src={emulator.logo} 
                  alt={emulator.name}
                  className="w-full h-full object-contain p-8"
                />
              </div>
              <div className="p-4 bg-gray-800/80">
                <h3 className="text-lg font-medium text-white mb-1">{emulator.name}</h3>
                <p className="text-sm text-gray-400">{emulator.downloads.toLocaleString()} Downloads</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-4 space-x-2">
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
    </main>
  );
}

export default EmulatorsList; 