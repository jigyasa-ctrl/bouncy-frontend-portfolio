import express from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import { initializeRAG } from './rag.js';
import chatRouter from './routes/chat.js';

dotenv.config();

const app = express();
const PORT = parseInt(process.env.PORT || '3001', 10);

// Middleware
app.use(cors({
  origin: ['http://localhost:8080', "http://localhost:8080",
  "https://jigyasaupadhyay60.netlify.app"],
  methods: ['POST'],
  allowedHeaders: ['Content-Type'],
}));

app.use(express.json());

// Rate limiting
const limiter = rateLimit({
  windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS || '60000', 10),
  max: parseInt(process.env.RATE_LIMIT_MAX || '20', 10),
  message: { error: 'Too many requests. Please wait a moment before trying again.' },
  standardHeaders: true,
  legacyHeaders: false,
});

app.use('/api', limiter);

// Routes
app.use('/api', chatRouter);

// Health check
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Initialize RAG and start server
async function start() {
  try {
    console.log('🚀 Starting Portfolio Chatbot Server...');
    await initializeRAG();

    app.listen(PORT, () => {
      console.log(`✅ Server running on http://localhost:${PORT}`);
      console.log(`📡 Chat endpoint: POST http://localhost:${PORT}/api/chat`);
    });
  } catch (error) {
    console.error('❌ Failed to start server:', error);
    process.exit(1);
  }
}

start();
