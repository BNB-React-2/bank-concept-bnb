import { Modal } from '@/components/elements/Modal/Modal';
import { DefaulTransactionForm } from '../Form';

export function CreateTransactionModal() {
  return (
    <Modal name="createTransaction" title="Criar transação">
      <DefaulTransactionForm onSubmit={console.log} />
    </Modal>
  );
}
