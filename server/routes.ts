import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { 
  insertContactRequestSchema, 
  signupSchema, 
  loginSchema, 
  forgotPasswordSchema, 
  resetPasswordSchema 
} from "@shared/schema";
import { 
  hashPassword, 
  verifyPassword, 
  generateToken, 
  generateJWT, 
  authenticateUser, 
  googleAuthCallback 
} from "./auth";
import { z } from "zod";
import crypto from "crypto";
import nodemailer from "nodemailer";

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;

export async function registerRoutes(app: Express): Promise<Server> {
  // Authentication routes
  app.post("/api/auth/signup", async (req, res) => {
    try {
      const validatedData = signupSchema.parse(req.body);
      
      // Check if user already exists
      const existingUser = await storage.getUserByEmail(validatedData.email);
      if (existingUser) {
        return res.status(400).json({ error: "User already exists with this email" });
      }

      // Hash password and create user
      const hashedPassword = await hashPassword(validatedData.password);
      const user = await storage.createUser({
        email: validatedData.email,
        firstName: validatedData.firstName,
        lastName: validatedData.lastName,
        password: hashedPassword,
      });

      // Generate JWT token
      const token = generateJWT(user.id);
      
      res.json({
        success: true,
        user: {
          id: user.id,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
        },
        token,
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid form data", issues: error.issues });
      } else {
        console.error("Signup error:", error);
        res.status(500).json({ error: "Internal server error" });
      }
    }
  });

  app.post("/api/auth/login", async (req, res) => {
    try {
      const validatedData = loginSchema.parse(req.body);
      
      // Find user by email
      const user = await storage.getUserByEmail(validatedData.email);
      if (!user || !user.password) {
        return res.status(401).json({ error: "Invalid email or password" });
      }

      // Verify password
      const isValid = await verifyPassword(validatedData.password, user.password);
      if (!isValid) {
        return res.status(401).json({ error: "Invalid email or password" });
      }

      // Generate JWT token
      const token = generateJWT(user.id);
      
      res.json({
        success: true,
        user: {
          id: user.id,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
        },
        token,
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid form data", issues: error.issues });
      } else {
        console.error("Login error:", error);
        res.status(500).json({ error: "Internal server error" });
      }
    }
  });

  app.post("/api/auth/forgot-password", async (req, res) => {
    try {
      const validatedData = forgotPasswordSchema.parse(req.body);
      
      const user = await storage.getUserByEmail(validatedData.email);
      if (!user) {
        // Don't reveal if email exists
        return res.json({ success: true, message: "If an account exists, a reset email has been sent" });
      }

      // Generate reset token
      const resetToken = generateToken();
      const resetTokenExpiry = new Date(Date.now() + 3600000); // 1 hour

      await storage.updateUser(user.id, {
        resetToken,
        resetTokenExpiry,
      });

      // Here you would send an email with the reset link
      // For demo purposes, we'll just return success
      console.log(`Reset token for ${user.email}: ${resetToken}`);
      
      res.json({ success: true, message: "If an account exists, a reset email has been sent" });
    } catch (error) {
      console.error("Forgot password error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  app.post("/api/auth/reset-password", async (req, res) => {
    try {
      const validatedData = resetPasswordSchema.parse(req.body);
      
      // Find user by reset token
      const users = await storage.getContactRequests(); // This would need a proper query
      // For now, we'll simulate token validation
      
      const hashedPassword = await hashPassword(validatedData.password);
      
      // Update password and clear reset token
      // This would need proper implementation with token lookup
      
      res.json({ success: true, message: "Password reset successfully" });
    } catch (error) {
      console.error("Reset password error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // Google OAuth routes
  app.get("/api/auth/google", (req, res) => {
    if (!GOOGLE_CLIENT_ID) {
      return res.status(500).json({ error: "Google OAuth not configured" });
    }
    
    const googleAuthUrl = `https://accounts.google.com/oauth/authorize?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${encodeURIComponent(
      `${process.env.BASE_URL || 'http://localhost:5000'}/api/auth/google/callback`
    )}&scope=email%20profile&response_type=code`;
    
    res.redirect(googleAuthUrl);
  });

  app.get("/api/auth/google/callback", async (req, res) => {
    try {
      const { code } = req.query;
      if (!code) {
        return res.redirect("/login?error=google_auth_failed");
      }

      const user = await googleAuthCallback(code as string);
      if (!user) {
        return res.redirect("/login?error=google_auth_failed");
      }

      const token = generateJWT(user.id);
      
      // Redirect to dashboard with token
      res.redirect(`/dashboard?token=${token}`);
    } catch (error) {
      console.error("Google callback error:", error);
      res.redirect("/login?error=google_auth_failed");
    }
  });

  // Protected user routes
  app.get("/api/auth/me", authenticateUser, (req, res) => {
    const user = req.user!;
    res.json({
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
    });
  });

  app.post("/api/auth/logout", authenticateUser, async (req, res) => {
    // In a session-based system, you'd destroy the session here
    // For JWT, we just return success (client should delete token)
    res.json({ success: true, message: "Logged out successfully" });
  });

  // Subscription/Payment routes
  app.post("/api/subscription/create", authenticateUser, async (req, res) => {
    try {
      if (!STRIPE_SECRET_KEY) {
        return res.status(500).json({ error: "Payment system not configured" });
      }

      const user = req.user!;
      const { plan, paymentMethodId } = req.body;
      
      // Create subscription in database
      const subscription = await storage.createSubscription({
        userId: user.id,
        stripeCustomerId: null,
        stripeSubscriptionId: null,
        stripePriceId: plan,
        status: "active",
        currentPeriodStart: new Date(),
        currentPeriodEnd: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days
      });

      res.json({ success: true, subscription });
    } catch (error) {
      console.error("Subscription error:", error);
      res.status(500).json({ error: "Failed to create subscription" });
    }
  });

  app.get("/api/subscription", authenticateUser, async (req, res) => {
    try {
      const user = req.user!;
      const subscription = await storage.getSubscriptionByUserId(user.id);
      res.json({ subscription });
    } catch (error) {
      console.error("Get subscription error:", error);
      res.status(500).json({ error: "Failed to get subscription" });
    }
  });

  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactRequestSchema.parse(req.body);
      const contactRequest = await storage.createContactRequest(validatedData);
      res.json({ success: true, id: contactRequest.id });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid form data", issues: error.issues });
      } else {
        res.status(500).json({ error: "Internal server error" });
      }
    }
  });

  // Get all contact requests (for admin purposes)
  app.get("/api/contact-requests", authenticateUser, async (req, res) => {
    try {
      const requests = await storage.getContactRequests();
      res.json(requests);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
