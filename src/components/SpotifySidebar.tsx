
import React from 'react';
import { Home, ListMusic, Search, Briefcase, User, Mail } from 'lucide-react';

const SpotifySidebar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className="fixed left-0 top-0 h-[calc(100vh-90px)] w-[240px] bg-[#121212] border-r border-[#282828] p-6 overflow-y-auto">
      <div className="flex items-center mb-8 gap-2">
        <div className="w-10 h-10 rounded-full bg-[#1ED760] flex items-center justify-center text-black font-bold">
          JD
        </div>
        <span className="font-semibold text-white text-xl">John Doe</span>
      </div>
      
      <div className="space-y-1 mb-8">
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
          <User size={20} />
          <span className="font-medium">About</span>
        </button>
        
        <button 
          onClick={() => scrollToSection('projects')}
          className="flex items-center gap-3 text-white hover:text-[#1ED760] transition-colors w-full py-2 px-4 rounded-md hover:bg-[#282828]"
        >
          <Briefcase size={20} />
          <span className="font-medium">Projects</span>
        </button>
        
        <button 
          onClick={() => scrollToSection('contact')}
          className="flex items-center gap-3 text-white hover:text-[#1ED760] transition-colors w-full py-2 px-4 rounded-md hover:bg-[#282828]"
        >
          <Mail size={20} />
          <span className="font-medium">Contact</span>
        </button>
      </div>
      
      <div className="mt-8">
        <h3 className="text-xs uppercase font-semibold text-gray-400 tracking-wider px-4 mb-2">
          Technologies
        </h3>
        <div className="space-y-1">
          {["React", "TypeScript", "Next.js", "Node.js", "Tailwind", "MongoDB"].map((tech, index) => (
            <div key={index} className="px-4 py-2 text-sm text-gray-300 hover:text-white">
              {tech}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpotifySidebar;
