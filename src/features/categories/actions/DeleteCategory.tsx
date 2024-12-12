import { useModalStore } from '@/stores/modals';
import { IconTrash } from '@tabler/icons-react';
import { toast } from 'sonner';
import { useDeleteCategory } from '../api/handlers';
import { CategoryType } from '../types';

export type DeleteCategoryProps = {
  itemId: CategoryType['id'];
};

export function DeleteCategory({ itemId }: DeleteCategoryProps) {
  const closeModal = useModalStore.use.close();
  const deleteCategory = useDeleteCategory();
  return (
    <div className="tooltip" data-tip="Deletar categoria">
      <button
        type="button"
        className="flex items-center justify-center rounded-md btn-sm btn-square bg-transparent border-primary border-2 hover:bg-primary hover:border-transparent text-primary hover:text-white"
        onClick={() =>
          deleteCategory
            .mutateAsync({ id: itemId })
            .then(() => {
              closeModal('updateCategory');
              toast.success('Categoria deletada');
            })
            .catch((err) => toast.error('Não foi possível deletar a categoria'))
        }
      >
        <IconTrash size={24} />
      </button>
    </div>
  );
}
