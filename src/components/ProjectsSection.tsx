
import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';

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
        "group relative overflow-hidden rounded-lg transition-all duration-300 hover:shadow-xl",
        className
      )}
    >
      <div className="aspect-video overflow-hidden">
        <div 
          className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90" />
      
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 className="text-xl font-bold mb-2 flex items-center justify-between">
          {title}
          <span className="opacity-0 transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
            <ArrowUpRight size={20} />
          </span>
        </h3>
        
        <p className="text-sm text-white/80 mb-4 line-clamp-2">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="text-xs py-1 px-2 bg-white/10 backdrop-blur-sm rounded"
            >
              {tag}
            </span>
          ))}
        </div>
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
  ];

  return (
    <section id="projects" className="py-24 px-6 md:px-12 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of my recent work, showcasing my skills and approach to frontend development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
              className={`animate-slide-up delay-${index * 100}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
