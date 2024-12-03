import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import User from "../models/User";

export interface AuthRequest extends Request {
    headers: {
        authorization?: string;
    };
    user?: {
        id: string;
        name: string;
        email: string;
    };
}

export const verifyToken = async (req: AuthRequest, res: Response, next: NextFunction): Promise<void> => {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
        res.status(401).json({ message: "No token provided" });
        return;
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;
        const user = await User.findById(decoded.id).select("-password");
        if (!user) {
            res.status(404).json({ message: "User not found" });
            return;
        }
        req.user = { id: user._id.toString(), name: user.name, email: user.email };
        next();
    } catch (error) {
        res.status(401).json({ message: "Invalid token" });
    }
};
