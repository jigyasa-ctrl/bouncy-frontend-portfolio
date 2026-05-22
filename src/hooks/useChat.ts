import { useState, useCallback, useRef, useEffect } from 'react';
import { Message } from '@/components/ChatBot/MessageBubble';

interface UseChatReturn {
  messages: Message[];
  isLoading: boolean;
  error: string | null;
  sendMessage: (text: string) => Promise<void>;
  clearMessages: () => void;
  messagesEndRef: React.RefObject<HTMLDivElement>;
}

export function useChat(): UseChatReturn {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content: "Hi! 👋 I'm Jigyasa's AI assistant. Ask me about her experience, skills, projects, or availability!",
      timestamp: new Date(),
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null!);

  const scrollToBottom = useCallback(() => {
    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading, scrollToBottom]);

  const sendMessage = useCallback(async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: text.trim(),
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    setError(null);

    try {
      // Build history from existing messages (excluding welcome)
      const history = messages
        .filter(m => m.id !== 'welcome')
        .slice(-6)
        .map(m => ({ role: m.role, content: m.content }));

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text.trim(),
          history,
        }),
      });

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        throw new Error(errData.error || `Request failed (${response.status})`);
      }

      const data = await response.json();

      const botMessage: Message = {
        id: `bot-${Date.now()}`,
        role: 'assistant',
        content: data.reply,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Something went wrong';
      setError(errorMessage);
      
      const errorBotMessage: Message = {
        id: `error-${Date.now()}`,
        role: 'assistant',
        content: "Sorry, I'm having trouble connecting right now. Please try again in a moment or use the contact form to reach Jigyasa directly!",
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorBotMessage]);
    } finally {
      setIsLoading(false);
    }
  }, [isLoading, messages, scrollToBottom]);

  const clearMessages = useCallback(() => {
    setMessages([
      {
        id: 'welcome',
        role: 'assistant',
        content: "Hi! 👋 I'm Jigyasa's AI assistant. Ask me about her experience, skills, projects, or availability!",
        timestamp: new Date(),
      },
    ]);
    setError(null);
  }, []);

  return { messages, isLoading, error, sendMessage, clearMessages, messagesEndRef };
}
