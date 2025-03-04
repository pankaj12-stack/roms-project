import React from 'react';
import { Download, ChevronRight } from 'lucide-react';

interface DownloadSectionProps {
  title?: string;
  onDownload: () => void;
}

function DownloadSection({ title = "Save Game", onDownload }: DownloadSectionProps) {
  return (
    <div className="w-full space-y-4">
      {/* Download Button */}
      <button 
        onClick={onDownload}
        className="w-full bg-emerald-400 hover:bg-emerald-300 text-black px-6 lg:px-8 py-4 rounded-full font-semibold text-base lg:text-lg flex items-center justify-center gap-2 transform hover:scale-105 transition-all duration-300 shadow-xl"
      >
        <Download className="w-5 h-5 lg:w-6 lg:h-6" />
        {title}
      </button>

      {/* NordVPN Banner */}
      <a href="#" className=" bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 lg:p-5 flex items-center justify-between hover:bg-gray-700/80 transform hover:scale-105 transition-all duration-300 shadow-lg">
        <div className="flex items-center gap-3 lg:gap-4">
          <img src="/nordvpn-logo.png" alt="NordVPN" className="w-8 h-8 lg:w-10 lg:h-10" />
          <div className="flex flex-col">
            <span className="text-base lg:text-lg font-semibold">NordVPN</span>
            <span className="text-emerald-400 text-sm lg:text-base font-medium">66% OFF</span>
          </div>
        </div>
        <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6 text-gray-400" />
      </a>

      {/* Emulator Notice */}
      <a href="#" className="block bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 lg:p-5 hover:bg-gray-700/80 transform hover:scale-105 transition-all duration-300 shadow-lg">
        <div className="flex items-center justify-between">
          <span className="text-gray-400 text-sm lg:text-base flex-1">You need to download a GameCube Emulator to play this ROM locally</span>
          <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6 text-gray-400 flex-shrink-0 ml-2" />
        </div>
      </a>
    </div>
  );
}

export default DownloadSection; 