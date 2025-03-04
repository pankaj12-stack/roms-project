import React, { useState, useRef, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Download, ChevronLeft, Star, Info, HardDrive, Globe, Calendar, Users, ChevronRight, GamepadIcon, MapPin, Languages, Eye } from 'lucide-react';
import { games } from '../data/games';
import RelatedGames from './RelatedGames';
import DownloadSection from './DownloadSection';
import DownloadProgress from './DownloadProgress';

function GameDetails() {
  const { id } = useParams();
  const game = games.find(g => g.id === Number(id));
  const [isDownloading, setIsDownloading] = useState(false);
  const [countdown, setCountdown] = useState(3);
  const downloadSectionRef = useRef<HTMLDivElement>(null);

  const handleDownload = () => {
    if (!isDownloading) {
      setIsDownloading(true);
      setCountdown(3);
      setTimeout(() => {
        if (downloadSectionRef.current) {
          const yOffset = -40;
          const element = downloadSectionRef.current;
          const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100);
    }
  };

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (isDownloading && countdown > 0) {
      timer = setTimeout(() => {
        setCountdown(prev => prev - 1);
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [isDownloading, countdown]);

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

  // Filter games for related sections
  const popularGames = games.filter(g => g.id !== game.id).slice(0, 12);
  const similarGames = games.filter(g => g.id !== game.id).slice(0, 12);

  return (
    <main className="max-w-[1400px] mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center space-x-2 text-sm text-gray-400 mb-8">
        <Link to="/" className="hover:text-purple-400 transition-colors flex items-center">
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back to ROMs
        </Link>
      </div>

      {/* Game Header */}
      <div className="flex flex-col lg:flex-row gap-8 mb-12">
        {/* Image Container */}
        <div className="w-full lg:w-1/3 flex-shrink-0">
          <div className="relative w-[min(280px,70vw)] sm:w-[min(320px,70vw)] md:w-[min(360px,70vw)] lg:w-full aspect-[3/4] mx-auto lg:mx-0">
            <div className="absolute inset-0 w-full h-full">
              <img
                src={game.image}
                alt={game.title}
                className="rounded-2xl w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Content Container */}
        <div className="flex-grow">
          <h1 className="text-4xl font-bold mb-6 text-white">{game.title}</h1>
          
          {/* Game Info and Save Game Section */}
          <div className="space-y-8 lg:space-y-0 lg:flex lg:flex-row lg:gap-8 mb-8">
            {/* Nine info blocks in 3x3 grid */}
            <div className="grid grid-cols-2 gap-4 lg:w-3/5">
              {/* Rating Block */}
              <div className="bg-gray-800/50 p-4 lg:p-5 rounded-lg backdrop-blur-sm">
                <div className="flex items-center space-x-2 text-yellow-400 mb-2">
                  <div className="hidden sm:flex items-center">
                    {[1, 2, 3, 4].map((star) => (
                      <Star key={star} className="w-3.5 h-3.5 lg:w-4 lg:h-4 fill-current text-yellow-400" />
                    ))}
                    <Star className="w-3.5 h-3.5 lg:w-4 lg:h-4 fill-current text-gray-600" />
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-base lg:text-lg font-semibold">4.09</span>
                    <span className="text-gray-400 text-sm">(56)</span>
                  </div>
                </div>
                <span className="text-sm lg:text-base text-gray-400 font-medium">Rating</span>
              </div>

              {/* Size Block */}
              <div className="bg-gray-800/50 p-4 lg:p-5 rounded-lg backdrop-blur-sm">
                <div className="flex items-center space-x-2 text-purple-400 mb-2">
                  <HardDrive className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
                  <span className="text-base lg:text-lg font-semibold">792 MB</span>
                </div>
                <span className="text-sm lg:text-base text-gray-400 font-medium">Size</span>
              </div>

              {/* Console Block */}
              <div className="bg-gray-800/50 p-4 lg:p-5 rounded-lg backdrop-blur-sm">
                <div className="flex items-center space-x-2 text-blue-400 mb-2">
                  <Globe className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
                  <span className="text-base lg:text-lg font-semibold">PlayStation</span>
                </div>
                <span className="text-sm lg:text-base text-gray-400 font-medium">Console</span>
              </div>

              {/* Genre Block */}
              <div className="bg-gray-800/50 p-4 lg:p-5 rounded-lg backdrop-blur-sm">
                <div className="flex items-center space-x-2 text-green-400 mb-2">
                  <GamepadIcon className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
                  <span className="text-base lg:text-lg font-semibold">Action</span>
                </div>
                <span className="text-sm lg:text-base text-gray-400 font-medium">Genre</span>
              </div>

              {/* Language Block */}
              <div className="bg-gray-800/50 p-4 lg:p-5 rounded-lg backdrop-blur-sm">
                <div className="flex items-center space-x-2 text-blue-400 mb-2">
                  <Languages className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
                  <span className="text-base lg:text-lg font-semibold">English</span>
                </div>
                <span className="text-sm lg:text-base text-gray-400 font-medium">Language</span>
              </div>

              {/* Release Year Block */}
              <div className="bg-gray-800/50 p-4 lg:p-5 rounded-lg backdrop-blur-sm">
                <div className="flex items-center space-x-2 text-green-400 mb-2">
                  <Calendar className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
                  <span className="text-base lg:text-lg font-semibold">2003</span>
                </div>
                <span className="text-sm lg:text-base text-gray-400 font-medium">Release Year</span>
              </div>
            </div>

            {/* Save Game Section */}
            <div className="w-full lg:w-2/5">
              <DownloadSection 
                onDownload={handleDownload}
              />
            </div>
          </div>

          {/* About Section */}
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

      {/* Download Progress */}
      <DownloadProgress 
        countdown={countdown}
        title={game.title}
        downloadRef={downloadSectionRef}
        isDownloading={isDownloading}
      />

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
            </div>
          ))}
        </div>
      </div>

      {/* Related Games sections */}
      <div className="space-y-12">
        <RelatedGames 
          title={`Popular ${game.category} Games`}
          games={popularGames}
        />
        
        <RelatedGames 
          title={`Similar to ${game.title}`}
          games={similarGames}
        />
      </div>
    </main>
  );
}

export default GameDetails;