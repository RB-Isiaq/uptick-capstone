'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthCtx } from '@/context/AuthCtx';

interface Props {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: Props) => {
  const context = useAuthCtx();

  if (!context.isAdmin) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;

function Navigate({ to }: { to: string }) {
  const router = useRouter();

  useEffect(() => {
    router.replace(to);
  }, [router, to]);
  return null;
}
