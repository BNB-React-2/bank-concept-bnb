'use client';

import { Button } from '@/components/elements/Button';
import { FormItem, inputStyles } from '@/components/forms/FormItem';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { registerFormSchema, RegisterFormType } from '../types';
import { DEFAULT_REGISTER_FORM_VALUES } from '../values';

export type RegisterFormProps = {
  initialValues?: RegisterFormType;
  onSubmit?: (values: RegisterFormType, reset?: () => void) => void;
};

export function RegisterForm({ initialValues, onSubmit }: RegisterFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RegisterFormType>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: initialValues || DEFAULT_REGISTER_FORM_VALUES,
  });
  return (
    <form
      onSubmit={handleSubmit((values) => onSubmit && onSubmit(values, reset))}
    >
      <FormItem label="Nome" error={errors.name}>
        <input type="text" className={inputStyles} {...register('name')} />
      </FormItem>
      <FormItem label="Email" error={errors.email}>
        <input type="text" className={inputStyles} {...register('email')} />
      </FormItem>
      <FormItem label="Senha" error={errors.password}>
        <input
          type="password"
          className={inputStyles}
          {...register('password')}
        />
      </FormItem>

      <Button className="btn-primary w-full mt-4" type="submit">
        Salvar
      </Button>
    </form>
  );
}
