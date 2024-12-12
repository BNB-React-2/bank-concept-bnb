import { Modal } from '@/components/elements/Modal/Modal';
import { useUser } from '@/features/auth/api/handlers';
import { useModalStore } from '@/stores/modals';
import { toast } from 'sonner';
import { useCategories, useCreateCategory } from '../../api/handlers';
import { getNextCategoryId } from '../../lib';
import { CategoryFormType } from '../../types';
import { DefaultCategoryForm } from '../Form';

export function CreateCategoryModal() {
  const thisModalName = 'createCategory';
  const createCategory = useCreateCategory();
  const { data: user } = useUser();
  const { data: categories } = useCategories();
  const closeModal = useModalStore.use.close();

  const handleSubmit = (values: CategoryFormType) => {
    if (!user) return;

    const data = {
      id: getNextCategoryId(categories),
      ...values,
      userId: user.id,
    };

    createCategory
      .mutateAsync({ data })
      .then(() => {
        closeModal(thisModalName);
        toast.success('Categoria criada');
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <Modal title="Categoria" name={thisModalName}>
      <DefaultCategoryForm
        loading={createCategory.isPending}
        onSubmit={handleSubmit}
      />
    </Modal>
  );
}
