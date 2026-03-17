import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import messageRoutes from "./routes/messageRoutes.js";
import { startScheduler } from "./cron/scheduler.js";

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// Debug middleware


// Mount router
app.use("/api/messages", messageRoutes);

startScheduler();

export default app;