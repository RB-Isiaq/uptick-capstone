'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { AdminState } from '@/store/AdminReducer';

interface Props {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: Props) => {
  const { isAdmin } = useSelector((state: AdminState) => state.admin);

  if (!isAdmin) {
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
