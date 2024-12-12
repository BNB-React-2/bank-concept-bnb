import { useModalStore } from '@/stores/modals';
import { IconTrash } from '@tabler/icons-react';
import { toast } from 'sonner';
import { useDeleteTransaction } from '../api/handlers';
import { TransactionType } from '../types';

export type DeleteTransactionProps = {
  itemId: TransactionType['id'];
};

export function DeleteTransaction({ itemId }: DeleteTransactionProps) {
  const closeModal = useModalStore.use.close();
  const deleteTransaction = useDeleteTransaction();
  return (
    <div>
      <div className="tooltip" data-tip="Deletar Transação">
        <button
          type="button"
          className="flex items-center justify-center rounded-md btn-sm btn-square bg-transparent border-primary border-2 hover:bg-primary hover:border-transparent text-primary hover:text-white"
          onClick={() => {
            deleteTransaction
              .mutateAsync({ id: itemId })
              .then(() => {
                closeModal('updateTransaction');
                toast.success('Transação deletada');
              })
              .catch((err) => toast.error(err.message));
          }}
        >
          <IconTrash size={24} />
        </button>
      </div>
    </div>
  );
}
