'use client';

import { useUser } from '@/features/auth/api/handlers';

export default function Home() {
  const { data: user, isFetching } = useUser();
  return (
    <div className="flex flex-row w-full xl:max-w-[calc(50%-60px)]">
      <div className="flex flex-col flex-1 p-6 pt-10 h-full">
        <div className="flex flex-col items-start justify-start mb-20">
          {/*isFetching && <HomeTitleSkeleton />*/}
          {user && (
            <>
              <h1 className="text-3xl font-bold">Olá {user.name}</h1>
              <span className="max-w-80">
                Bem-vindo de volta. Aqui está uma visão geral da sua conta.
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
