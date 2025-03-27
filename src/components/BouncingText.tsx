
import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface BouncingTextProps {
  text: string;
  className?: string;
  letterClassName?: string;
  initialDelay?: number;
  staggerDelay?: number;
}

const BouncingText: React.FC<BouncingTextProps> = ({
  text,
  className = '',
  letterClassName = '',
  initialDelay = 0,
  staggerDelay = 100,
}) => {
  const [visible, setVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, initialDelay);
    
    return () => clearTimeout(timer);
  }, [initialDelay]);

  const letters = text.split('');

  return (
    <div 
      ref={containerRef}
      className={cn('flex flex-wrap justify-center', className)}
      aria-label={text}
    >
      {letters.map((letter, index) => {
        // Skip animation for spaces
        const isSpace = letter === ' ';
        const delay = `${initialDelay + index * staggerDelay}ms`;
        
        return (
          <span
            key={`${letter}-${index}`}
            className={cn(
              'inline-block transition-all duration-300 transform',
              isSpace ? 'mx-2' : 'animate-bounce-letter',
              letterClassName,
              visible ? 'opacity-100' : 'opacity-0 translate-y-4',
              `bounce-delay-${index + 1}`
            )}
            style={{
              transitionDelay: delay,
            }}
            aria-hidden="true"
          >
            {isSpace ? '\u00A0' : letter}
          </span>
        );
      })}
    </div>
  );
};

export default BouncingText;
