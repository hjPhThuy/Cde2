// server.js
import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import connectDB from './configs/db.js';
import { clerkMiddleware } from '@clerk/express';
import clerkWebhooks from './controllers/clerkWebhooks.js';

// Khởi tạo app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(clerkMiddleware());

// Routes
app.use('/api/clerk', clerkWebhooks);

app.get('/', (req, res) => {
  res.send('API đang hoạt động');
});

// === CHỈ XUẤT APP - KHÔNG DÙNG app.listen() ===
export default app;

// === KẾT NỐI DB KHI VERCEL GỌI FUNCTION ===
app.use(async (req, res, next) => {
  if (!global.dbConnected) {
    await connectDB();
    global.dbConnected = true;
  }
  next();
});