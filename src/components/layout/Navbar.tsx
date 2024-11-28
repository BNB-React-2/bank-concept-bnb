import { cn } from '@/lib/utils';
import { IconX } from '@tabler/icons-react';
import { UserCard } from './UserCard';

export type NavbarProps = {
  opened: boolean;
  setOpened: (value: boolean) => void;
};

export function Navbar({ opened, setOpened }: NavbarProps) {
  return (
    <nav
      className={cn([
        'flex flex-col shadow-md justify-between bg-primary w-72 py-20 fixed h-screen text-white z-20',
        opened ? 'left-0' : '-left-72',
        'md:left-0',
      ])}
    >
      <div>
        <IconX
          height={30}
          width={30}
          className="md:hidden absolute top-4 right-8 cursor-pointer"
          onClick={() => setOpened(false)}
        />
        <div className="mb-28">
          <UserCard />
        </div>
      </div>
    </nav>
  );
}
