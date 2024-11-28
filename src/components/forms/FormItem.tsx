import React from 'react';
import { FieldError } from 'react-hook-form';

export const inputStyles =
  'input w-full border-2 border-primary bg-transparent text-primary rounded-full placeholder:text-primary';

export type FormItemProps = {
  label?: string;
  error?: FieldError;
} & React.PropsWithChildren;

export function FormItem({ error, label, children }: FormItemProps) {
  return (
    <label className="form-control w-full">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      {children}
      <span className="label">
        {error && <span className="label-text-alt">{error.message}</span>}
      </span>
    </label>
  );
}
