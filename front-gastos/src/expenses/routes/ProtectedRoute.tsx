import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useUserStore } from '@/store/useUserStore';

export const ProtectedRoute: React.FC = () => {
  const isUserDataComplete = useUserStore((state) => state.isUserDataComplete());

  return isUserDataComplete ? <Outlet /> : <Navigate to="/setup" replace />;
};
