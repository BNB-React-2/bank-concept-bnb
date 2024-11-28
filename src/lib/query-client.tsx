'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

export const ApiProvider = ({ children }: React.PropsWithChildren) => (
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools />
    {children}
  </QueryClientProvider>
);
