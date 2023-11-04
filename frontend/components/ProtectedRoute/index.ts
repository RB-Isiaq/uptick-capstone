'use client';

import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { AuthContext } from '@/context/AuthContext';

interface Props {
  children: React.ReactNode;
  role?: string;
}

const ProtectedRoute = ({ children }: Props) => {
  const context = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!context?.adminData?.id) {
      router.replace('/admin/sign-in');
    }
  });

  return children;
};

export default ProtectedRoute;
