import { pgTable, text, serial, timestamp, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// === TABLE DEFINITIONS ===

export const enquiries = pgTable("enquiries", {
  id: serial("id").primaryKey(),
  coupleNames: text("couple_names").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  ceremonyDate: text("ceremony_date"), // Keep as text to be flexible with input formats
  ceremonyLocation: text("ceremony_location"),
  ceremonyType: text("ceremony_type"), // Wedding, Elopement, Registry, etc.
  message: text("message"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const noimSubmissions = pgTable("noim_submissions", {
  id: serial("id").primaryKey(),
  party1Name: text("party1_name").notNull(),
  party2Name: text("party2_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  proposedDate: text("proposed_date"),
  placeOfMarriage: text("place_of_marriage"),
  // Store the rest of the detailed NOIM form data as JSON to be flexible
  formData: jsonb("form_data"), 
  createdAt: timestamp("created_at").defaultNow(),
});

// === SCHEMAS ===

export const insertEnquirySchema = createInsertSchema(enquiries).omit({ 
  id: true, 
  createdAt: true 
});

export const insertNoimSchema = createInsertSchema(noimSubmissions).omit({ 
  id: true, 
  createdAt: true 
});

// === TYPES ===

export type Enquiry = typeof enquiries.$inferSelect;
export type InsertEnquiry = z.infer<typeof insertEnquirySchema>;

export type NoimSubmission = typeof noimSubmissions.$inferSelect;
export type InsertNoimSubmission = z.infer<typeof insertNoimSchema>;

// === API CONTRACT TYPES ===

export type CreateEnquiryRequest = InsertEnquiry;
export type CreateNoimRequest = InsertNoimSubmission;
