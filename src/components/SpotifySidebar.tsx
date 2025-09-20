
import React, { useState } from 'react';
import { Home, ListMusic, Search, Briefcase, User, Mail, ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';

interface SpotifySidebarProps {
  onToggle: (isCollapsed: boolean) => void;
}

const SpotifySidebar: React.FC<SpotifySidebarProps> = ({ onToggle }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleSidebar = () => {
    const newCollapsedState = !isCollapsed;
    setIsCollapsed(newCollapsedState);
    onToggle(newCollapsedState);
  };
  
  return (
    <div className={`fixed left-0 top-0 h-[calc(100vh-90px)] bg-[#121212] border-r border-[#282828] overflow-y-auto transition-all duration-300 ${
      isCollapsed ? 'w-[60px] p-2' : 'w-[240px] p-6'
    }`}>
      <div className="flex items-center mb-10 gap-3">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1ED760] to-[#0D904B] flex items-center justify-center text-black font-bold text-lg">
          JD
        </div>
        {!isCollapsed && (
          <div className="flex flex-col">
            <span className="font-semibold text-white text-xl">Jigyasa Upadhyay</span>
            <span className="text-xs text-gray-400">Frontend Developer</span>
          </div>
        )}
      </div>
      
      <div className="space-y-2 mb-10">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className={`flex items-center text-white hover:text-[#1ED760] transition-colors w-full py-2.5 rounded-md hover:bg-[#282828] ${
            isCollapsed ? 'justify-center px-2' : 'gap-3 px-4'
          }`}
          title={isCollapsed ? 'Home' : ''}
        >
          <Home size={20} />
          {!isCollapsed && <span className="font-medium">Home</span>}
        </button>
        
        <button 
          onClick={() => scrollToSection('about')}
          className={`flex items-center text-white hover:text-[#1ED760] transition-colors w-full py-2.5 rounded-md hover:bg-[#282828] ${
            isCollapsed ? 'justify-center px-2' : 'gap-3 px-4'
          }`}
          title={isCollapsed ? 'About' : ''}
        >
          <User size={20} />
          {!isCollapsed && <span className="font-medium">About</span>}
        </button>
        
        <button 
          onClick={() => scrollToSection('projects')}
          className={`flex items-center text-white hover:text-[#1ED760] transition-colors w-full py-2.5 rounded-md hover:bg-[#282828] ${
            isCollapsed ? 'justify-center px-2' : 'gap-3 px-4'
          }`}
          title={isCollapsed ? 'Projects' : ''}
        >
          <Briefcase size={20} />
          {!isCollapsed && <span className="font-medium">Projects</span>}
        </button>
        
        <button 
          onClick={() => scrollToSection('blogs')}
          className={`flex items-center text-white hover:text-[#1ED760] transition-colors w-full py-2.5 rounded-md hover:bg-[#282828] ${
            isCollapsed ? 'justify-center px-2' : 'gap-3 px-4'
          }`}
          title={isCollapsed ? 'Blogs' : ''}
        >
          <BookOpen size={20} />
          {!isCollapsed && <span className="font-medium">Blogs</span>}
        </button>
        
        <button 
          onClick={() => scrollToSection('contact')}
          className={`flex items-center text-white hover:text-[#1ED760] transition-colors w-full py-2.5 rounded-md hover:bg-[#282828] ${
            isCollapsed ? 'justify-center px-2' : 'gap-3 px-4'
          }`}
          title={isCollapsed ? 'Contact' : ''}
        >
          <Mail size={20} />
          {!isCollapsed && <span className="font-medium">Contact</span>}
        </button>
      </div>
      
      {!isCollapsed && (
        <div className="mt-8">
          <h3 className="text-xs uppercase font-semibold text-gray-400 tracking-wider px-4 mb-3">
            Technologies
          </h3>
          <div className="space-y-1">
            {["React", "TypeScript", "Next.js", "Node.js", "Tailwind", "Webpack", "Vite", "BackboneJS", "Zustand", "Redux", "Security", "REST APIs", "Ollama", "Web optimization", "Web Performance"].map((tech, index) => (
              <div key={index} className="px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-[#282828] rounded-md transition-colors">
                {tech}
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Toggle Button */}
      <div className="absolute bottom-4 right-2">
        <button
          onClick={toggleSidebar}
          className="p-2 text-gray-400 hover:text-white hover:bg-[#282828] rounded-md transition-colors"
          title={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </button>
      </div>
    </div>
  );
};

export default SpotifySidebar;
