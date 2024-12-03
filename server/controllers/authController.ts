import { Request, Response, NextFunction } from "express";
import bcrypt from "bcryptjs";
import User from "../models/User";
import { generateToken } from "../utils/jwtUtils";

interface LoginRequestBody {
    email: string;
    password: string;
}

export const login = async (req: Request<{}, {}, LoginRequestBody>, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { email, password } = req.body;

        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            res.status(401).json({ message: "Invalid credentials" });
            return;
        }

        // Verify password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            res.status(401).json({ message: "Invalid credentials" });
            return;
        }

        // Generate JWT
        const token = generateToken(user._id.toString());

        res.status(200).json({ token, user: { id: user._id, name: user.name, email: user.email } });
    } catch (error) {
        next(error);
    }
};

export const logout = (req: Request, res: Response): void => {
    res.status(200).json({ message: "Logged out successfully" });
};

export const isAuthenticated = (req: Request, res: Response): void => {
    res.status(200).json({ message: "User is authenticated", user: req.user });
};
