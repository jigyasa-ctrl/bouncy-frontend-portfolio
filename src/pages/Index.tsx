
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import BlogsSection from '@/components/BlogsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import SpotifyFooter from '@/components/SpotifyFooter';
import SpotifySidebar from '@/components/SpotifySidebar';
import TestimonialsSection from '@/components/TestimonialSection'
import { Card, CardContent } from '@/components/ui/card';
import { Code, Layout, Sparkles, Database } from 'lucide-react';
import { ChevronLeft, ChevronRight, Search } from 'lucide-react';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);
  const [imageIndex, setImageIndex] = useState(0)
  const [isDeviceSmall, setisDeviceSmall] = useState(false)

  useEffect(() => {
    setIsLoaded(true);

    if (typeof window !== "undefined") {
      const media = window.matchMedia("(max-width: 1180px)");
      if (media.matches) {
        setisDeviceSmall(true);
      } else {
        setisDeviceSmall(false);
      }

      function updateMedia(event: MediaQueryListEvent) {
        setisDeviceSmall(event.matches);
      }

      media.addEventListener('change', updateMedia);

      // Cleanup listener on unmount
      return () => {
        media.removeEventListener('change', updateMedia);
      };
    }
  }, []);

  const handleSidebarToggle = (isCollapsed: boolean) => {
    setIsSidebarCollapsed(isCollapsed);
  };

  const overviewItems = [
    { 
      title: "React", 
      icon: <Code size={24} />, 
      description: "Building interactive UIs with modern React patterns and hooks" 
    },
    { 
      title: "TypeScript", 
      icon: <Layout size={24} />, 
      description: "Type-safe code with advanced TypeScript features" 
    },
    { 
      title: "Next.js", 
      icon: <Sparkles size={24} />, 
      description: "Modern web apps with SSR and static generation" 
    },
    { 
      title: "Node.js", 
      icon: <Database size={24} />, 
      description: "Scalable backend solutions with Express and MongoDB" 
    }
  ];

  return (
    <div className={`min-h-screen ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500 bg-[#121212] text-white`}>
      <div className="flex">
        <SpotifySidebar onToggle={handleSidebarToggle} />
        
        <div className={`flex-1 transition-all duration-300 ${
          isSidebarCollapsed ? 'ml-[60px]' : 'ml-[240px]'
        }`}>
          <Navbar setImageIndex={setImageIndex} isDeviceSmall={isDeviceSmall}/>
          
          {/* Hero Section */}
          <section className="px-8 pt-12 pb-6 bg-gradient-to-b from-[#1a1a1a] to-[#121212]">
            <div className='flex flex-row justify-between'>
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">Hi, I'm Jigyasa Upadhyay</h1>
              <h2 className="text-3xl md:text-4xl text-gray-300 font-semibold mb-6">Frontend Developer | <span style={{
                color: "#0FA851"
              }}>5 years experience </span></h2>
              <p className="text-gray-400 text-lg mb-16 max-w-2xl">
                Creating exceptional digital experiences with clean code and modern design principles. Specialized in <span style={{
                color: "#0FA851"
              }}>React</span>, <span style={{
                color: "#0FA851"
              }}>TypeScript</span>, and <span style={{
                color: "#0FA851"
              }}>Next.js</span> development.
              </p>
            </div>
            {!isDeviceSmall && <img 
              src={`${imageIndex}.jpg`} 
              className='rounded-md' 
              style={{ width: '500px', height: '400px'}} 
              width={300} 
              height={200} 
            /> }

            </div>
            
            {/* Overview Section */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-6">Overview</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {overviewItems.map((item, index) => (
                  <Card key={index} className="bg-[#282828] border-none hover:bg-[#333] transition-colors hover:translate-y-[-5px] duration-300">
                    <CardContent className="flex flex-col items-center justify-center p-6">
                      <div className="mb-3 text-[#1ED760] bg-[#1ed76015] p-3 rounded-full">{item.icon}</div>
                      <span className="font-medium mb-2 text-lg text-white">{item.title}</span>
                      <span className="text-sm text-gray-400 text-center">{item.description}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            {/* Featured Projects Preview */}
            <div className="mb-16">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold">Featured Projects</h3>
                <a href="#projects" className="text-[#1ED760] text-sm hover:underline flex items-center gap-1">
                  View All
                  <ChevronRight size={16} />
                </a>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-[#282828] border-none hover:bg-[#333] transition-all duration-300 overflow-hidden hover:translate-y-[-5px]">
                  <div 
                    className="h-48 bg-cover bg-center"
                    style={{ backgroundImage: 'url(cherry.jpg)' }}
                  ></div>
                  <CardContent className="p-5">
                    <h3 className="text-xl font-semibold mb-2 text-white">Cherr-GPT</h3>
                    <p className="text-sm text-gray-300 mb-3">
                    Cherry - AI chrome extension powered by chatGPT that provides on the go assitance on the web.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-[#333] px-2 py-1 rounded-full text-gray-300">Javascript</span>
                      <span className="text-xs bg-[#333] px-2 py-1 rounded-full text-gray-300">OpenAI API</span>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-[#282828] border-none hover:bg-[#333] transition-all duration-300 overflow-hidden hover:translate-y-[-5px]">
                  <div 
                    className="h-48 bg-cover bg-center"
                    style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1595665593673-bf1ad72905c0?q=80&w=800&auto=format&fit=crop)' }}
                  ></div>
                  <CardContent className="p-5">
                    <h3 className="text-xl font-semibold mb-2 text-white">AI Code Reviewer</h3>
                    <p className="text-sm text-gray-300 mb-3">
                    A local-first, AI-powered code review app that leverages AI to review your code and provide suggestions to optimize and best practises.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-[#333] px-2 py-1 rounded-full text-gray-300">Next.js</span>
                      <span className="text-xs bg-[#333] px-2 py-1 rounded-full text-gray-300">Ollama | Langchain</span>
                      <span className="text-xs bg-[#333] px-2 py-1 rounded-full text-gray-300">NodeJS</span>
                      <span className="text-xs bg-[#333] px-2 py-1 rounded-full text-gray-300">Express</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
          
          <AboutSection />
          <ProjectsSection />
          <BlogsSection />
          <TestimonialsSection />
          <ContactSection />
          <Footer />
        </div>
      </div>
      
      <SpotifyFooter />
    </div>
  );
};

export default Index;
