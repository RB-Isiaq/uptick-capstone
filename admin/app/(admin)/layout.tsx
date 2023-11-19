import type { Metadata } from 'next';
import Sidebar from '@/components/SideBar/Sidebar';
import Navbar from '@/components/Navbar';
export const metadata: Metadata = {
  title: 'Uptick Talent',
  description: 'Nurturing the Future of Tech and Business in Africa.',
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-full flex">
      <Sidebar />
      <section className="w-full flex-col ml-[240px] overflow-hidden">
        <Navbar />
        {children}
      </section>
    </main>
  );
}
