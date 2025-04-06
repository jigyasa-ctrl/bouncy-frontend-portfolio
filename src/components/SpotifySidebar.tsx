
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
      <div className="flex items-center mb-10 gap-3">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1ED760] to-[#0D904B] flex items-center justify-center text-black font-bold text-lg">
          JD
        </div>
        <div className="flex flex-col">
          <span className="font-semibold text-white text-xl">Jigyasa Upadhyay</span>
          <span className="text-xs text-gray-400">Frontend Developer</span>
        </div>
      </div>
      
      <div className="space-y-2 mb-10">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3 text-white hover:text-[#1ED760] transition-colors w-full py-2.5 px-4 rounded-md hover:bg-[#282828]"
        >
          <Home size={20} />
          <span className="font-medium">Home</span>
        </button>
        
        <button 
          onClick={() => scrollToSection('about')}
          className="flex items-center gap-3 text-white hover:text-[#1ED760] transition-colors w-full py-2.5 px-4 rounded-md hover:bg-[#282828]"
        >
          <User size={20} />
          <span className="font-medium">About</span>
        </button>
        
        <button 
          onClick={() => scrollToSection('projects')}
          className="flex items-center gap-3 text-white hover:text-[#1ED760] transition-colors w-full py-2.5 px-4 rounded-md hover:bg-[#282828]"
        >
          <Briefcase size={20} />
          <span className="font-medium">Projects</span>
        </button>
        
        <button 
          onClick={() => scrollToSection('contact')}
          className="flex items-center gap-3 text-white hover:text-[#1ED760] transition-colors w-full py-2.5 px-4 rounded-md hover:bg-[#282828]"
        >
          <Mail size={20} />
          <span className="font-medium">Contact</span>
        </button>
      </div>
      
      <div className="mt-8">
        <h3 className="text-xs uppercase font-semibold text-gray-400 tracking-wider px-4 mb-3">
          Technologies
        </h3>
        <div className="space-y-1">
          {["React", "TypeScript", "Next.js", "Node.js", "Tailwind", "AI"].map((tech, index) => (
            <div key={index} className="px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-[#282828] rounded-md transition-colors">
              {tech}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpotifySidebar;
