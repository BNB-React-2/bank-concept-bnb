import { Modal } from '@/components/elements/Modal/Modal';
import { useUser } from '@/features/auth/api/handlers';
import { uuid } from '@/lib/utils';
import { useModalStore } from '@/stores/modals';
import { toast } from 'sonner';
import { useCreateTransaction } from '../../api/handlers';
import { TransactionFormType, TransactionType } from '../../types';
import { DefaulTransactionForm } from '../Form';

export function CreateTransactionModal() {
  const thisModalName = 'createTransaction';

  const createTransaction = useCreateTransaction();
  const { data: user } = useUser();
  const closeModal = useModalStore.use.close();

  const handleSubmit = (values: TransactionFormType) => {
    if (!user) return;
    const data: TransactionType = {
      id: uuid(),
      userId: user.id,
      ...values,
    };
    createTransaction
      .mutateAsync({ data })
      .then(() => {
        closeModal(thisModalName);
        toast.success('Transação criada');
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <Modal name={thisModalName} title="Criar transação">
      <DefaulTransactionForm
        loading={createTransaction.isPending}
        onSubmit={handleSubmit}
      />
    </Modal>
  );
}
