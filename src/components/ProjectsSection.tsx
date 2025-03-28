
import React from 'react';
import { cn } from '@/lib/utils';
import { Play, ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link: string;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tags,
  imageUrl,
  link,
  className
}) => {
  return (
    <div 
      className={cn(
        "group relative bg-[#181818] hover:bg-[#282828] rounded-md p-4 transition-all duration-300",
        className
      )}
    >
      <div className="relative mb-4">
        <div className="aspect-square overflow-hidden rounded-md shadow-lg">
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
        </div>
        <button className="absolute right-2 bottom-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 bg-[#1ED760] rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
          <Play size={24} className="text-black ml-0.5" />
        </button>
      </div>
      
      <h3 className="text-base font-bold mb-1">{title}</h3>
      <p className="text-sm text-gray-400 line-clamp-2 mb-3">{description}</p>
      
      <div className="flex flex-wrap gap-2 mt-2">
        {tags.map((tag, index) => (
          <span 
            key={index} 
            className="text-xs py-1 px-2 bg-[#333333] rounded text-gray-300"
          >
            {tag}
          </span>
        ))}
      </div>
      
      <a 
        href={link} 
        className="absolute inset-0 z-10" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label={`View project: ${title}`}
      />
    </div>
  );
};

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A modern e-commerce platform with a focus on user experience and performance.",
      tags: ["React", "Next.js", "Tailwind CSS", "Stripe"],
      imageUrl: "https://images.unsplash.com/photo-1639322537158-c5d1cea8361e?q=80&w=800&auto=format&fit=crop",
      link: "#",
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio website with unique animations and interactions.",
      tags: ["React", "Three.js", "GSAP", "Framer Motion"],
      imageUrl: "https://images.unsplash.com/photo-1595665593673-bf1ad72905c0?q=80&w=800&auto=format&fit=crop",
      link: "#",
    },
    {
      title: "Dashboard UI",
      description: "A comprehensive dashboard interface for monitoring and analytics.",
      tags: ["React", "TypeScript", "Recharts", "Tailwind CSS"],
      imageUrl: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=800&auto=format&fit=crop",
      link: "#",
    },
    {
      title: "Mobile App",
      description: "A cross-platform mobile application for task management.",
      tags: ["React Native", "Redux", "Firebase"],
      imageUrl: "https://images.unsplash.com/photo-1601933513711-9bed9b0e6739?q=80&w=800&auto=format&fit=crop",
      link: "#",
    },
    {
      title: "AI Chatbot",
      description: "An intelligent chatbot for customer support.",
      tags: ["Node.js", "OpenAI", "WebSockets"],
      imageUrl: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?q=80&w=800&auto=format&fit=crop",
      link: "#",
    },
    {
      title: "Social Network",
      description: "A social platform for connecting developers.",
      tags: ["React", "GraphQL", "Node.js", "MongoDB"],
      imageUrl: "https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?q=80&w=800&auto=format&fit=crop",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="py-16 px-6 md:px-8 bg-gradient-to-b from-[#121212] to-[#181818]">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">
            Featured Projects
          </h2>
          <a href="#" className="text-sm text-gray-400 hover:text-white font-bold flex items-center gap-1 transition-colors">
            Show all <ArrowUpRight size={16} />
          </a>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
              className={`animate-fade-in fade-delay-${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
