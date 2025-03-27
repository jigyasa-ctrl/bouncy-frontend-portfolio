
import React, { useEffect, useState } from 'react';
import BouncingText from '@/components/BouncingText';
import Navbar from '@/components/Navbar';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

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
    <div className={`min-h-screen ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
      <Navbar />
      
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-secondary/30 z-0" />
        
        <div className="w-full max-w-5xl mx-auto flex flex-col items-center justify-center z-10 pt-16">
          <div className="text-center space-y-10">
            <div className="space-y-6">
              <p className="text-muted-foreground font-mono tracking-wide animate-fade-in">
                Hello, I'm a
              </p>
              
              <BouncingText
                text="not your average frontend developer"
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-none mb-4 max-w-4xl"
                letterClassName="px-1"
                initialDelay={300}
                staggerDelay={50}
              />
              
              <p className="text-muted-foreground max-w-xl mx-auto animate-fade-in opacity-0" style={{ animationDelay: '2s', animationFillMode: 'forwards' }}>
                Crafting exceptional digital experiences with clean code and creative solutions.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in opacity-0" style={{ animationDelay: '2.5s', animationFillMode: 'forwards' }}>
              <Button 
                size="lg" 
                onClick={() => scrollToSection('projects')}
                className="group px-6"
              >
                View My Work
                <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => scrollToSection('contact')}
                className="px-6"
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/50 flex items-start justify-center p-1">
            <div className="w-1 h-2 bg-muted-foreground/50 rounded-full animate-slide-down" />
          </div>
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
