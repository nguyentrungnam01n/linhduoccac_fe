import { Category } from '@/types';
import { adminFetch } from './client';

export const listCategories = (): Promise<Category[]> => {
  return adminFetch<Category[]>('/api/admin/categories');
};

export const createCategory = (name: string, scope?: string, color?: string): Promise<Category> => {
  return adminFetch<Category>('/api/admin/categories', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, scope, color }),
  });
};

export const updateCategory = (id: string, name: string, color?: string): Promise<Category> => {
  return adminFetch<Category>(`/api/admin/categories/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, color }),
  });
};

export const deleteCategory = (id: string): Promise<void> => {
  return adminFetch<void>(`/api/admin/categories/${id}`, {
    method: 'DELETE',
  });
};
