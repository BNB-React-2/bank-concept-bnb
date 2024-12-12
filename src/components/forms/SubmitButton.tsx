import { IconLoader2 } from '@tabler/icons-react';
import { Button } from '../elements/Button';

export type SubmitButtonProps = {
  loading?: boolean;
};

export function SubmitButton({ loading }: SubmitButtonProps) {
  return (
    <Button
      leftSection={
        loading ? <IconLoader2 className="animate-spin" /> : undefined
      }
      disabled={loading}
      className="btn-primary w-full"
      type="submit"
    >
      Salvar
    </Button>
  );
}
