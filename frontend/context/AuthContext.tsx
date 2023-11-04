import React, { createContext, useState, useMemo } from 'react';

interface Admin {
  id: string;
  username: string;
  token?: string;
}

type AuthCtxType = {
  adminData: Admin | null;
  setAdminData: React.Dispatch<React.SetStateAction<Admin | null>>;
};

export const AuthContext = createContext<AuthCtxType | null>(null);

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [adminData, setAdminData] = useState<Admin | null>(null);

  const value = useMemo(() => ({ adminData, setAdminData }), [adminData]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
