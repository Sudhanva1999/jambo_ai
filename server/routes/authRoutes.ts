import { Router } from "express";
import { login, logout, isAuthenticated } from "../controllers/authController";
import { verifyToken } from "../middleware/authMiddleware";

const router: Router = Router();

// Auth Routes
router.post("/login", login);
router.post("/logout", logout);
router.get("/isAuthenticated", verifyToken, isAuthenticated);

export default router;
