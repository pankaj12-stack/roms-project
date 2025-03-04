import React, { useState, useRef, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, Star, Download, Eye, Monitor, Globe, HardDrive, Info, ChevronRight } from 'lucide-react';
import DownloadSection from './DownloadSection';
import DownloadProgress from './DownloadProgress';
import RelatedEmulators from './RelatedEmulators';
import RelatedGames from './RelatedGames';

// Mock data - replace with actual data
const emulator = {
  id: 1,
  name: 'Delta Emulator',
  logo: 'https://cache.downloadroms.io/static/60e3a8327cf7d4a6ce61f547f6b53f240f933644/image.jpg',
  description: 'Delta is an all-in-one emulator for iOS. It supports Nintendo DS, Game Boy Advance, Game Boy Color, Game Boy, Nintendo 64, and SNES games.',
  rating: 4.8,
  ratingCount: 130,
  console: 'Game Boy (GB)',
  os: 'iOS',
  views: 130,
  downloads: 77,
  fileSize: '106.5 MB',
  screenshots: [
    '/images/delta-1.png',
    '/images/delta-2.png',
    '/images/delta-3.png'
  ]
};

function EmulatorDetails() {
  const { slug } = useParams();
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

  // Mock data for related sections
  const relatedEmulators = [
    {
      id: 2,
      name: 'DeSmuME',
      logo: '/images/desmume.png',
      emuCount: 5,
      slug: 'desmume'
    },
    // ... add more emulators
  ];

  const relatedGames = [
    {
      id: 1,
      title: "Pokemon Red",
      image: "/images/pokemon-red.jpg",
      size: "2MB",
      rating: 4.9,
      category: "Game Boy",
      language: "English",
      description: "Pokemon Red Version for Game Boy"
    },
    {
      id: 2,
      title: "Super Mario Land",
      image: "/images/mario-land.jpg",
      size: "1MB",
      rating: 4.8,
      category: "Game Boy",
      language: "English",
      description: "Super Mario Land for Game Boy"
    },
    // ... add more Game Boy games
  ];

  return (
    <main className="max-w-[1400px] mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center space-x-2 text-sm text-gray-400 mb-8">
        <Link to="/emulators" className="hover:text-purple-400 transition-colors flex items-center">
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back to Emulators
        </Link>
      </div>

      {/* Game Header */}
      <div className="flex flex-col lg:flex-row gap-8 mb-12">
        {/* Image Container */}
        <div className="w-full lg:w-1/3 flex-shrink-0">
          <div className="relative w-[min(280px,70vw)] sm:w-[min(320px,70vw)] md:w-[min(360px,70vw)] lg:w-full aspect-[3/4] mx-auto lg:mx-0">
            <div className="absolute inset-0 w-full h-full">
              <img
                src={emulator.logo}
                alt={emulator.name}
                className="rounded-2xl w-full h-full object-contain p-8 bg-gray-800/50 backdrop-blur-sm"
              />
            </div>
          </div>
        </div>

        {/* Content Container */}
        <div className="flex-grow">
          <h1 className="text-4xl font-bold mb-6 text-white">{emulator.name}</h1>
          
          {/* Info Grid and Download Section */}
          <div className="space-y-8 lg:space-y-0 lg:flex lg:flex-row lg:gap-8 mb-8">
            {/* Info Grid */}
            <div className="grid grid-cols-2 gap-4 lg:w-3/5">
              <div className="bg-gray-800/50 backdrop-blur-sm p-4 lg:p-5 rounded-lg">
                <div className="flex items-center space-x-2 text-yellow-400 mb-2">
                  <Star className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
                  <span className="text-base lg:text-lg font-semibold">{emulator.rating}</span>
                </div>
                <span className="text-sm lg:text-base text-gray-400 font-medium">Rating</span>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm p-4 lg:p-5 rounded-lg">
                <div className="flex items-center space-x-2 text-blue-400 mb-2">
                  <Monitor className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
                  <span className="text-base lg:text-lg font-semibold">{emulator.console}</span>
                </div>
                <span className="text-sm lg:text-base text-gray-400 font-medium">Console</span>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm p-4 lg:p-5 rounded-lg">
                <div className="flex items-center space-x-2 text-purple-400 mb-2">
                  <Globe className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
                  <span className="text-base lg:text-lg font-semibold">{emulator.os}</span>
                </div>
                <span className="text-sm lg:text-base text-gray-400 font-medium">OS</span>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm p-4 lg:p-5 rounded-lg">
                <div className="flex items-center space-x-2 text-pink-400 mb-2">
                  <HardDrive className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
                  <span className="text-base lg:text-lg font-semibold">{emulator.fileSize}</span>
                </div>
                <span className="text-sm lg:text-base text-gray-400 font-medium">File size</span>
              </div>
            </div>

            {/* Download Section */}
            <div className="w-full lg:w-2/5">
              <DownloadSection 
                title="Download Emulator" 
                onDownload={handleDownload}
              />
            </div>
          </div>

          {/* About Section */}
          <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm mb-8">
            <h2 className="text-xl font-semibold mb-4 flex items-center text-white">
              <Info className="w-5 h-5 mr-2 text-purple-400" />
              About This Emulator
            </h2>
            <p className="text-gray-300 leading-relaxed">
              {emulator.description}
            </p>
          </div>
        </div>
      </div>

      <DownloadProgress 
        countdown={countdown}
        title={emulator.name}
        downloadRef={downloadSectionRef}
        isDownloading={isDownloading}
      />

      {/* Screenshots */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-white">Screenshots</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {emulator.screenshots.map((screenshot, index) => (
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

      {/* Related Sections */}
      <div className="space-y-12">
        <RelatedEmulators 
          title={`Popular ${emulator.console} Emulators`}
          emulators={relatedEmulators}
        />
        
        <RelatedGames 
          title={`Popular ${emulator.console} Games`}
          games={relatedGames}
        />
      </div>
    </main>
  );
}

export default EmulatorDetails; 