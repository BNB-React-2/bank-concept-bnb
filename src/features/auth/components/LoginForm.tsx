import { Button } from '@/components/elements/Button';
import { FormItem } from '@/components/forms/FormItem';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { loginFormSchema, LoginFormType } from '../types';
import { DEFAULT_LOGIN_FORM_VALUES } from '../values';

export type LoginFormProps = {
  initialValues?: LoginFormType;
  onSubmit?: (values: LoginFormType, reset?: () => void) => void;
};

export function LoginForm({ initialValues, onSubmit }: LoginFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginFormType>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: initialValues || DEFAULT_LOGIN_FORM_VALUES,
  });

  return (
    <form
      onSubmit={handleSubmit((values) => onSubmit && onSubmit(values, reset))}
      className="pt-5 flex flex-col justify-between"
    >
      <FormItem label="Email" error={errors.email}>
        <input type="email" {...register('email')} />
      </FormItem>

      <FormItem label="Senha" error={errors.password}>
        <input type="password" {...register('password')} />
      </FormItem>

      <Button className="btn-primary w-full mt-4" type="submit">
        Salvar
      </Button>
    </form>
  );
}
