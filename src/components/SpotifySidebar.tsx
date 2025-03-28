
import React from 'react';
import { Home, Search, Library, HeartIcon, PlusCircle } from 'lucide-react';

const SpotifySidebar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className="fixed left-0 top-0 h-[calc(100vh-90px)] w-[240px] bg-black p-6 overflow-y-auto">
      <div className="flex items-center mb-8">
        <h2 className="text-2xl font-bold font-mono text-white">dev</h2>
      </div>
      
      <div className="space-y-6">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-4 text-white hover:text-[#1ED760] transition-colors w-full"
        >
          <Home size={24} />
          <span className="font-medium">Home</span>
        </button>
        
        <button 
          onClick={() => scrollToSection('about')}
          className="flex items-center gap-4 text-white hover:text-[#1ED760] transition-colors w-full"
        >
          <Search size={24} />
          <span className="font-medium">About</span>
        </button>
        
        <button 
          onClick={() => scrollToSection('projects')}
          className="flex items-center gap-4 text-white hover:text-[#1ED760] transition-colors w-full"
        >
          <Library size={24} />
          <span className="font-medium">Projects</span>
        </button>
      </div>
      
      <div className="mt-8 pt-6 border-t border-gray-800">
        <h3 className="text-sm uppercase text-gray-400 font-semibold mb-4">Your Skills</h3>
        
        <div className="bg-[#121212] hover:bg-[#282828] p-4 rounded-md cursor-pointer mb-2 transition-colors">
          <span className="text-sm font-medium">Frontend Development</span>
        </div>
        
        <div className="bg-[#121212] hover:bg-[#282828] p-4 rounded-md cursor-pointer mb-2 transition-colors">
          <span className="text-sm font-medium">UI/UX Design</span>
        </div>
        
        <div className="bg-[#121212] hover:bg-[#282828] p-4 rounded-md cursor-pointer transition-colors">
          <span className="text-sm font-medium">Creative Coding</span>
        </div>
      </div>
    </div>
  );
};

export default SpotifySidebar;
