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
    if (!db) {
      throw new Error("Database not configured");
    }
    const [enquiry] = await db
      .insert(enquiries)
      .values(insertEnquiry)
      .returning();
    return enquiry;
  }

  async getEnquiries(): Promise<Enquiry[]> {
    if (!db) {
      throw new Error("Database not configured");
    }
    return await db.select().from(enquiries);
  }

  async createNoimSubmission(insertSubmission: InsertNoimSubmission): Promise<NoimSubmission> {
    if (!db) {
      throw new Error("Database not configured");
    }
    const [submission] = await db
      .insert(noimSubmissions)
      .values(insertSubmission)
      .returning();
    return submission;
  }

  async getNoimSubmissions(): Promise<NoimSubmission[]> {
    if (!db) {
      throw new Error("Database not configured");
    }
    return await db.select().from(noimSubmissions);
  }
}

class MemoryStorage implements IStorage {
  private enquiriesStore: Enquiry[] = [];
  private noimStore: NoimSubmission[] = [];
  private enquiryId = 1;
  private noimId = 1;

  async createEnquiry(insertEnquiry: InsertEnquiry): Promise<Enquiry> {
    const enquiry: Enquiry = {
      id: this.enquiryId++,
      createdAt: new Date(),
      ...insertEnquiry,
    };
    this.enquiriesStore.push(enquiry);
    return enquiry;
  }

  async getEnquiries(): Promise<Enquiry[]> {
    return [...this.enquiriesStore];
  }

  async createNoimSubmission(
    insertSubmission: InsertNoimSubmission
  ): Promise<NoimSubmission> {
    const submission: NoimSubmission = {
      id: this.noimId++,
      createdAt: new Date(),
      ...insertSubmission,
    };
    this.noimStore.push(submission);
    return submission;
  }

  async getNoimSubmissions(): Promise<NoimSubmission[]> {
    return [...this.noimStore];
  }
}

export const storage: IStorage = db ? new DatabaseStorage() : new MemoryStorage();
