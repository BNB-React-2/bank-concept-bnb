import { UserType } from '@/features/auth/types';
import { CategoryType } from '@/features/categories/types';
import { z } from 'zod';

export type TransactionType = {
  id: string;
  name: string;
  value: number;
  date: Date;
  categoryId: CategoryType['id'];
  paymentType: string;
  userId: UserType['id'];
};

export const transactionSchema = z.object({
  name: z.string().min(1, { message: 'O nome é obrigatório' }),
  value: z
    .number({ message: 'Digite um valor válido' })
    .gt(0, { message: 'O valor deve ser maior que zero' }),
  date: z.date({
    errorMap: (issue, { defaultError }) => ({
      message:
        issue.code === 'invalid_date' ? 'Insira um data válida' : defaultError,
    }),
  }),
  categoryId: z.string({ message: 'A categoria é obrigatória' }),
  paymentType: z.string({ message: 'Tipo do pagamento é obrigatório' }),
});

export type TransactionFormType = z.infer<typeof transactionSchema>;
