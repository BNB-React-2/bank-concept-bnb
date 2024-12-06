import { TransactionType } from '@/features/transactions/types';
import {
  IconBeach,
  IconBus,
  IconCar,
  IconClipboardHeart,
  IconDots,
  IconFileInfo,
  IconHome,
  IconPlane,
  IconSchool,
  IconShirt,
  IconShoppingCart,
  IconTie,
  IconToolsKitchen2,
} from '@tabler/icons-react';
import { CategoryType } from '../types';

export function getCategoryItems(
  categoryId: CategoryType['id'],
  transactions: TransactionType[]
) {
  return transactions.filter(
    (transaction) => transaction.categoryId === categoryId
  );
}

export function getCategoryIcon(icon: string) {
  switch (icon) {
    case 'icon-shirt':
      return <IconShirt />;
    case 'icon-kitchen':
      return <IconToolsKitchen2 />;
    case 'icon-shopping-cart':
      return <IconShoppingCart />;
    case 'icon-house':
      return <IconHome />;
    case 'icon-education':
      return <IconSchool />;
    case 'icon-recreation':
      return <IconBeach />;
    case 'icon-other':
      return <IconDots />;
    case 'icon-health':
      return <IconClipboardHeart />;
    case 'icon-services':
      return <IconFileInfo />;
    case 'icon-job':
      return <IconTie />;
    case 'icon-transportation':
      return <IconBus />;
    case 'icon-vehicles':
      return <IconCar />;
    case 'icon-travel':
      return <IconPlane />;
  }
}
