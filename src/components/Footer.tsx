
import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="border-t border-[#282828] py-14 px-8 bg-[#0c0c0c]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1ED760] to-[#0D904B] flex items-center justify-center text-black font-bold">
                JD
              </div>
              <h2 className="text-2xl font-bold">John Doe</h2>
            </div>
            <p className="text-gray-400 text-sm max-w-xs">
              Creating exceptional digital experiences with precision and creativity.
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            <a 
              href="#" 
              className="text-gray-400 hover:text-[#1ED760] transition-colors p-2 hover:bg-[#282828] rounded-full"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-[#1ED760] transition-colors p-2 hover:bg-[#282828] rounded-full"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-[#1ED760] transition-colors p-2 hover:bg-[#282828] rounded-full"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-[#1ED760] transition-colors p-2 hover:bg-[#282828] rounded-full"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-[#282828] mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 mb-4 md:mb-0">
            © {year} John Doe. All rights reserved.
          </p>
          <div className="flex flex-col md:flex-row items-center md:space-x-6 text-sm text-gray-500">
            <a href="#" className="mb-2 md:mb-0 hover:text-[#1ED760] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#1ED760] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
