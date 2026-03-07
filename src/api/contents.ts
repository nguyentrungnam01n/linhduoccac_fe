import {
  AdminContentListResponse,
  AdminContentResponse,
  AdminContentCreateInput,
  AdminContentUpdateInput,
} from '@/types';
import { adminFetch } from './client';

export const listContents = (query: string): Promise<AdminContentListResponse> => {
  return adminFetch<AdminContentListResponse>(`/api/admin/contents${query}`);
};

export const getContent = (id: string): Promise<AdminContentResponse> => {
  return adminFetch<AdminContentResponse>(`/api/admin/contents/${id}`);
};

export const createContent = (
  payload: AdminContentCreateInput,
): Promise<AdminContentResponse> => {
  return adminFetch<AdminContentResponse>('/api/admin/contents', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
};

export const updateContent = (
  id: string,
  payload: AdminContentUpdateInput,
): Promise<AdminContentResponse> => {
  return adminFetch<AdminContentResponse>(`/api/admin/contents/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
};

export const publishContent = (id: string): Promise<AdminContentResponse> => {
  return adminFetch<AdminContentResponse>(
    `/api/admin/contents/${id}/publish`,
    {
      method: 'POST',
    },
  );
};

export const unpublishContent = (id: string): Promise<AdminContentResponse> => {
  return adminFetch<AdminContentResponse>(
    `/api/admin/contents/${id}/unpublish`,
    {
      method: 'POST',
    },
  );
};
