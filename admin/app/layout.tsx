import type { Metadata } from 'next';
import { Inter, Poppins, Raleway } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

const poppins = Poppins({ weight: ['400', '500', '600'], subsets: ['latin'] });
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
      <body
        className={`${inter.className} ${poppins.className} ${raleway.className}`}
      >
        {children}
      </body>
    </html>
  );
}
