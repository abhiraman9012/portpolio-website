import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import { contactFormSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission route
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate form data
      const validatedData = contactFormSchema.parse(req.body);
      
      // Store contact form submission
      const savedContact = await storage.createContactSubmission(validatedData);
      
      res.status(201).json({ 
        message: "Message received successfully",
        id: savedContact.id
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          message: "Invalid form data", 
          errors: error.errors 
        });
      } else {
        console.error("Error saving contact form:", error);
        res.status(500).json({ 
          message: "Failed to process your message. Please try again." 
        });
      }
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
