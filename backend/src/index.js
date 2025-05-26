import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import { connectDB } from "./lib/db.js";
import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js";
import { app, server } from "./lib/socket.js";

dotenv.config();

app.use(express.json({ extended: true, limit: '10mb'}));
app.use(cookieParser());
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://chat-backend-z623.onrender.com",
      "https://bjn765vn-5173.inc1.devtunnels.ms"
    ],
    credentials: true,
  })
);
// Add at the top with other middleware
app.set("trust proxy", 1);

const port = process.env.PORT

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
server.listen(port, () => {
    console.log(`server is running on port: ${port}`);
    console.log(`http://localhost:${port}`); // Log the URL to the console
    connectDB();
})