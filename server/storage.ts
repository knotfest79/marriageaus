import { 
  enquiries, noimSubmissions,
  type InsertEnquiry, type Enquiry,
  type InsertNoimSubmission, type NoimSubmission
} from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  // Enquiries
  createEnquiry(enquiry: InsertEnquiry): Promise<Enquiry>;
  getEnquiries(): Promise<Enquiry[]>; // Minimal admin support
  
  // NOIM Submissions
  createNoimSubmission(submission: InsertNoimSubmission): Promise<NoimSubmission>;
  getNoimSubmissions(): Promise<NoimSubmission[]>;
}

export class DatabaseStorage implements IStorage {
  async createEnquiry(insertEnquiry: InsertEnquiry): Promise<Enquiry> {
    const [enquiry] = await db
      .insert(enquiries)
      .values(insertEnquiry)
      .returning();
    return enquiry;
  }

  async getEnquiries(): Promise<Enquiry[]> {
    return await db.select().from(enquiries);
  }

  async createNoimSubmission(insertSubmission: InsertNoimSubmission): Promise<NoimSubmission> {
    const [submission] = await db
      .insert(noimSubmissions)
      .values(insertSubmission)
      .returning();
    return submission;
  }

  async getNoimSubmissions(): Promise<NoimSubmission[]> {
    return await db.select().from(noimSubmissions);
  }
}

export const storage = new DatabaseStorage();
