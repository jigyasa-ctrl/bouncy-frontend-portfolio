import React, { useState, useEffect } from 'react';
import { Play, Pause, SkipForward, SkipBack, Volume2, Maximize2 } from 'lucide-react';

const SpotifyFooter = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isAudioLoaded, setIsAudioLoaded] = useState(false);
  const [currentTime, setCurrentTime] = useState(0); // 2:14 in seconds
  const totalTime = 225; // 3:45 in seconds
  const audioRef = React.useRef<HTMLAudioElement | null>(null);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    // Lazy-attach src and load only on first interaction
    if (!isAudioLoaded) {
      audio.src = '/Uptown-Funk.mp3';
      audio.load();
      setIsAudioLoaded(true);
    }

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play();
      setIsPlaying(true);
    }
  };

  // Update time every second when playing
  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined;
    
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime((prevTime) => {
          if (prevTime >= totalTime) {
            clearInterval(interval);
            setIsPlaying(false);
            return 0;
          }
          return prevTime + 1;
        });
      }, 1000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying, totalTime]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <>
      <audio ref={audioRef} preload="none" playsInline />
      <div className="fixed bottom-0 left-0 right-0 h-[90px] bg-[#181818] border-t border-[#282828] flex items-center px-6 z-50">
        <div className="w-[30%] flex items-center">
          <div className="w-14 h-14 bg-cover bg-center rounded mr-3 flex-shrink-0 shadow-md" 
            style={{ backgroundImage: 'url(/uptown.png)' }}>
          </div>
          <div className="space-y-1">
            <h4 className="text-sm font-medium text-white">Don't believe me, just watch</h4>
            <p className="text-xs text-gray-400">Frontend Developer </p>
          </div>
        </div>
        
        <div className="w-[40%] flex flex-col items-center">
          <div className="flex items-center gap-6">
            <button className="text-gray-400 hover:text-white transition-colors">
              <SkipBack size={18} />
            </button>
            <button 
              onClick={togglePlayPause}
              className="bg-white rounded-full w-9 h-9 flex items-center justify-center hover:scale-105 transition-transform"
            >
              {isPlaying ? 
                <Pause size={18} className="text-black" /> : 
                <Play size={18} className="text-black ml-0.5" />
              }
            </button>
            <button className="text-gray-400 hover:text-white transition-colors">
              <SkipForward size={18} />
            </button>
          </div>
          <div className="flex items-center w-full mt-2">
            <span className="text-xs text-gray-400 mr-2">{formatTime(currentTime)}</span>
            <div className="h-1 bg-gray-600 rounded-full flex-1 relative group">
              <div 
                className="h-full bg-white group-hover:bg-[#1ED760] rounded-full transition-colors"
                style={{ width: `${(currentTime / totalTime) * 100}%` }}
              ></div>
              <div 
                className="absolute top-1/2 left-0 transform -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 cursor-pointer"
                style={{ left: `${(currentTime / totalTime) * 100}%` }}
              ></div>
            </div>
            <span className="text-xs text-gray-400 ml-2">{formatTime(totalTime)}</span>
          </div>
        </div>
        
        <div className="w-[30%] flex justify-end items-center gap-3">
          <button className="text-gray-400 hover:text-white transition-colors">
            <Volume2 size={18} />
          </button>
          <div className="w-24 h-1 bg-gray-600 rounded-full group">
            <div className="h-full w-2/3 bg-gray-300 group-hover:bg-[#1ED760] rounded-full transition-colors"></div>
          </div>
          <button className="text-gray-400 hover:text-white transition-colors ml-2">
            <Maximize2 size={18} />
          </button>
        </div>
      </div>
    </>
  );
};

export default SpotifyFooter;
