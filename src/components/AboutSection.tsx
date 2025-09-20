
import React from 'react';
import { cn } from '@/lib/utils';
import { Code, Layout, Sparkles } from 'lucide-react';

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, title, description, className }) => {
  return (
    <div className={cn(
      "bg-[#282828] p-6 rounded-lg transition-all duration-300 hover:translate-y-[-5px] hover:bg-[#333] border-l-4 border-[#1ED760]",
      className
    )}>
      <span style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'left',
      }}>
      <div className="mb-4 inline-flex items-center justify-center mr-5 rounded-md bg-[#1ed76015] text-[#1ED760]">
        {icon} 
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      </span>
      
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 px-8 bg-[#151515]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 border-b border-[#282828] pb-4">
                About Me
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm a frontend developer with a passion for creating beautiful, functional, and user-centered digital experiences. With 5+ years of experience in design and development, I bring a unique perspective to every project.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                My approach combines clean code, modern design principles, and a deep understanding of UI optimization and Performance. Don't believe me ? Check Lighthouse for performance score.
                 I'm constantly exploring new technologies and techniques to push the boundaries of what's possible on the web.
              </p>
              <p>Exploring AI boundaries right now. Let's make something awesome ?</p>
              <div className="pt-4">
                <a 
                  href="#contact" 
                  className="inline-block px-6 py-3 bg-[#1ED760] text-black font-medium rounded-full hover:bg-[#1bc255] transition-colors"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 grid grid-cols-1 gap-6">
            <SkillCard
              icon={<Code size={24} />}
              title="Frontend Development"
              description="Building responsive, accessible, and performant web applications with React, Next.js, and modern CSS frameworks."
              className="animate-fade-in fade-delay-1"
            />
            <SkillCard
              icon={<Layout size={24} />}
              title="UI/UX Design"
              description="Creating intuitive interfaces and seamless user experiences through thoughtful design systems and user research."
              className="animate-fade-in fade-delay-2"
            />
            <SkillCard
              icon={<Sparkles size={24} />}
              title="Creative Coding"
              description="Leveraging JavaScript, WebGL, and CSS to create engaging animations and interactive experiences that delight users."
              className="animate-fade-in fade-delay-3"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
