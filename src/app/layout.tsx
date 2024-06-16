import type { Metadata } from 'next';

import '@/styles/globals.css';

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
      <body className="bg-background-beige">
        <div>{children}</div>
      </body>
    </html>
  );
}
