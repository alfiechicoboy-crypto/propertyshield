import { db } from "./db";
import { enquiries } from "@shared/schema";
import type { InsertEnquiry, Enquiry } from "@shared/schema";

export interface IStorage {
  createEnquiry(enquiry: InsertEnquiry): Promise<Enquiry>;
  getEnquiries(): Promise<Enquiry[]>;
}

export class DatabaseStorage implements IStorage {
  async createEnquiry(enquiry: InsertEnquiry): Promise<Enquiry> {
    const [created] = await db.insert(enquiries).values(enquiry).returning();
    return created;
  }

  async getEnquiries(): Promise<Enquiry[]> {
    return await db.select().from(enquiries);
  }
}

export const storage = new DatabaseStorage();
