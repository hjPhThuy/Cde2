// server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./configs/db.js').default; // nếu db.js dùng export default
const { clerkMiddleware } = require('@clerk/express');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(clerkMiddleware());

// Kết nối DB chỉ 1 lần
let dbConnected = false;
app.use(async (req, res, next) => {
  if (!dbConnected) {
    try {
      await connectDB();
      dbConnected = true;
      console.log('Kết nối database thành công');
    } catch (err) {
      console.error('DB Error:', err);
    }
  }
  next();
});

// Routes


app.get('/', (req, res) => {
  res.send('API đang hoạt động');
});

// XUẤT CHO VERCEL
module.exports = app;