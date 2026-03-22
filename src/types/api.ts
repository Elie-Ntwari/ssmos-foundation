// Types pour les réponses API
export interface ApiResponse<T> {
  error: boolean;
  message: string;
  data: T;
}

export interface ApiError {
  error: true;
  message: string;
  details?: Record<string, any>;
}

// Types multilingues
export interface MultilingualContent {
  fr: string;
  en?: string;
  ln?: string;
  sw?: string;
}

// Types pour les modèles
export interface Service {
  id: number;
  title: MultilingualContent;
  description: MultilingualContent;
  category: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface NewsArticle {
  id: number;
  title: MultilingualContent;
  content: MultilingualContent;
  excerpt: MultilingualContent;
  image?: string;
  category: string;
  status: 'draft' | 'published';
  published_at?: string;
  created_at: string;
  author: number;
  author_name: string;
}

export interface BlogPost {
  id: number;
  title: MultilingualContent;
  content: MultilingualContent;
  excerpt: MultilingualContent;
  image?: string;
  category: string;
  tags: string[];
  status: 'draft' | 'published';
  published_at?: string;
  created_at: string;
  author: number;
  author_name: string;
}

export interface InstitutionalPage {
  id: number;
  slug: string;
  title: MultilingualContent;
  content: MultilingualContent;
  last_modified: string;
  modified_by: number;
}

export interface TeamMember {
  id: number;
  name: string;
  role: MultilingualContent;
  bio: MultilingualContent;
  expertise: string[];
  image?: string;
  is_manager: boolean;
  display_order: number;
  created_at: string;
}

export interface ContactMessage {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  is_read: boolean;
  received_at: string;
}

export interface User {
  id: number;
  email: string;
  name: string;
  role: 'admin' | 'editor' | 'viewer';
  is_active: boolean;
  date_joined: string;
  last_login?: string;
}

export interface LoginResponse {
  user: User;
  tokens: {
    access: string;
    refresh: string;
  };
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface HomePageSection {
  id: number;
  section_key: string;
  content: MultilingualContent;
  last_modified: string;
  modified_by?: number;
}

export interface InterventionAxis {
  id: number;
  icon: string;
  image?: string;
  title: MultilingualContent;
  description: MultilingualContent;
  order: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface TeamPage {
  id: number;
  title: MultilingualContent;
  subtitle: MultilingualContent;
  description: MultilingualContent;
  last_modified: string;
  modified_by?: number;
}