import { queryClient } from '@/lib/query-client';
import { useMutation, useQuery } from '@tanstack/react-query';
import { TransactionType } from '../types';
import { createTransaction, getTransactions } from './api';

export function useTransactions() {
  return useQuery<TransactionType[]>({
    queryKey: ['transactions'],
    queryFn: () => getTransactions().then((res) => res.data),
  });
}

export function useCreateTransaction() {
  return useMutation({
    mutationFn: ({ data }: { data: TransactionType }) =>
      createTransaction(data),
    onSuccess: async () => {
      await queryClient.refetchQueries({
        queryKey: ['transactions'],
        exact: true,
      });
    },
  });
}
