
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface BouncingTextProps {
  text: string;
  className?: string;
  letterClassName?: string;
  staggerDelay?: number;
}

const BouncingText: React.FC<BouncingTextProps> = ({
  text,
  className = '',
  letterClassName = '',
  staggerDelay = 100,
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const letters = text.split('');

  return (
    <div 
      className={cn('flex flex-wrap justify-center', className)}
      aria-label={text}
    >
      {letters.map((letter, index) => {
        // Skip animation for spaces
        const isSpace = letter === ' ';
        
        return (
          <span
            key={`${letter}-${index}`}
            className={cn(
              'inline-block transition-all duration-300 transform cursor-default',
              isSpace ? 'mx-2' : '',
              letterClassName,
              hoveredIndex === index && !isSpace ? 'animate-bounce-letter' : ''
            )}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
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
