
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import SpotifyFooter from '@/components/SpotifyFooter';
import SpotifySidebar from '@/components/SpotifySidebar';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Layout, Sparkles, Database } from 'lucide-react';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const overviewItems = [
    { title: "React", icon: <Code size={24} />, description: "Building interactive UIs" },
    { title: "TypeScript", icon: <Layout size={24} />, description: "Type-safe code" },
    { title: "Next.js", icon: <Sparkles size={24} />, description: "Modern web apps" },
    { title: "Node.js", icon: <Database size={24} />, description: "Backend development" }
  ];

  return (
    <div className={`min-h-screen ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500 bg-[#121212] text-white`}>
      <div className="flex">
        <SpotifySidebar />
        
        <div className="flex-1 ml-[240px]">
          <Navbar />
          
          {/* Hero Section */}
          <section className="px-8 pt-10 pb-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-2">Hi, I'm John Doe</h1>
            <h2 className="text-3xl md:text-4xl text-gray-300 font-semibold mb-16">Frontend Developer</h2>
            
            {/* Overview Section */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-4">Overview</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {overviewItems.map((item, index) => (
                  <Card key={index} className="bg-[#282828] border-none hover:bg-[#333] transition-colors">
                    <CardContent className="flex flex-col items-center justify-center p-6">
                      <div className="mb-2 text-[#1ED760]">{item.icon}</div>
                      <span className="font-medium mb-1">{item.title}</span>
                      <span className="text-xs text-gray-400">{item.description}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            {/* Featured Projects Preview */}
            <div className="mb-12">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold">Featured Projects</h3>
                <a href="#projects" className="text-[#1ED760] text-sm hover:underline">
                  View All
                </a>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-[#282828] border-none hover:bg-[#333] transition-colors overflow-hidden">
                  <div 
                    className="h-40 bg-cover bg-center"
                    style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1639322537158-c5d1cea8361e?q=80&w=800&auto=format&fit=crop)' }}
                  ></div>
                  <CardContent className="p-4">
                    <h3 className="text-lg font-semibold mb-2">E-commerce Platform</h3>
                    <p className="text-sm text-gray-300 line-clamp-2">
                      A modern e-commerce platform with a focus on user experience and performance.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-[#282828] border-none hover:bg-[#333] transition-colors overflow-hidden">
                  <div 
                    className="h-40 bg-cover bg-center"
                    style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1595665593673-bf1ad72905c0?q=80&w=800&auto=format&fit=crop)' }}
                  ></div>
                  <CardContent className="p-4">
                    <h3 className="text-lg font-semibold mb-2">Portfolio Website</h3>
                    <p className="text-sm text-gray-300 line-clamp-2">
                      A personal portfolio website with unique animations and interactions.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
          
          <AboutSection />
          <ProjectsSection />
          <ContactSection />
          <Footer />
        </div>
      </div>
      
      <SpotifyFooter />
    </div>
  );
};

export default Index;
