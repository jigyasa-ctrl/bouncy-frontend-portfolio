
import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A modern e-commerce platform with a focus on user experience and performance. Features include product search, filtering, cart management, and secure checkout with Stripe integration.",
      imageUrl: "https://images.unsplash.com/photo-1639322537158-c5d1cea8361e?q=80&w=800&auto=format&fit=crop",
      technologies: ["React", "Node.js", "AI", "Stripe"],
      githubUrl: "https://github.com/username/ecommerce",
      liveUrl: "https://ecommerce.example.com"
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio website with unique animations and interactions. Features a responsive design, dark/light mode toggle, and contact form integration with email notifications.",
      imageUrl: "https://images.unsplash.com/photo-1595665593673-bf1ad72905c0?q=80&w=800&auto=format&fit=crop",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
      githubUrl: "https://github.com/username/portfolio",
      liveUrl: "https://portfolio.example.com"
    },
    {
      title: "Dashboard UI",
      description: "A comprehensive dashboard interface for data analytics and monitoring. Includes customizable widgets, real-time data visualization with interactive charts, and report generation.",
      imageUrl: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=800&auto=format&fit=crop",
      technologies: ["React", "D3.js", "Firebase", "Material UI"],
      githubUrl: "https://github.com/username/dashboard",
      liveUrl: "https://dashboard.example.com"
    },
    {
      title: "Task Management App",
      description: "A cross-platform mobile application for task management with collaboration features. Supports task assignment, due dates, progress tracking, and real-time notifications.",
      imageUrl: "https://images.unsplash.com/photo-1601933513711-9bed9b0e6739?q=80&w=800&auto=format&fit=crop",
      technologies: ["React Native", "Redux", "Express", "PostgreSQL"],
      githubUrl: "https://github.com/username/taskapp",
      liveUrl: "https://taskapp.example.com"
    }
  ];

  return (
    <section id="projects" className="py-16 px-8 bg-[#121212]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 border-b border-[#282828] pb-4">
          Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className={cn(
                "bg-[#282828] border-none hover:bg-[#333] transition-all duration-300 overflow-hidden hover:translate-y-[-5px]",
                `animate-fade-in fade-delay-${index + 1}`
              )}
            >
              <div 
                className="h-52 bg-cover bg-center relative group"
                style={{ backgroundImage: `url(${project.imageUrl})` }}
              >
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black/60 text-white p-3 rounded-full hover:bg-[#1ED760]/80 transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a 
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black/60 text-white p-3 rounded-full hover:bg-[#1ED760]/80 transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-white">{project.title}</h3>
                <p className="text-sm text-gray-300 mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="text-xs bg-[#333] px-2 py-1 rounded-full text-gray-300 hover:bg-[#1ED760]/20 hover:text-white transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm flex items-center gap-1 text-gray-400 hover:text-[#1ED760] transition-colors"
                  >
                    <Github size={16} />
                    <span>View Code</span>
                  </a>
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm flex items-center gap-1 text-gray-400 hover:text-[#1ED760] transition-colors"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
