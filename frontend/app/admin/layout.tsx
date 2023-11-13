'use client';

import AuthContextProvider from '@/context/AuthContext';

export default function AdninLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AuthContextProvider> {children}</AuthContextProvider>;
}
