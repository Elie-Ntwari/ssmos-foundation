import apiClient from './api';
import {
  Service,
  NewsArticle,
  BlogPost,
  InstitutionalPage,
  TeamMember,
  HomePageSection,
  InterventionAxis,
  TeamPage,
  ApiResponse,
} from '@/types/api';

export const contentService = {
  // Services
  async getServices(params?: { category?: string; is_active?: boolean }): Promise<ApiResponse<Service[]>> {
    const response = await apiClient.get<ApiResponse<Service[]>>('/content/services/', { 
      params: params || {}
    });
    return response.data;
  },

  async getService(id: number): Promise<ApiResponse<Service>> {
    const response = await apiClient.get<ApiResponse<Service>>(`/content/services/${id}/`);
    return response.data;
  },

  // Actualités
  async getNews(params?: {
    category?: string;
    status?: string;
    search?: string;
  }): Promise<ApiResponse<NewsArticle[]>> {
    const response = await apiClient.get<ApiResponse<NewsArticle[]>>('/content/news/', { 
      params: params || {}
    });
    return response.data;
  },

  async getNewsArticle(id: number): Promise<ApiResponse<NewsArticle>> {
    const response = await apiClient.get<ApiResponse<NewsArticle>>(`/content/news/${id}/`);
    return response.data;
  },

  // Blog
  async getBlogPosts(params?: {
    category?: string;
    status?: string;
    search?: string;
  }): Promise<ApiResponse<BlogPost[]>> {
    const response = await apiClient.get<ApiResponse<BlogPost[]>>('/content/blog/', { 
      params: params || {}
    });
    return response.data;
  },

  async getBlogPost(id: number): Promise<ApiResponse<BlogPost>> {
    const response = await apiClient.get<ApiResponse<BlogPost>>(`/content/blog/${id}/`);
    return response.data;
  },

  // Pages institutionnelles
  async getPages(): Promise<ApiResponse<InstitutionalPage[]>> {
    const response = await apiClient.get<ApiResponse<InstitutionalPage[]>>('/content/pages/', {
      params: { _t: Date.now() } // Éviter le cache
    });
    return response.data;
  },

  async getPage(slug: string): Promise<ApiResponse<InstitutionalPage>> {
    const response = await apiClient.get<ApiResponse<InstitutionalPage>>(`/content/pages/${slug}/`);
    return response.data;
  },

  // Équipe
  async getTeamMembers(): Promise<ApiResponse<TeamMember[]>> {
    const response = await apiClient.get<ApiResponse<TeamMember[]>>('/content/team/');
    return response.data;
  },

  async getTeamMember(id: number): Promise<ApiResponse<TeamMember>> {
    const response = await apiClient.get<ApiResponse<TeamMember>>(`/content/team/${id}/`);
    return response.data;
  },

  // Sections de la page d'accueil
  async getHomeSections(): Promise<ApiResponse<HomePageSection[]>> {
    const response = await apiClient.get<ApiResponse<HomePageSection[]>>('/content/home-sections/', {
      params: { _t: Date.now() } // Éviter le cache
    });
    return response.data;
  },

  async getHomeSection(sectionKey: string): Promise<ApiResponse<HomePageSection>> {
    const response = await apiClient.get<ApiResponse<HomePageSection>>(`/content/home-sections/${sectionKey}/`);
    return response.data;
  },

  // Axes d'intervention
  async getInterventionAxes(): Promise<ApiResponse<InterventionAxis[]>> {
    const response = await apiClient.get<ApiResponse<InterventionAxis[]>>('/content/intervention-axes/', {
      params: { is_active: true, _t: Date.now() },
    });
    return response.data;
  },

  async getInterventionAxis(id: number): Promise<ApiResponse<InterventionAxis>> {
    const response = await apiClient.get<ApiResponse<InterventionAxis>>(`/content/intervention-axes/${id}/`);
    return response.data;
  },

  // Page équipe
  async getTeamPage(): Promise<ApiResponse<TeamPage[]>> {
    const response = await apiClient.get<ApiResponse<TeamPage[]>>('/content/team-page/', {
      params: { _t: Date.now() } // Éviter le cache
    });
    return response.data;
  },
};
