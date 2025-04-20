export interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

export interface Experience {
  period: string;
  company: string;
  role: string;
  location: string;
  achievements: string[];
  skills: string[];
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  github: string;
  demo: string;
}

export interface Skill {
  name: string;
  icon: React.ReactNode;
  proficiency: number;
}

export interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
}

export interface Certification {
  name: string;
  issuer: string;
  icon: React.ReactNode;
}
