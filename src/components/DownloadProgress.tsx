import React from 'react';
import { ChevronRight } from 'lucide-react';

interface DownloadProgressProps {
  countdown: number;
  title: string;
  downloadRef: React.RefObject<HTMLDivElement>;
  isDownloading: boolean;
}

function DownloadProgress({ countdown, title, downloadRef, isDownloading }: DownloadProgressProps) {
  if (!isDownloading) return null;

  return (
    <div 
      ref={downloadRef}
      className="mb-12 animate-fade-in bg-gray-800/30 rounded-2xl p-4 lg:p-8"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-6 lg:mb-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">
            Your download is starting in {countdown}...
          </h2>
          <p className="text-gray-400 text-sm lg:text-base">{title} download is loading.</p>
        </div>

        {/* NordVPN Banner in Download Section */}
        <div className="bg-gray-800/80 rounded-xl p-4 lg:p-5 flex items-center justify-between hover:bg-gray-700/80 transform hover:scale-105 transition-all duration-300 shadow-lg cursor-pointer">
          <div className="flex items-center gap-3 lg:gap-4">
            <img src="/nordvpn-logo.png" alt="NordVPN" className="w-10 h-10 lg:w-12 lg:h-12" />
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-2 lg:gap-3">
                <span className="text-lg lg:text-xl font-semibold text-white">NordVPN</span>
                <span className="text-emerald-400 font-medium text-base lg:text-lg">66% OFF</span>
              </div>
              <span className="text-gray-400 text-sm lg:text-base">Protect your downloads</span>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6 text-gray-400" />
        </div>
      </div>
    </div>
  );
}

export default DownloadProgress; 