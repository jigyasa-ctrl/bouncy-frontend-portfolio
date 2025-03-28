
import React from 'react';
import { Home, ListMusic, Search } from 'lucide-react';

const SpotifySidebar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className="fixed left-0 top-0 h-[calc(100vh-90px)] w-[240px] bg-[#121212] border-r border-[#282828] p-6 overflow-y-auto">
      <div className="flex items-center mb-8 gap-4">
        <div className="w-10 h-10 rounded-full bg-[#333]"></div>
        <div className="h-1 bg-white w-24"></div>
      </div>
      
      <div className="space-y-2 mb-8">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3 text-white hover:text-[#1ED760] transition-colors w-full py-2 px-4 rounded-md hover:bg-[#282828]"
        >
          <Home size={20} />
          <span className="font-medium">Home</span>
        </button>
        
        <button 
          onClick={() => scrollToSection('about')}
          className="flex items-center gap-3 text-white hover:text-[#1ED760] transition-colors w-full py-2 px-4 rounded-md hover:bg-[#282828]"
        >
          <Search size={20} />
          <span className="font-medium">About</span>
        </button>
        
        <button 
          onClick={() => scrollToSection('projects')}
          className="flex items-center gap-3 text-white hover:text-[#1ED760] transition-colors w-full py-2 px-4 rounded-md hover:bg-[#282828]"
        >
          <ListMusic size={20} />
          <span className="font-medium">Projects</span>
        </button>
      </div>
    </div>
  );
};

export default SpotifySidebar;
