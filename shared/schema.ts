import { pgTable, text, serial, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const enquiries = pgTable("enquiries", {
  id: serial("id").primaryKey(),
  fullName: text("full_name").notNull(),
  phone: text("phone").notNull(),
  email: text("email").notNull(),
  propertyAddress: text("property_address").notNull(),
  serviceRequired: text("service_required").notNull(),
  isEmergency: boolean("is_emergency").default(false),
  preferredContact: text("preferred_contact").notNull().default("phone"),
  message: text("message"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertEnquirySchema = createInsertSchema(enquiries).omit({
  id: true,
  createdAt: true,
});

export type InsertEnquiry = z.infer<typeof insertEnquirySchema>;
export type Enquiry = typeof enquiries.$inferSelect;

export type CreateEnquiryRequest = InsertEnquiry;
export type EnquiryResponse = Enquiry;
export type EnquiriesListResponse = Enquiry[];
