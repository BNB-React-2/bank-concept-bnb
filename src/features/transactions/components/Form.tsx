import { FormItem } from '@/components/forms/FormItem';
import { FormLayout } from '@/components/forms/FormLayout';
import { useCategories } from '@/features/categories/api/handlers';
import { DefaultFormProps } from '@/types/form';
import { zodResolver } from '@hookform/resolvers/zod';
import ReactDatePicker from 'react-datepicker';
import { Controller, useForm } from 'react-hook-form';
import { NumericFormat } from 'react-number-format';
import { TransactionFormType, transactionSchema } from '../types';
import { DEFAULT_TRANSACTION_FORM_VALUES, PAYMENT_METHODS } from '../values';

export type DefaulTransactionFormProps = DefaultFormProps<TransactionFormType>;

export function DefaulTransactionForm({
  loading,
  initialValues,
  onSubmit,
}: DefaulTransactionFormProps) {
  const { data: categories } = useCategories();
  const {
    handleSubmit,
    formState: { errors },
    register,
    control,
  } = useForm<TransactionFormType>({
    resolver: zodResolver(transactionSchema),
    defaultValues: initialValues
      ? { ...initialValues, date: new Date(initialValues.date) }
      : DEFAULT_TRANSACTION_FORM_VALUES,
  });
  return (
    <FormLayout
      loading={loading}
      onSubmit={handleSubmit((values) => onSubmit && onSubmit(values))}
    >
      <FormItem label="Nome" error={errors.name}>
        <input type="text" {...register('name')} />
      </FormItem>

      <FormItem label="Valor" error={errors.value}>
        <Controller
          control={control}
          name="value"
          render={({ field: { onChange, value } }) => (
            <NumericFormat
              thousandSeparator="."
              decimalSeparator=","
              decimalScale={2}
              value={value}
              onValueChange={(v) => onChange(Number(v.value))}
            />
          )}
        />
      </FormItem>
      <div className="flex gap-5">
        <FormItem label="Categoria" error={errors.categoryId}>
          <select {...register('categoryId')}>
            {categories.map((c) => (
              <option value={c.id} key={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </FormItem>

        <FormItem label="Pagamento" error={errors.paymentType}>
          <select {...register('paymentType')}>
            {PAYMENT_METHODS.map((p) => (
              <option value={p.value} key={p.name}>
                {p.name}
              </option>
            ))}
          </select>
        </FormItem>
      </div>

      <FormItem label="Data" error={errors.date}>
        <Controller
          control={control}
          name="date"
          render={({ field: { value, onChange } }) => (
            <ReactDatePicker
              dateFormat="dd/MM/yyyy"
              placeholderText="Data"
              selected={new Date(value)}
              onChange={(date: any) => onChange(new Date(date))}
            />
          )}
        ></Controller>
      </FormItem>
    </FormLayout>
  );
}
