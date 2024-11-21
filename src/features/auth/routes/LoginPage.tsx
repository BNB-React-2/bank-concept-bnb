'use client';

import Link from 'next/link';
import { LoginForm } from '../components/LoginForm';

export function LoginPage() {
  return (
    <div className="border-2 border-primary p-10 pt-8  rounded-md">
      <h1 className="text-2xl font-bold text-center text-primary">Form</h1>
      <LoginForm />
      <span className="flex justify-center text-sm mt-3">
        Não tem uma conta?&nbsp;
      </span>
      <Link href="/register" className="text-primary hover:underline">
        Registre-se
      </Link>
    </div>
  );
}
