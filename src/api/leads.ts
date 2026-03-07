import { AdminLeadListResponse } from '@/types';
import { adminFetch } from './client';

export const listLeads = (query: string): Promise<AdminLeadListResponse> => {
  return adminFetch<AdminLeadListResponse>(`/api/admin/leads${query}`);
};
