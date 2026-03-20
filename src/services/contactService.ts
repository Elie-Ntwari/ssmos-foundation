import apiClient from './api';
import { ContactMessage, ApiResponse } from '@/types/api';

export interface ContactMessageCreateData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const contactService = {
  // Créer un message (public)
  async createMessage(messageData: ContactMessageCreateData): Promise<ApiResponse<ContactMessage>> {
    const response = await apiClient.post<ApiResponse<ContactMessage>>('/contact/messages/', messageData);
    return response.data;
  },
};
