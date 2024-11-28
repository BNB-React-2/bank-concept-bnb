import { Navigation } from './Navigation';

export function LayoutContainer({ children }: React.PropsWithChildren) {
  return (
    <div className="flex flex-col md:flex-col relative">
      <Navigation />
      <main className="max-w-[1600px] md:pl-72 w-full min-h-scren mx-auto">
        {children}
      </main>
      {/* <ModalsContainer /> */}
    </div>
  );
}
