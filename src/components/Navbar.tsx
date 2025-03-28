
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight, Search, Bell, User } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        'sticky top-0 z-50 transition-all duration-300 ease-in-out py-4 px-6 md:px-8 flex items-center justify-between',
        isScrolled ? 'bg-[#121212]/90 backdrop-blur-md' : 'bg-transparent'
      )}
    >
      <div className="flex items-center gap-4">
        <div className="flex gap-2">
          <button className="w-8 h-8 rounded-full bg-black/60 flex items-center justify-center">
            <ChevronLeft size={18} />
          </button>
          <button className="w-8 h-8 rounded-full bg-black/60 flex items-center justify-center">
            <ChevronRight size={18} />
          </button>
        </div>
        
        <div className="relative hidden md:flex items-center">
          <Search className="absolute left-3 text-gray-400" size={16} />
          <input 
            type="text"
            placeholder="Search..."
            className="bg-[#242424] text-white pl-10 pr-4 py-2 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-[#1ED760] w-60"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-6">
        <button className="hidden md:block px-4 py-1.5 rounded-full bg-[#242424] hover:bg-[#2A2A2A] text-white text-sm font-medium transition-colors">
          Explore Premium
        </button>
        
        <button className="w-8 h-8 rounded-full bg-black/60 flex items-center justify-center">
          <Bell size={18} />
        </button>
        
        <button className="w-8 h-8 rounded-full bg-[#535353] flex items-center justify-center">
          <User size={18} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
