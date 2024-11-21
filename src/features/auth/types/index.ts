import { z } from 'zod';

export const loginFormSchema = z
  .object({
    email: z.string().email('Este email não é válido'),
    password: z.string().min(5, {
      message: 'A senha deve ter mais de 5 caracteres',
    }),
  })
  .required();

export type LoginFormType = z.infer<typeof loginFormSchema>;
