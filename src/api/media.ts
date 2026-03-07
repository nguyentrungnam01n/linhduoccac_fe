import { adminFetch } from './client';

export const uploadMedia = (formData: FormData): Promise<unknown> => {
  return adminFetch<unknown>('/api/admin/media', {
    method: 'POST',
    body: formData,
  });
};
