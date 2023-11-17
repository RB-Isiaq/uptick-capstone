import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
export const metadata: Metadata = {
  title: 'Uptick Talent',
  description: 'Nurturing the Future of Tech and Business in Africa.',
};

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
