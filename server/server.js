// server.js
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import connectDB from "./configs/db.js";
import { clerkMiddleware } from "@clerk/express";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(clerkMiddleware());

// Gọi kết nối DB
await connectDB();

// Route test
app.get("/", (req, res) => {
  res.send("API đang hoạt động 🚀");
});

// Khi chạy local -> listen; khi deploy vercel -> export
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
}

export default app;
