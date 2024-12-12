import { Modal } from '@/components/elements/Modal/Modal';
import { useUser } from '@/features/auth/api/handlers';
import { useModalStore } from '@/stores/modals';
import { toast } from 'sonner';
import { DeleteTransaction } from '../../actions/DeleteTransaction';
import { useTransactions, useUpdateTransaction } from '../../api/handlers';
import { TransactionFormType, TransactionType } from '../../types';
import { DefaulTransactionForm } from '../Form';

export function UpdateTransactionModal() {
  const closeModal = useModalStore.use.close();
  const thisModalName = 'updateTransaction';
  const thisModalState = useModalStore.use
    .modals()
    .find((m) => m.name === thisModalName);

  const { data: transactions } = useTransactions();
  const updateTransaction = useUpdateTransaction();
  const { data: user } = useUser();

  const transactionData =
    transactions && transactions.find((t) => t.id === thisModalState?.dataId);

  const handleSubmit = (values: TransactionFormType) => {
    if (!user || !transactionData) return;

    const data: TransactionType = {
      id: transactionData?.id,
      ...values,
      userId: user.id,
    };

    updateTransaction
      .mutateAsync({ data, id: transactionData.id })
      .then(() => {
        closeModal(thisModalName);
        toast.success('Transação atualizada');
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <Modal
      actions={
        transactionData ? (
          <DeleteTransaction itemId={transactionData.id} />
        ) : undefined
      }
      name={thisModalName}
      title="Transação"
    >
      <DefaulTransactionForm
        loading={updateTransaction.isPending}
        initialValues={transactionData}
        onSubmit={handleSubmit}
      />
    </Modal>
  );
}
