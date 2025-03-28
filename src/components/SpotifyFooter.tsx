
import React from 'react';
import { Play, SkipBack, SkipForward, Volume2, Maximize2 } from 'lucide-react';

const SpotifyFooter = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 h-[90px] bg-[#181818] border-t border-[#282828] flex items-center px-4 z-50">
      <div className="w-[30%] flex items-center">
        <div className="w-14 h-14 bg-gray-700 rounded mr-3 flex-shrink-0">
          <img 
            src="https://images.unsplash.com/photo-1639322537158-c5d1cea8361e?q=80&w=800&auto=format&fit=crop" 
            alt="Profile" 
            className="w-full h-full object-cover rounded"
          />
        </div>
        <div>
          <h4 className="text-sm font-medium">Frontend Expert</h4>
          <p className="text-xs text-gray-400">Available for hire</p>
        </div>
      </div>
      
      <div className="w-[40%] flex flex-col items-center">
        <div className="flex items-center gap-4">
          <button className="text-gray-400 hover:text-white transition-colors">
            <SkipBack size={20} />
          </button>
          <button className="bg-white rounded-full w-8 h-8 flex items-center justify-center hover:scale-105 transition-transform">
            <Play size={16} className="text-black ml-0.5" />
          </button>
          <button className="text-gray-400 hover:text-white transition-colors">
            <SkipForward size={20} />
          </button>
        </div>
        <div className="flex items-center w-full mt-2">
          <span className="text-xs text-gray-400 w-10 text-right pr-2">0:00</span>
          <div className="h-1 bg-gray-600 rounded-full flex-1 mx-2">
            <div className="h-full w-0 bg-gray-300 rounded-full hover:bg-[#1ED760] transition-colors"></div>
          </div>
          <span className="text-xs text-gray-400 w-10">3:45</span>
        </div>
      </div>
      
      <div className="w-[30%] flex justify-end items-center gap-3">
        <button className="text-gray-400 hover:text-white transition-colors">
          <Volume2 size={20} />
        </button>
        <div className="w-24 h-1 bg-gray-600 rounded-full">
          <div className="h-full w-3/4 bg-gray-300 rounded-full hover:bg-[#1ED760] transition-colors"></div>
        </div>
        <button className="text-gray-400 hover:text-white transition-colors ml-2">
          <Maximize2 size={16} />
        </button>
      </div>
    </div>
  );
};

export default SpotifyFooter;
