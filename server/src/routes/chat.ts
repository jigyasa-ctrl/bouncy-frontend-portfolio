import { Router, Request, Response } from 'express';
import { queryRAG, ChatMessage } from '../rag.js';

const router = Router();

interface ChatRequest {
  message: string;
  history?: ChatMessage[];
}

router.post('/chat', async (req: Request, res: Response) => {
  try {
    const { message, history } = req.body as ChatRequest;

    // Validate input
    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Message is required and must be a string' });
    }

    if (message.length > 500) {
      return res.status(400).json({ error: 'Message must be under 500 characters' });
    }

    if (message.trim().length === 0) {
      return res.status(400).json({ error: 'Message cannot be empty' });
    }

    // Validate history if provided
    if (history && !Array.isArray(history)) {
      return res.status(400).json({ error: 'History must be an array' });
    }

    const result = await queryRAG(message.trim(), history || []);

    return res.json({
      reply: result.reply,
      sources: result.sources,
    });
  } catch (error) {
    console.error('Chat error:', error);
    return res.status(500).json({
      error: 'Something went wrong. Please try again.'
    });
  }
});

export default router;
