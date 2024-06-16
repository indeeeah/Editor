import type { Metadata } from 'next';
import '@/styles/globals.css';

import Header from '@/components/Layout/Header';
import { BackgroundSizeProvider } from '@/providers/BackgroundSizeProvider';
import { ElementProvider } from '@/providers/ElementProvider';

type Props = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: '',
  description: '',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="ko">
      <body>
        <div className="flex h-screen flex-1 flex-col">
          <Header />
          <BackgroundSizeProvider>
            <ElementProvider>
              <div className="flex h-full flex-1">{children}</div>
            </ElementProvider>
          </BackgroundSizeProvider>
        </div>
      </body>
    </html>
  );
}
