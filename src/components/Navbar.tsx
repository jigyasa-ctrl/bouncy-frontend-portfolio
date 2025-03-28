
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight, Search } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

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
        'sticky top-0 z-50 transition-all duration-300 ease-in-out py-4 px-6 md:px-8 flex items-center',
        isScrolled ? 'bg-[#121212]/95 backdrop-blur-md shadow-md' : 'bg-transparent'
      )}
    >
      <div className="flex items-center gap-4">
        <div className="flex gap-2">
          <button className="w-8 h-8 rounded-full bg-black/60 flex items-center justify-center hover:bg-black/80 transition-colors">
            <ChevronLeft size={18} />
          </button>
          <button className="w-8 h-8 rounded-full bg-black/60 flex items-center justify-center hover:bg-black/80 transition-colors">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
      
      <div className="flex-1 flex justify-end">
        <div className="relative flex items-center w-full max-w-md">
          <Search className="absolute left-3 text-gray-400" size={16} />
          <input 
            type="text"
            placeholder="Search for projects, technologies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-[#242424] text-white pl-10 pr-4 py-2.5 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-[#1ED760] w-full transition-all"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
