import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Grid, Download, Gamepad2, Tag, Search } from 'lucide-react';
import GamesList from './components/GamesList';
import GameDetails from './components/GameDetails';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Gamepad2 className="w-8 h-8 text-purple-500" />
              <span className="text-xl font-bold">ROMs Haven</span>
            </div>
            <div className="flex items-center space-x-6">
              <a href="/" className="flex items-center space-x-2 hover:text-purple-400 transition-colors">
                <Grid className="w-5 h-5" />
                <span>ROMs</span>
              </a>
              <a href="#" className="flex items-center space-x-2 hover:text-purple-400 transition-colors">
                <Download className="w-5 h-5" />
                <span>Emulators</span>
              </a>
              <a href="#" className="flex items-center space-x-2 hover:text-purple-400 transition-colors">
                <Tag className="w-5 h-5" />
                <span>Tags</span>
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* Search Bar */}
      <div className="bg-gray-800/50 py-6">
        <div className="container mx-auto px-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search ROMs..."
              className="w-full px-4 py-3 pl-12 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <Routes>
        <Route path="/" element={<GamesList />} />
        <Route path="/game/:id" element={<GameDetails />} />
      </Routes>

      {/* Footer */}
      <footer className="bg-gray-800 border-t border-gray-700 mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Gamepad2 className="w-6 h-6 text-purple-500" />
              <span className="text-sm">Built by gamers, for gamers</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">Help</a>
              <a href="#" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">Safety</a>
              <a href="#" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">Privacy</a>
              <a href="#" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">Terms</a>
              <a href="#" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;