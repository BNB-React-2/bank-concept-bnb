import { SubmitButton } from './SubmitButton';

export type FormLayoutProps = {
  loading?: boolean;
} & React.FormHTMLAttributes<HTMLFormElement> &
  React.PropsWithChildren;

export function FormLayout({ loading, children, ...rest }: FormLayoutProps) {
  return (
    <form className="pt-5 flex flex-col justify-between h-full" {...rest}>
      {children}
      <SubmitButton loading={loading} />
    </form>
  );
}
