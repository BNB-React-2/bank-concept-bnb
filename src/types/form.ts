export type DefaultFormProps<T> = {
  loading?: boolean;
  initialValues?: T;
  onSubmit?: (values: T) => void;
};
