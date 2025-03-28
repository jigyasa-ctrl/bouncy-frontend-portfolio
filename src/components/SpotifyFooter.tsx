
import React from 'react';
import { Play, SkipForward } from 'lucide-react';

const SpotifyFooter = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 h-[90px] bg-[#181818] border-t border-[#282828] flex items-center px-4 z-50">
      <div className="w-[30%] flex items-center">
        <div className="w-14 h-14 bg-gray-700 rounded mr-3 flex-shrink-0"></div>
        <div className="space-y-1">
          <div className="w-32 h-1.5 bg-gray-600 rounded-full"></div>
          <div className="w-24 h-1.5 bg-gray-600 rounded-full"></div>
        </div>
      </div>
      
      <div className="w-[40%] flex flex-col items-center">
        <div className="flex items-center gap-4">
          <button className="bg-white rounded-full w-8 h-8 flex items-center justify-center">
            <Play size={16} className="text-black ml-0.5" />
          </button>
          <button className="text-gray-400 hover:text-white transition-colors">
            <SkipForward size={20} />
          </button>
        </div>
        <div className="flex items-center w-full mt-2">
          <div className="h-1 bg-gray-600 rounded-full flex-1">
            <div className="h-full w-1/3 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </div>
      
      <div className="w-[30%] flex justify-end items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center"></div>
        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center"></div>
      </div>
    </div>
  );
};

export default SpotifyFooter;
