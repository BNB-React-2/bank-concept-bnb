import { useCategories } from '@/features/categories/api/handlers';
import { getCategoryIcon } from '@/features/categories/lib';
import { cn } from '@/lib/utils';
import { useModalStore } from '@/stores/modals';
import { format } from 'date-fns';
import { TransactionType } from '../types';

type TransactionItemProps = {
  data: TransactionType;
};

export function TransactionItem({ data }: TransactionItemProps) {
  const { data: categories } = useCategories();
  const category = categories.find((c) => c.id === data.categoryId);
  const openUpdate = useModalStore.use.openUpdate();

  const categoryBadgeColor = `bg-${category?.color}-500`;

  const modalStore = useModalStore.use.modals();

  return (
    <div
      className="relative flex flex-row flex-wrap w-full items-center justify-between"
      onClick={() => openUpdate('updateTransaction', data.id)}
    >
      <div className="absolute left-0 w-12 h-full flex items-center">
        <div
          className={cn([
            'flex flex-row items-center justify-center w-10 h-10 rounded-full',
            categoryBadgeColor,
          ])}
        >
          <div className="w-6 h-6 text-white">
            {getCategoryIcon(category?.icon || '')}
          </div>
        </div>
      </div>
      <div className="pl-14">
        <span className="font-medium text-sm">{category?.name}</span>
        <h3 className="font-medium my-0">{data.name || <i>Sem nome</i>}</h3>
        <span className="text-xs">{format(data.date, 'dd/MM/yyyy')}</span>
      </div>
      <span className="font-medium">R$ {data.value}</span>
    </div>
  );
}

export function TransactionItemSkeleton() {
  return (
    <div className="relative flex flex-row flex-wrap w-full items-center justify-between mb-3">
      <div className="absolute left-0 w-[50px] h-full flex items-center">
        <div className="skeleton flex flex-row items-center justify-center w-[40px] h-[40px] rounded-full">
          <div className="w-[24px] h-[24px]"></div>
        </div>
      </div>
      <div className="pl-[60px]">
        <span className="skeleton block h-4 w-20"></span>
        <h3 className="skeleton h-4 w-32 my-2"></h3>
      </div>
      <span className="skeleton h-4 w-16"></span>
    </div>
  );
}
