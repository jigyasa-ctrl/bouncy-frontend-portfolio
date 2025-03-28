
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import SpotifyFooter from '@/components/SpotifyFooter';
import SpotifySidebar from '@/components/SpotifySidebar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const overviewItems = [
    { title: "React", icon: "🔵" },
    { title: "TypeScript", icon: "🔷" },
    { title: "Next.js", icon: "⚡" },
    { title: "Tailwind", icon: "🎨" }
  ];

  return (
    <div className={`min-h-screen ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500 bg-[#121212] text-white`}>
      <div className="flex">
        <SpotifySidebar />
        
        <div className="flex-1 ml-[240px]">
          <Navbar />
          
          {/* Hero Section */}
          <section className="px-8 pt-10 pb-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-2">Hi, I'm Name</h1>
            <h2 className="text-3xl md:text-4xl text-gray-300 font-semibold mb-16">Frontend Developer</h2>
            
            {/* Overview Section */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-4">Overview</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {overviewItems.map((item, index) => (
                  <Card key={index} className="bg-[#282828] border-none hover:bg-[#333] transition-colors">
                    <CardContent className="flex flex-col items-center justify-center p-6">
                      <span className="text-3xl mb-2">{item.icon}</span>
                      <span className="font-medium">{item.title}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            {/* Projects Section (simplified layout as per wireframe) */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-4">Projects</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Array.from({ length: 4 }).map((_, index) => (
                  <Card key={index} className="bg-[#282828] border-none hover:bg-[#333] transition-colors overflow-hidden">
                    <div className="h-40 bg-gray-700"></div>
                    <CardContent className="p-4">
                      <div className="w-full h-1.5 bg-gray-600 rounded-full mb-3"></div>
                      <div className="w-3/4 h-1.5 bg-gray-600 rounded-full mb-3"></div>
                      <div className="w-1/2 h-1.5 bg-gray-600 rounded-full"></div>
                    </CardContent>
                  </Card>
                ))}
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
