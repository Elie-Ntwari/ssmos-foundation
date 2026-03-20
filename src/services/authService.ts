import axios from 'axios';
import { LoginCredentials, LoginResponse, ApiResponse, User } from '@/types/api';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api';

class AuthService {
  private getAccessToken(): string | null {
    return localStorage.getItem('access_token');
  }

  private getRefreshToken(): string | null {
    return localStorage.getItem('refresh_token');
  }

  private setTokens(access: string, refresh: string): void {
    localStorage.setItem('access_token', access);
    localStorage.setItem('refresh_token', refresh);
  }

  private clearTokens(): void {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('user');
  }

  async login(credentials: LoginCredentials): Promise<LoginResponse> {
    try {
      const response = await axios.post<ApiResponse<LoginResponse>>(
        `${API_BASE_URL}/auth/login/`,
        credentials
      );

      if (response.data.error === false && response.data.data) {
        const { user, tokens } = response.data.data;
        this.setTokens(tokens.access, tokens.refresh);
        localStorage.setItem('user', JSON.stringify(user));
        return { user, tokens };
      }

      throw new Error(response.data.message || 'Erreur de connexion');
    } catch (error: any) {
      if (error.response?.data?.message) {
        throw new Error(error.response.data.message);
      }
      throw new Error('Erreur de connexion au serveur');
    }
  }

  async refreshAccessToken(): Promise<string | null> {
    const refreshToken = this.getRefreshToken();
    if (!refreshToken) {
      return null;
    }

    try {
      const response = await axios.post<ApiResponse<{ access: string }>>(
        `${API_BASE_URL}/auth/refresh/`,
        {
          refresh: refreshToken,
        }
      );

      if (response.data.error === false && response.data.data?.access) {
        const newAccessToken = response.data.data.access;
        localStorage.setItem('access_token', newAccessToken);
        return newAccessToken;
      }
    } catch (error) {
      this.logout();
    }

    return null;
  }

  logout(): void {
    this.clearTokens();
    window.location.href = '/';
  }

  isAuthenticated(): boolean {
    return !!this.getAccessToken();
  }

  getStoredUser(): User | null {
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
  }

  getAccessTokenValue(): string | null {
    return this.getAccessToken();
  }
}

export const authService = new AuthService();
