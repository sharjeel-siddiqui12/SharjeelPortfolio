export interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string[];
  technologies: string[];
}

export interface Education {
  id: number;
  degree: string;
  institution: string;
  location: string;
  duration: string;
  description?: string;
  grade?: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  image?: string;
  screenshots?: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface Skill {
  name: string;
  icon?: string;
  level?: number; // 0-100
}

export interface SkillCategory {
  id: number;
  title: string;
  description: string;
  skills: Skill[];
  icon?: string;
}

export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description?: string;
  credentialUrl?: string;
  image?: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface ContactInfo {
  email: string;
  phone?: string;
  location: string;
  socialLinks: SocialLink[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface NavItem {
  name: string;
  link: string;
}
