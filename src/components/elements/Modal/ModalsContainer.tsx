'use client';

import { CreateTransactionModal } from '@/features/transactions/components/Modals/CreateTransaction';
import { UpdateTransactionModal } from '@/features/transactions/components/Modals/UpdateTransaction';
import { cn } from '@/lib/utils';
import { useModalStore } from '@/stores/modals';

export function ModalsContainer() {
  const modals = useModalStore.use.modals();
  const isAnyModalOpen = modals.some((m) => m.open);

  return (
    <div
      id="modals-container"
      className={cn([
        'fixed w-screen h-screen top-0 z-30',
        isAnyModalOpen ? 'block' : 'hidden',
      ])}
    >
      <div className="relative w-full h-full">
        <div className="flex flex-col items-center justify-center w-full h-full z-50">
          <CreateTransactionModal />
          <UpdateTransactionModal />
        </div>
        <div className="absolute top-0 w-screen h-screen bg-black opacity-80 z-40"></div>
      </div>
    </div>
  );
}
