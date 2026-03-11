import type { ReactNode } from 'react';
import { Footer, Header } from '@/components';

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1 w-full pt-18 lg:pt-[105px]">{children}</main>
      <Footer />
    </div>
  );
}
