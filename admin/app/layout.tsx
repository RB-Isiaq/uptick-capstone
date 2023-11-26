import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';
import './globals.css';
import ReduxProvider from '@/components/ReduxProvider';
const raleway = Raleway({ weight: ['400', '500', '600'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Uptick Talent Admin',
  description: 'Nurturing the Future of Tech and Business in Africa.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
