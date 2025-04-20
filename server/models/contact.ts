import { ContactSubmission } from "@shared/schema";

// In-memory storage for contact form submissions
class ContactStorage {
  private submissions: Map<number, ContactSubmission>;
  private currentId: number;

  constructor() {
    this.submissions = new Map();
    this.currentId = 1;
  }

  async getAllSubmissions(): Promise<ContactSubmission[]> {
    return Array.from(this.submissions.values());
  }

  async getSubmissionById(id: number): Promise<ContactSubmission | undefined> {
    return this.submissions.get(id);
  }

  async createSubmission(submission: Omit<ContactSubmission, "id" | "createdAt">): Promise<ContactSubmission> {
    const id = this.currentId++;
    const createdAt = new Date();
    
    const newSubmission: ContactSubmission = {
      id,
      createdAt,
      ...submission
    };
    
    this.submissions.set(id, newSubmission);
    return newSubmission;
  }
}

export const contactStorage = new ContactStorage();
