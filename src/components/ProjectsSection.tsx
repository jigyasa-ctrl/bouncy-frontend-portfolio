
import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: "Cherr-GPT",
      description: "Cherry - AI chrome extension powered by chatGPT for on the go AI assistance while writing on the web..",
      imageUrl: "cherry.jpg",
      technologies: ["Javascript", "OpenAI Apis", ],
      githubUrl: "https://github.com/jigyasa-ctrl/cherry-GPT",
      liveUrl: "https://github.com/jigyasa-ctrl/cherry-GPT",
    },
    {
      title: "AI Code Reviewer",
      description: "AI Code reviewer web app that leverages AI to provide insightful code reviews, enhancing code quality and developer productivity.",
      imageUrl: "code.jpg",
      technologies: ["Next.js", "Ollama | Langchain", "NodeJS", "Express"],
      githubUrl: "https://github.com/jigyasa-ctrl/code-reviewer",
      liveUrl: "https://github.com/jigyasa-ctrl/code-reviewer",
    },
    {
      title: "Dashboard UI",
      description: "A comprehensive dashboard interface for data analytics and monitoring.",
      imageUrl: "dash.jpeg",
      technologies: ["React", "recharts", "Firebase", "Material UI", ],
      githubUrl: "https://github.com/jigyasa-ctrl/Dashboard-UI",
      liveUrl: "https://dash-interface.netlify.app",
    },
    {
      title: "PuppyGram",
      description: "It's a Place to add amazing and cute memories of your pets! add, edit, delete and view all your pet memories in one place and engage with other pet lovers.",
      imageUrl: "pets.jpeg",
      technologies: ["ReactJS", "Express", "NodeJS", "MongoDB", "Mongoose", "CSS"],
      githubUrl: "https://github.com/jigyasa-ctrl/PuppyGram",
      liveUrl: "https://github.com/jigyasa-ctrl/PuppyGram",
    },
    
    
    {
      title: "Staff Talents",
      description: "Website for Staff Talents LLC.",
      imageUrl: "staff.jpg",
      technologies: ["NextJS", "Tailwind CSS", "FramerMotion"],
      githubUrl: "",
      liveUrl: "https://stafftalentssolutions.com/",
      isPrivate: true
    },
    {
      title: "Mango Analytics",
      description: "Website for Mango Analytics AI Consulting Firm.",
      imageUrl: "mango.jpg",
      technologies: ["NextJS", "Tailwind CSS", "FramerMotion", "Web Perfromance", "optimizations"],
      githubUrl: "",
      liveUrl: "https://hilarious-fudge-d6682a.netlify.app/",
      isPrivate: true
    },
    
  ];

  return (
    <section id="projects" className="py-16 px-8 bg-[#121212]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 border-b border-[#282828] pb-4">
          Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                    href={project.isPrivate ? "" : project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`bg-black/60 text-white p-3 rounded-full hover:bg-[#1ED760]/80 transition-colors`}
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
                    <span>{project.isPrivate ?  "Private project" : "View Code"}</span>
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
