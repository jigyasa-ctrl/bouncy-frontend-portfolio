import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Trash2, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useChat } from '@/hooks/useChat';
import MessageBubble from './MessageBubble';
import TypingIndicator from './TypingIndicator';

const SUGGESTED_QUESTIONS = [
  "What's her tech stack?",
  "Tell me about her projects",
  "What's her experience?",
  "Is she available for hire?",
];

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [hasNewMessage, setHasNewMessage] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const { messages, isLoading, sendMessage, clearMessages, messagesEndRef } = useChat();

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  // Show notification dot when bot responds while chat is closed
  useEffect(() => {
    if (!isOpen && messages.length > 1) {
      setHasNewMessage(true);
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;
    const text = inputValue;
    setInputValue('');
    await sendMessage(text);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleSuggestedQuestion = async (question: string) => {
    await sendMessage(question);
  };

  const toggleChat = () => {
    setIsOpen(prev => !prev);
    setHasNewMessage(false);
  };

  return (
    <div className="fixed bottom-[100px] right-6 z-[60] font-sans">
      {/* Chat Panel */}
      <div
        className={cn(
          'absolute bottom-16 right-0 w-[380px] h-[520px] flex flex-col',
          'bg-white border border-gray-200 rounded-2xl shadow-2xl shadow-black/20',
          'transition-all duration-300 origin-bottom-right',
          'max-sm:w-[calc(100vw-2rem)] max-sm:h-[calc(100vh-200px)] max-sm:right-[-0.5rem]',
          isOpen
            ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 scale-95 translate-y-4 pointer-events-none'
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 bg-white rounded-t-2xl">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#1ED760] to-[#0D904B] flex items-center justify-center">
              <span className="text-xs font-bold text-black">AI</span>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Jigyasa's AI Assistant</h3>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-[#1ED760] rounded-full animate-pulse" />
                <span className="text-[11px] text-gray-400">Online</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={clearMessages}
              className="p-1.5 rounded-full hover:bg-gray-100 transition-colors text-gray-400 hover:text-gray-600"
              title="Clear chat"
            >
              <Trash2 size={14} />
            </button>
            <button
              onClick={toggleChat}
              className="p-1.5 rounded-full hover:bg-gray-100 transition-colors text-gray-400 hover:text-gray-600"
              title="Minimize"
            >
              <Minus size={14} />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-1 scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent">
          {messages.map(message => (
            <MessageBubble key={message.id} message={message} />
          ))}
          {isLoading && <TypingIndicator />}
          <div ref={messagesEndRef} />
        </div>

        {/* Suggested Questions — only show when just the welcome message exists */}
        {messages.length === 1 && (
          <div className="px-4 pb-2 flex flex-wrap gap-1.5">
            {SUGGESTED_QUESTIONS.map((q, i) => (
              <button
                key={i}
                onClick={() => handleSuggestedQuestion(q)}
                className="text-xs px-3 py-1.5 rounded-full border border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-[#1ED760] hover:border-[#1ED760]/30 transition-all duration-200"
              >
                {q}
              </button>
            ))}
          </div>
        )}

        {/* Input */}
        <div className="px-4 py-3 border-t border-gray-200 bg-white rounded-b-2xl">
          <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2 focus-within:ring-2 focus-within:ring-[#1ED760]/50 transition-all">
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask me anything about Jigyasa..."
              className="flex-1 bg-transparent text-sm text-gray-900 placeholder:text-gray-500 outline-none"
              disabled={isLoading}
              maxLength={500}
            />
            <button
              onClick={handleSend}
              disabled={!inputValue.trim() || isLoading}
              className={cn(
                'p-1.5 rounded-full transition-all duration-200',
                inputValue.trim() && !isLoading
                  ? 'bg-[#1ED760] text-black hover:bg-[#1db954] scale-100'
                  : 'text-gray-500 scale-90'
              )}
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <button
        onClick={toggleChat}
        className={cn(
          'w-14 h-14 rounded-full flex items-center justify-center',
          'shadow-lg shadow-black/40 transition-all duration-300',
          'hover:scale-110 active:scale-95',
          isOpen
            ? 'bg-[#282828] text-white rotate-0'
            : 'bg-gradient-to-br from-[#1ED760] to-[#0D904B] text-black'
        )}
      >
        {isOpen ? (
          <X size={24} />
        ) : (
          <div className="relative">
            <MessageCircle size={24} />
            {hasNewMessage && (
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-[#121212] animate-pulse" />
            )}
          </div>
        )}
      </button>

      {/* Subtle pulse ring when closed */}
      {!isOpen && (
        <div className="absolute inset-0 w-14 h-14 rounded-full bg-[#1ED760]/20 animate-ping pointer-events-none" style={{ animationDuration: '3s' }} />
      )}
    </div>
  );
};

export default ChatWidget;
