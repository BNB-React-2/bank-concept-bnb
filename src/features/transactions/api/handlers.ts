import { queryClient } from '@/lib/query-client';
import { useMutation, useQuery } from '@tanstack/react-query';
import { TransactionType } from '../types';
import {
  createTransaction,
  deleteTransaction,
  getTransactions,
  updateTransaction,
} from './api';

export function useTransactions() {
  return useQuery<TransactionType[]>({
    queryKey: ['transactions'],
    queryFn: () =>
      getTransactions().then((res) => {
        console.log(res);
        return res.data;
      }),
    initialData: [],
  });
}

export function useCreateTransaction() {
  return useMutation({
    mutationFn: ({ data }: { data: TransactionType }) =>
      createTransaction(data),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['transactions'],
        exact: true,
      });
    },
  });
}

type UpdateTransactionMutationType = {
  data: Omit<TransactionType, 'id'>;
  id: TransactionType['id'];
};

export function useUpdateTransaction() {
  return useMutation({
    mutationFn: ({ id, data }: UpdateTransactionMutationType) =>
      updateTransaction(id, data),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['transactions'],
        exact: true,
      });
    },
  });
}

export function useDeleteTransaction() {
  return useMutation({
    mutationFn: ({ id }: { id: TransactionType['id'] }) =>
      deleteTransaction(id),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['transactions'],
        exact: true,
      });
    },
  });
}
