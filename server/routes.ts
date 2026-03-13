import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post(api.enquiries.create.path, async (req, res) => {
    try {
      const input = api.enquiries.create.input.parse(req.body);
      const enquiry = await storage.createEnquiry(input);
      res.status(201).json({
        id: enquiry.id,
        message: "Thank you for your enquiry. We will be in touch shortly.",
      });
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0]?.message ?? "Validation error",
          field: err.errors[0]?.path.join("."),
        });
      }
      console.error("Error creating enquiry:", err);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  app.get(api.enquiries.list.path, async (_req, res) => {
    try {
      const allEnquiries = await storage.getEnquiries();
      res.json(allEnquiries);
    } catch (err) {
      console.error("Error fetching enquiries:", err);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  return httpServer;
}
