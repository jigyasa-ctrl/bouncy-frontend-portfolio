
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
      "glass p-6 rounded-lg transition-all duration-300 hover:translate-y-[-5px]",
      className
    )}>
      <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-md bg-primary/10 text-primary">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                About Me
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                I'm a frontend developer with a passion for creating beautiful, functional, and user-centered digital experiences. With a background in design and development, I bring a unique perspective to every project.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                My approach combines clean code, modern design principles, and a deep understanding of user needs. I'm constantly exploring new technologies and techniques to push the boundaries of what's possible on the web.
              </p>
            </div>
          </div>
          
          <div className="order-1 md:order-2 grid grid-cols-1 gap-6">
            <SkillCard
              icon={<Code size={24} />}
              title="Frontend Development"
              description="Building responsive, accessible, and performant web applications with modern frameworks and tools."
              className="animate-fade-in fade-delay-1"
            />
            <SkillCard
              icon={<Layout size={24} />}
              title="UI/UX Design"
              description="Creating intuitive interfaces and seamless user experiences through thoughtful design systems."
              className="animate-fade-in fade-delay-2"
            />
            <SkillCard
              icon={<Sparkles size={24} />}
              title="Creative Coding"
              description="Leveraging JavaScript and CSS to create engaging animations and interactive experiences."
              className="animate-fade-in fade-delay-3"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
