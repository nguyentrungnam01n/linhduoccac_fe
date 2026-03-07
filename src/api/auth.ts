import { ApiOk, AdminLoginInput, AdminMeResponse } from '@/types';
import { adminFetch } from './client';

export const login = (input: AdminLoginInput): Promise<ApiOk> => {
  return adminFetch<ApiOk>('/api/admin/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(input),
  });
};

export const logout = (): Promise<ApiOk> => {
  return adminFetch<ApiOk>('/api/admin/auth/logout', {
    method: 'POST',
  });
};

export const me = (): Promise<AdminMeResponse> => {
  return adminFetch<AdminMeResponse>('/api/admin/auth/me');
};
