import { Modal } from '@/components/elements/Modal/Modal';
import { useUser } from '@/features/auth/api/handlers';
import { useModalStore } from '@/stores/modals';
import { toast } from 'sonner';
import { DeleteCategory } from '../../actions/DeleteCategory';
import { useCategories, useUpdateCategory } from '../../api/handlers';
import { CategoryFormType, CategoryType } from '../../types';
import { DefaultCategoryForm } from '../Form';

export function UpdateCategoryModal() {
  const { data: user } = useUser();
  const { data: categories } = useCategories();
  const updateCategory = useUpdateCategory();
  const closeModal = useModalStore.use.close();

  const thisModalName = 'updateCategory';
  const thisModalState = useModalStore.use
    .modals()
    .find((m) => m.name === thisModalName);
  const categoryData = categories.find((c) => c.id === thisModalState?.dataId);

  const handleSubmit = (values: CategoryFormType) => {
    if (!user || !categoryData) return;

    const data: CategoryType = {
      id: categoryData.id,
      ...values,
      userId: user.id,
    };

    updateCategory
      .mutateAsync({ data, id: categoryData.id })
      .then(() => {
        closeModal(thisModalName);
        toast.success('Categoria atualizada');
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <Modal
      actions={
        categoryData ? <DeleteCategory itemId={categoryData.id} /> : undefined
      }
      title="Atualizar categoria"
      name={thisModalName}
    >
      <DefaultCategoryForm
        initialValues={categoryData}
        onSubmit={handleSubmit}
      />
    </Modal>
  );
}
