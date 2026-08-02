/**
 * TypeScript Types and Interfaces
 */

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  author: string;
  date: Date;
  updatedDate?: Date;
  image: string;
  category: string;
  tags: string[];
  content: string;
  readingTime: number;
}

export interface StudyGuide {
  id: string;
  slug: string;
  title: string;
  book: string;
  chapter: number;
  description: string;
  lessons: Lesson[];
  resources: Resource[];
}

export interface Lesson {
  id: string;
  title: string;
  content: string;
  verse: string;
  keyPoints: string[];
}

export interface Resource {
  id: string;
  title: string;
  url: string;
  type: 'book' | 'video' | 'article' | 'podcast';
}

export interface BibleVerse {
  book: string;
  chapter: number;
  verse: number;
  text: string;
  translation: string;
}

export interface StudySession {
  id: string;
  userId: string;
  bookName: string;
  chapter: number;
  verse: number;
  notes: string;
  highlights: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  plan: 'free' | 'pro' | 'premium';
  createdAt: Date;
  lastLogin: Date;
}

export interface PricingPlan {
  name: string;
  price: number;
  description: string;
  features: string[];
  highlighted?: boolean;
  cta: {
    text: string;
    href: string;
  };
}

export type APIResponse<T> = {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
};

export interface PageMeta {
  title: string;
  description: string;
  image?: string;
  url?: string;
}
