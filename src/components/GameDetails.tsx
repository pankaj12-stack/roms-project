import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Download, ChevronLeft, Star, Info, HardDrive, Globe, Calendar, Users } from 'lucide-react';
import { games } from '../data/games';

function GameDetails() {
  const { id } = useParams();
  const game = games.find(g => g.id === Number(id));

  if (!game) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Game not found</h1>
          <Link to="/" className="text-purple-400 hover:text-purple-300">
            Return to games list
          </Link>
        </div>
      </div>
    );
  }

  const screenshots = [
    game.image,
    "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&w=800&q=80"
  ];

  return (
    <main className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center space-x-2 text-sm text-gray-400 mb-8">
        <Link to="/" className="hover:text-purple-400 transition-colors flex items-center">
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back to ROMs
        </Link>
      </div>

      {/* Game Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
        {/* Main Image - DVD Cover Size */}
        <div className="lg:col-span-4">
          <div className="relative rounded-lg overflow-hidden shadow-2xl" style={{ paddingBottom: '140%' }}>
            <img
              src={game.image}
              alt={game.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-60" />
            <button className="absolute bottom-4 left-4 right-4 bg-purple-500 text-white px-6 py-3 rounded-lg flex items-center justify-center space-x-2 transform hover:scale-105 transition-transform duration-300 shadow-lg">
              <Download className="w-5 h-5" />
              <span>Download ROM</span>
            </button>
          </div>
        </div>

        {/* Game Info */}
        <div className="lg:col-span-8">
          <h1 className="text-4xl font-bold mb-6 text-white">{game.title}</h1>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-gray-800/50 p-4 rounded-lg backdrop-blur-sm">
              <div className="flex items-center space-x-2 text-yellow-400 mb-1">
                <Star className="w-5 h-5" />
                <span className="text-lg font-semibold">{game.rating}</span>
              </div>
              <span className="text-sm text-gray-400">Rating</span>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-lg backdrop-blur-sm">
              <div className="flex items-center space-x-2 text-purple-400 mb-1">
                <HardDrive className="w-5 h-5" />
                <span className="text-lg font-semibold">{game.size}</span>
              </div>
              <span className="text-sm text-gray-400">Size</span>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-lg backdrop-blur-sm">
              <div className="flex items-center space-x-2 text-blue-400 mb-1">
                <Globe className="w-5 h-5" />
                <span className="text-lg font-semibold">{game.language}</span>
              </div>
              <span className="text-sm text-gray-400">Language</span>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-lg backdrop-blur-sm">
              <div className="flex items-center space-x-2 text-green-400 mb-1">
                <Calendar className="w-5 h-5" />
                <span className="text-lg font-semibold">1997</span>
              </div>
              <span className="text-sm text-gray-400">Release Year</span>
            </div>
          </div>

          <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm mb-8">
            <h2 className="text-xl font-semibold mb-4 flex items-center text-white">
              <Info className="w-5 h-5 mr-2 text-purple-400" />
              About This Game
            </h2>
            <p className="text-gray-300 leading-relaxed">
              {game.description}
            </p>
          </div>

          {/* System Requirements */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-lg font-semibold mb-4 text-white">Minimum Requirements</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  <span>CPU: 1.5 GHz Processor</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  <span>RAM: 512 MB</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  <span>GPU: DirectX 9 Compatible</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  <span>Storage: 1 GB available space</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-lg font-semibold mb-4 text-white">Recommended Emulators</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  <span>ePSXe</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  <span>PCSX-Reloaded</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  <span>RetroArch</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  <span>BizHawk</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Screenshots */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-white">Screenshots</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {screenshots.map((screenshot, index) => (
            <div key={index} className="relative group rounded-lg overflow-hidden" style={{ paddingBottom: '56.25%' }}>
              <img
                src={screenshot}
                alt={`Screenshot ${index + 1}`}
                className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* User Reviews */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">User Reviews</h2>
          <button className="bg-purple-500 px-6 py-2 rounded-lg hover:bg-purple-600 transition-colors text-white">
            Write a Review
          </button>
        </div>
        <div className="space-y-6">
          {[1, 2, 3].map((review) => (
            <div key={review} className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">User{review}</h3>
                    <div className="flex items-center text-yellow-400">
                      {'★'.repeat(5)}
                    </div>
                  </div>
                </div>
                <span className="text-sm text-gray-400">2 days ago</span>
              </div>
              <p className="text-gray-300">
                Amazing classic game that still holds up today. The graphics might be dated,
                but the gameplay and story are timeless. Highly recommended for both newcomers
                and longtime fans of the series.
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default GameDetails;