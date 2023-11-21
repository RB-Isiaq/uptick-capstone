'use client';

import { getToken } from '@/utils';
import React, { createContext, useContext, useState, useMemo } from 'react';

type AuthCtxType = {
  token: string | null;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
  isAdmin: boolean;
  setIsAdmin: React.Dispatch<React.SetStateAction<boolean>>;
};

const AuthContext = createContext<AuthCtxType | null>(null);

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const uptickAdmin = getToken();
  const [token, setToken] = useState<string | null>(uptickAdmin);
  const [isAdmin, setIsAdmin] = useState<boolean>(!!token); // returns boolean value;

  const value = useMemo(
    () => ({ token, setIsAdmin, setToken, isAdmin }),
    [token, isAdmin],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;

export const useAuthCtx = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('Using the context must be within the context provider');
  }

  return context;
};
