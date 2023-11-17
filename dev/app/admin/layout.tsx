import type { Metadata } from 'next';
import Sidebar from '@/sections/adminpage/internals/SideBar/Sidebar';
import AdminNavbar from '@/sections/adminpage/internals/AdminNavbar/AdminNavbar';

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
      <section className="w-full flex-col">
        <AdminNavbar />
        {children}
      </section>
    </main>
  );
}
