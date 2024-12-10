export type DefaultFormProps<T> = {
  initialValues?: T;
  onSubmit?: (values: T) => void;
};
