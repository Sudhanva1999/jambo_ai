"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const errorMiddleware_1 = require("./middleware/errorMiddleware");
// Load environment variables
dotenv_1.default.config();
// Initialize app
const app = (0, express_1.default)();
// Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Connect to database
const db_1 = __importDefault(require("./config/db"));
(0, db_1.default)();
// Routes
app.use("/api/auth", authRoutes_1.default);
// Placeholder for other APIs
app.use("/api/kanban", (req, res) => res.json({ message: "Kanban placeholder" }));
app.use("/api/messaging", (req, res) => res.json({ message: "Messaging placeholder" }));
app.use("/api/video", (req, res) => res.json({ message: "Video placeholder" }));
// Error middleware
app.use(errorMiddleware_1.errorHandler);
// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
