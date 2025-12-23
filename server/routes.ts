import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  // Enquiries Endpoint
  app.post(api.enquiries.create.path, async (req, res) => {
    try {
      const input = api.enquiries.create.input.parse(req.body);
      const enquiry = await storage.createEnquiry(input);
      res.status(201).json(enquiry);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      // Log error but don't expose internal details
      console.error("Enquiry creation error:", err);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // NOIM Submission Endpoint
  app.post(api.noim.create.path, async (req, res) => {
    try {
      const input = api.noim.create.input.parse(req.body);
      const submission = await storage.createNoimSubmission(input);
      res.status(201).json(submission);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      console.error("NOIM submission error:", err);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  return httpServer;
}
