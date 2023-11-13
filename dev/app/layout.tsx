import type { Metadata } from 'next';
import { Inter, Poppins, Raleway } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

const poppins = Poppins({ weight: ['400', '500', '600'], subsets: ['latin'] });
const raleway = Raleway({ weight: ['400', '500', '600'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Uptick Talent',
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
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
