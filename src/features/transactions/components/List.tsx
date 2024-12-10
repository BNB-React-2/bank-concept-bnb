'use client';

import { useModalStore } from '@/stores/modals';
import { useTransactions } from '../api/handlers';
import { TransactionItem, TransactionItemSkeleton } from './Item';

export type TransactionListProps = {
  title: string;
};

export function TransactionList({ title }: TransactionListProps) {
  const { data: transactions, isFetching, isError } = useTransactions();
  const openUpdateModal = useModalStore.use.openUpdate();

  return (
    <div>
      <h3 className="font-bold text-xl mb-5">{title}</h3>
      <ul className="relative flex flex-col gap-5 w-full before:absolute before:content-[''] before:left-[19px] before:my-4 before:h-[calc(100%-32px)] before:max-h-full before:w-[2px] before:bg-gray-200">
        {isFetching &&
          Array(5)
            .fill(0)
            .map((_, index) => <TransactionItemSkeleton key={index} />)}

        {!isError && transactions.length === 0 && (
          <span>Não foram encontradas transações</span>
        )}

        {isError && <span>Ocorreu um erro ao buscar as transações</span>}

        {!isError &&
          transactions.length > 0 &&
          transactions?.map((transaction) => (
            <li
              className="cursor-pointer"
              key={`transaction-item-${transaction.id}`}
              onClick={() =>
                openUpdateModal('updateTransaction', transaction.id)
              }
            >
              <TransactionItem data={transaction} />
            </li>
          ))}
      </ul>
    </div>
  );
}
