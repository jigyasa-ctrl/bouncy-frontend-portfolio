import React from 'react';

const TypingIndicator: React.FC = () => {
  return (
    <div className="flex items-start gap-2 mb-4">
      <div className="w-7 h-7 rounded-full bg-[#1ED760] flex items-center justify-center flex-shrink-0">
        <span className="text-xs font-bold text-black">AI</span>
      </div>
      <div className="bg-[#f3f4f6] rounded-2xl rounded-tl-sm px-4 py-3">
        <div className="flex gap-1.5">
          <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
          <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
          <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
      </div>
    </div>
  );
};

export default TypingIndicator;
