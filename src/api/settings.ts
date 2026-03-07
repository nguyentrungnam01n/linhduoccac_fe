import { AdminSettingsResponse, AdminSettingsUpdateInput } from '@/types';
import { adminFetch } from './client';

export const getSettings = (): Promise<AdminSettingsResponse> => {
  return adminFetch<AdminSettingsResponse>('/api/admin/settings');
};

export const updateSettings = (
  payload: AdminSettingsUpdateInput,
): Promise<AdminSettingsResponse> => {
  return adminFetch<AdminSettingsResponse>('/api/admin/settings', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
};
