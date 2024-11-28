'use client';

import { useUser } from '@/features/auth/api/handlers';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

export default function CommonPagesLayout({
  children,
}: React.PropsWithChildren) {
  const router = useRouter();
  const { isError } = useUser();

  useEffect(() => {
    if (isError) return router.push('/login');
  }, [isError]);

  return children;
}
