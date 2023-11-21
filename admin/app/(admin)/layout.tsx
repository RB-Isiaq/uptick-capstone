import type { Metadata } from 'next';
import Sidebar from '@/components/SideBar/Sidebar';
import Navbar from '@/components/Navbar';
import ProtectedRoute from '@/components/ProtectedRoute/ProtectedRoute';
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
    <ProtectedRoute>
      <main className="w-full flex">
        <Sidebar />
        <section className="hidden lg:block w-full flex-col ml-[240px] overflow-hidden">
          <Navbar />
          {children}
        </section>
      </main>
    </ProtectedRoute>
  );
}
