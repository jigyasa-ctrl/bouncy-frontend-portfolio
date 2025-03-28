
import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A modern e-commerce platform with a focus on user experience and performance.",
      imageUrl: "https://images.unsplash.com/photo-1639322537158-c5d1cea8361e?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio website with unique animations and interactions.",
      imageUrl: "https://images.unsplash.com/photo-1595665593673-bf1ad72905c0?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Dashboard UI",
      description: "A comprehensive dashboard interface for monitoring and analytics.",
      imageUrl: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Mobile App",
      description: "A cross-platform mobile application for task management.",
      imageUrl: "https://images.unsplash.com/photo-1601933513711-9bed9b0e6739?q=80&w=800&auto=format&fit=crop",
    }
  ];

  return (
    <section id="projects" className="py-12 px-8 bg-[#121212]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">
          Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className={cn(
                "bg-[#282828] border-none hover:bg-[#333] transition-colors overflow-hidden animate-fade-in",
                `fade-delay-${index + 1}`
              )}
            >
              <div 
                className="h-40 bg-cover bg-center"
                style={{ backgroundImage: `url(${project.imageUrl})` }}
              ></div>
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
  );
};

export default ProjectsSection;
