import { cn } from '@/lib/utils';
import {
  IconCoin,
  IconGraph,
  IconMessage,
  IconSettings,
  IconUserCircle,
  IconX,
} from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactElement } from 'react';
import { UserCard } from './UserCard';

export type NavbarProps = {
  opened: boolean;
  setOpened: (value: boolean) => void;
};

const navbarData: NavbarDataType[] = [
  {
    text: 'Dashboard',
    icon: <IconGraph />,
    link: '/',
  },
  {
    text: 'Conta',
    icon: <IconUserCircle />,
    link: '/account',
  },
  {
    text: 'Transações',
    icon: <IconCoin />,
    link: '/transactions',
  },
  {
    text: 'Chat online',
    icon: <IconMessage />,
    link: '/chat',
  },
  {
    text: 'Configurações',
    icon: <IconSettings />,
    link: '/settings',
  },
];

type NavbarDataType = {
  text: string;
  icon: ReactElement;
  link: string;
};

type NavItemProps = {
  data: NavbarDataType;
  setOpened: (value: boolean) => void;
};

function NavItem({ data, setOpened }: NavItemProps) {
  const path = usePathname();
  const isActive = data.link === path;
  return (
    <li>
      <Link href={data.link} onClick={() => setOpened(false)}>
        <div
          className={cn([
            'flex flex-row items-center h-10 px-8 py-6 hover:bg-secondary',
            isActive ? 'bg-secondary' : null,
          ])}
        >
          <span className="mr-10">{data.icon}</span>
          <span>{data.text}</span>
        </div>
      </Link>
    </li>
  );
}

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
        <ul>
          {navbarData.map((navItem) => (
            <NavItem key={navItem.link} setOpened={setOpened} data={navItem} />
          ))}
        </ul>
      </div>
      <div className="flex flex-col items-center p-4 text-sm">
        <Image
          src="/icons/logo-bnb.svg"
          width={70}
          height={70}
          alt="Logo BNB"
          priority
        />
        <div className="flex flex-col items-center mt-4">
          <span>&#169; 2024 Banco do Nordeste do Brasil</span>
          <span className="text-center">
            (Este app é um conceito, não afiliado a organização que representa)
          </span>
        </div>
      </div>
    </nav>
  );
}
