import { FormItem } from '@/components/forms/FormItem';
import { FormLayout } from '@/components/forms/FormLayout';
import { DefaultFormProps } from '@/types/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { CategoryFormType, categorySchema } from '../types';
import {
  CATEGORY_COLORS,
  CATEGORY_ICONS,
  DEFAULT_CATEGORY_FORM_VALUES,
} from '../values';

export type DefaultCategoryFormProps = DefaultFormProps<CategoryFormType>;

export function DefaultCategoryForm({
  initialValues,
  onSubmit,
}: DefaultCategoryFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CategoryFormType>({
    resolver: zodResolver(categorySchema),
    defaultValues: initialValues || DEFAULT_CATEGORY_FORM_VALUES,
  });
  return (
    <FormLayout
      onSubmit={handleSubmit((values) => {
        reset();
        onSubmit && onSubmit(values);
      })}
    >
      <FormItem label="Nome" error={errors.name}>
        <input type="text" {...register('name')} />
      </FormItem>

      <FormItem label="Ícone" error={errors.name}>
        <select {...register('icon')}>
          {CATEGORY_ICONS.map((icon) => (
            <option value={icon.value} key={icon.value}>
              {icon.name}
            </option>
          ))}
        </select>
      </FormItem>

      <FormItem label="Cor" error={errors.color}>
        <select {...register('color')}>
          {CATEGORY_COLORS.map((color) => (
            <option value={color.value} key={color.value}>
              {color.name}
            </option>
          ))}
        </select>
      </FormItem>
    </FormLayout>
  );
}
