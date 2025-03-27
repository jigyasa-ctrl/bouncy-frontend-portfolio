
import React, { useEffect, useState } from 'react';
import BouncingText from '@/components/BouncingText';
import Navbar from '@/components/Navbar';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500 bg-black text-white`}>
      <Navbar />
      
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 md:px-12 relative overflow-hidden">
        <div className="w-full max-w-5xl mx-auto flex flex-col items-center justify-center z-10 pt-16">
          <div className="text-center space-y-16">
            <div className="space-y-8">
              <BouncingText
                text="NOT"
                className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-none mb-4 max-w-4xl"
                letterClassName="px-1 text-white"
              />
              
              <BouncingText
                text="YOUR"
                className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-none mb-4 max-w-4xl"
                letterClassName="px-1 text-white"
              />
              
              <BouncingText
                text="AVERAGE"
                className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-none mb-4 max-w-4xl"
                letterClassName="px-1 text-white"
              />
              
              <BouncingText
                text="SOFTWARE"
                className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-none mb-4 max-w-4xl"
                letterClassName="px-1 text-white"
              />
              
              <BouncingText
                text="ENGINEER"
                className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-none mb-4 max-w-4xl"
                letterClassName="px-1 text-white"
              />
            </div>
            
            <div className="flex justify-center">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('contact')}
                className="border border-[#00ffc3] bg-transparent text-[#00ffc3] hover:bg-[#00ffc3]/10 px-8 py-6 text-lg"
              >
                Hire Me
              </Button>
            </div>
          </div>
        </div>
        
        {/* Background HTML/CSS Tags */}
        <div className="absolute text-gray-600/20 text-xl md:text-2xl font-mono">
          <span className="absolute top-1/4 left-20">&lt;html&gt;</span>
          <span className="absolute top-1/3 left-32">&lt;body&gt;</span>
          <span className="absolute top-1/2 left-24">&lt;section&gt;</span>
          <span className="absolute bottom-1/3 right-32">&lt;div&gt;</span>
          <span className="absolute bottom-1/4 right-20">&lt;return&gt;</span>
        </div>
      </section>
      
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
