import { axios } from '@/lib/api-client';
import { CategoryType } from '../types';

export async function getCategories() {
  return axios.get<CategoryType[]>('/categories');
}

export async function createCategory(data: CategoryType) {
  return axios.post('/categories', data);
}

export async function updateCategory(
  id: CategoryType['id'],
  data: Omit<CategoryType, 'id'>
) {
  return axios.put(`/categories/${id}`, data);
}

export async function deleteCategory(id: CategoryType['id']) {
  return axios.delete(`/categories/${id}`);
}
