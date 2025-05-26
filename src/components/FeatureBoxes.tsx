import { ChevronRight } from "lucide-react";

      {/* Feature Boxes */}
      <div className="max-w-[1400px] mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-4">Your Ultimate Gaming Resource</h1>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Discover, download, and play your favorite retro games with our curated collection of ROMs and emulators. 
          Experience seamless gaming across multiple platforms with our reliable downloads and active community support.
          Join thousands of gamers who trust ROMs Haven for their retro gaming needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Publishing Suite Box */}
          <div className="bg-purple-500/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-purple-500/20 transition-all">
            <h2 className="text-2xl font-bold text-purple-400 mb-3">Game Library</h2>
            <p className="text-gray-300 mb-4">Access thousands of classic games across multiple platforms and consoles</p>
            <button className="text-purple-400 hover:text-purple-300 transition-colors flex items-center">
              Browse Games <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>

          {/* Analytics Box */}
          <div className="bg-blue-500/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-blue-500/20 transition-all">
            <h2 className="text-2xl font-bold text-blue-400 mb-3">Emulator Hub</h2>
            <p className="text-gray-300 mb-4">Find and download verified emulators for your favorite gaming platforms</p>
            <button className="text-blue-400 hover:text-blue-300 transition-colors flex items-center">
              View Emulators <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>

          {/* AI Assistant Box */}
          <div className="bg-green-500/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-green-500/20 transition-all">
            <h2 className="text-2xl font-bold text-green-400 mb-3">Community</h2>
            <p className="text-gray-300 mb-4">Join our active gaming community for support, tips, and discussions</p>
            <button className="text-green-400 hover:text-green-300 transition-colors flex items-center">
              Join Now <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>

          {/* Team Box */}
          <div className="bg-yellow-500/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-yellow-500/20 transition-all">
            <h2 className="text-2xl font-bold text-yellow-400 mb-3">Game Guides</h2>
            <p className="text-gray-300 mb-4">Access comprehensive guides and walkthroughs for your favorite games</p>
            <button className="text-yellow-400 hover:text-yellow-300 transition-colors flex items-center">
              Read Guides <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>

          {/* Stats Box */}
          <div className="bg-pink-500/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-pink-500/20 transition-all">
            <h2 className="text-2xl font-bold text-pink-400 mb-3">Save States</h2>
            <p className="text-gray-300 mb-4">Download and share save states to continue your gaming progress</p>
            <button className="text-pink-400 hover:text-pink-300 transition-colors flex items-center">
              Browse States <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>

          {/* Tools Box */}
          <div className="bg-orange-500/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-orange-500/20 transition-all">
            <h2 className="text-2xl font-bold text-orange-400 mb-3">Game Tools</h2>
            <p className="text-gray-300 mb-4">Essential tools and utilities for ROM patching and game modifications</p>
            <button className="text-orange-400 hover:text-orange-300 transition-colors flex items-center">
              View Tools <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>
      </div>