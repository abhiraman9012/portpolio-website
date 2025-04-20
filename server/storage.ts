import { 
  users, 
  type User, 
  type InsertUser, 
  type ContactFormData, 
  type ContactSubmission, 
  type IStorageWithContact 
} from "@shared/schema";

// Modified interface with contact form CRUD methods
export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
}

export class MemStorage implements IStorageWithContact {
  private users: Map<number, User>;
  private contactSubmissions: Map<number, ContactSubmission>;
  currentId: number;
  private contactId: number;

  constructor() {
    this.users = new Map();
    this.contactSubmissions = new Map();
    this.currentId = 1;
    this.contactId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Contact form methods
  async createContactSubmission(data: ContactFormData): Promise<ContactSubmission> {
    const id = this.contactId++;
    const submission: ContactSubmission = {
      id,
      name: data.name,
      email: data.email,
      subject: data.subject || null,
      message: data.message,
      createdAt: new Date()
    };
    
    this.contactSubmissions.set(id, submission);
    return submission;
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return Array.from(this.contactSubmissions.values());
  }

  async getContactSubmissionById(id: number): Promise<ContactSubmission | undefined> {
    return this.contactSubmissions.get(id);
  }
}

export const storage = new MemStorage();
