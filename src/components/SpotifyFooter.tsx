
import React from 'react';
import { Play, SkipForward, SkipBack, Volume2, Maximize2 } from 'lucide-react';

const SpotifyFooter = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 h-[90px] bg-[#181818] border-t border-[#282828] flex items-center px-4 z-50">
      <div className="w-[30%] flex items-center">
        <div className="w-14 h-14 bg-cover bg-center rounded mr-3 flex-shrink-0" 
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1618854997988-4e86c38c7bd0?q=80&w=100&auto=format&fit=crop)' }}>
        </div>
        <div className="space-y-1">
          <h4 className="text-sm font-medium text-white">Code Symphony</h4>
          <p className="text-xs text-gray-400">Frontend Developer</p>
        </div>
      </div>
      
      <div className="w-[40%] flex flex-col items-center">
        <div className="flex items-center gap-4">
          <button className="text-gray-400 hover:text-white transition-colors">
            <SkipBack size={20} />
          </button>
          <button className="bg-white rounded-full w-8 h-8 flex items-center justify-center">
            <Play size={16} className="text-black ml-0.5" />
          </button>
          <button className="text-gray-400 hover:text-white transition-colors">
            <SkipForward size={20} />
          </button>
        </div>
        <div className="flex items-center w-full mt-2">
          <span className="text-xs text-gray-400 mr-2">2:14</span>
          <div className="h-1 bg-gray-600 rounded-full flex-1 relative">
            <div className="h-full w-1/3 bg-white rounded-full"></div>
            <div className="absolute top-1/2 left-1/3 transform -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 hover:opacity-100 cursor-pointer"></div>
          </div>
          <span className="text-xs text-gray-400 ml-2">3:45</span>
        </div>
      </div>
      
      <div className="w-[30%] flex justify-end items-center gap-3">
        <button className="text-gray-400 hover:text-white transition-colors">
          <Volume2 size={18} />
        </button>
        <div className="w-20 h-1 bg-gray-600 rounded-full">
          <div className="h-full w-2/3 bg-gray-300 rounded-full"></div>
        </div>
        <button className="text-gray-400 hover:text-white transition-colors">
          <Maximize2 size={18} />
        </button>
      </div>
    </div>
  );
};

export default SpotifyFooter;
