import ProtectedRoute from '@/components/ProtectedRoute';
import React from 'react';

// This shoukd be the admin dashoard that would be a protected route

const Admin = () => {
  return <ProtectedRoute>Admin</ProtectedRoute>;
};

export default Admin;
