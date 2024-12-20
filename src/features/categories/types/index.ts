import { UserType } from '@/features/auth/types';
import { z } from 'zod';

export type CategoryType = {
  id: string;
  name: string;
  color: string;
  icon: string;
  userId: UserType['id'];
};

export const categorySchema = z.object({
  name: z.string().min(1, { message: 'O nome é obrigatório' }),
  color: z.string().min(1, { message: 'A cor é obrigatória' }),
  icon: z.string().min(1, { message: 'O ícone é obrigatório' }),
});

export type CategoryFormType = z.infer<typeof categorySchema>;
