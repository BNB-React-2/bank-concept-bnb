import { IconLoader } from '@tabler/icons-react';

export default function Loading() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <IconLoader className="animate-spin mr-2" />
      Carregando...
    </div>
  );
}
