import express, { Request, Response, NextFunction, Application } from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import authRoutes from "./routes/authRoutes";
import { errorHandler } from "./middleware/errorMiddleware";

// Load environment variables
dotenv.config();

// Initialize app
const app: Application = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to database
import connectDB from "./config/db";
connectDB();

// Routes
app.use("/api/auth", authRoutes);

// Placeholder for other APIs
app.use("/api/kanban", (req: Request, res: Response) => res.json({ message: "Kanban placeholder" }));
app.use("/api/messaging", (req: Request, res: Response) => res.json({ message: "Messaging placeholder" }));
app.use("/api/video", (req: Request, res: Response) => res.json({ message: "Video placeholder" }));

// Error middleware
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
