import React from 'react';
import { cn } from '@/lib/utils';
import { Copy, Check } from 'lucide-react';

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface MessageBubbleProps {
  message: Message;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  const [copied, setCopied] = React.useState(false);
  const isUser = message.role === 'user';

  const handleCopy = async () => {
    await navigator.clipboard.writeText(message.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Simple markdown-like formatting for bot messages
  const formatContent = (text: string) => {
    if (isUser) return text;
    
    // Process the text to handle bold, bullet points, etc.
    return text.split('\n').map((line, i) => {
      // Handle bullet points
      if (line.startsWith('- ') || line.startsWith('• ')) {
        return (
          <div key={i} className="flex gap-2 ml-1">
            <span className="text-[#1ED760] mt-0.5">•</span>
            <span>{formatInlineMarkdown(line.slice(2))}</span>
          </div>
        );
      }
      return <p key={i} className={line.trim() === '' ? 'h-2' : ''}>{formatInlineMarkdown(line)}</p>;
    });
  };

  // Handle inline markdown: **bold**
  const formatInlineMarkdown = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} className="font-semibold">{part.slice(2, -2)}</strong>;
      }
      return <span key={i}>{part}</span>;
    });
  };

  return (
    <div
      className={cn(
        'flex gap-2 mb-4 animate-in fade-in slide-in-from-bottom-2 duration-300',
        isUser ? 'flex-row-reverse' : 'flex-row'
      )}
    >
      {/* Avatar */}
      {!isUser && (
        <div className="w-7 h-7 rounded-full bg-[#1ED760] flex items-center justify-center flex-shrink-0">
          <span className="text-xs font-bold text-black">AI</span>
        </div>
      )}

      {/* Bubble */}
      <div className="relative group max-w-[85%]">
        <div
          className={cn(
            'px-4 py-2.5 text-sm leading-relaxed',
            isUser
              ? 'bg-[#1ED760] text-black rounded-2xl rounded-tr-sm font-medium'
              : 'bg-[#f3f4f6] text-gray-800 rounded-2xl rounded-tl-sm'
          )}
        >
          {formatContent(message.content)}
        </div>

        {/* Copy button for bot messages */}
        {!isUser && (
          <button
            onClick={handleCopy}
            className="absolute -bottom-6 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-gray-500 hover:text-gray-300 flex items-center gap-1 text-xs"
          >
            {copied ? (
              <><Check size={12} /> Copied</>
            ) : (
              <><Copy size={12} /> Copy</>
            )}
          </button>
        )}

        {/* Timestamp */}
        <span
          className={cn(
            'text-[10px] text-gray-500 mt-1 block',
            isUser ? 'text-right' : 'text-left'
          )}
        >
          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </span>
      </div>
    </div>
  );
};

export default MessageBubble;
