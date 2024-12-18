import { queryClient } from '@/lib/query-client';
import { useMutation, useQuery } from '@tanstack/react-query';
import { CategoryType } from '../types';
import {
  createCategory,
  deleteCategory,
  getCategories,
  updateCategory,
} from './api';

export function useCategories() {
  return useQuery({
    queryKey: ['categories'],
    queryFn: () => getCategories().then((res) => res.data),
    initialData: [],
  });
}

type CreateCategoryMutationType = {
  data: CategoryType;
};

export function useCreateCategory() {
  return useMutation({
    mutationFn: ({ data }: CreateCategoryMutationType) => createCategory(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['categories'],
        exact: true,
      });
    },
  });
}

type UpdateCategoryMutationType = {
  data: Omit<CategoryType, 'id'>;
  id: CategoryType['id'];
};

export function useUpdateCategory() {
  return useMutation({
    mutationFn: ({ id, data }: UpdateCategoryMutationType) =>
      updateCategory(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['categories'],
        exact: true,
      });
    },
  });
}

export function useDeleteCategory() {
  return useMutation({
    mutationFn: ({ id }: { id: CategoryType['id'] }) => deleteCategory(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['categories'],
        exact: true,
      });
    },
  });
}
