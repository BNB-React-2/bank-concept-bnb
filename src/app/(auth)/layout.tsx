import { AuthLayout } from '@/features/auth/components/Layout';

export default function AuthPagesLayout({ children }: React.PropsWithChildren) {
  return <AuthLayout>{children}</AuthLayout>;
}
