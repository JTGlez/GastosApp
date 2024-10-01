import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { ExpensesRoutes } from '@/expenses/routes/ExpensesRoutes';
import SetupPage from '@/setup/pages/SetupPage';
import { useUserStore } from '@/store/useUserStore';
import { ProtectedRoute } from '@/expenses/routes/ProtectedRoute';

export const AppRouter = () => {
  const isUserDataComplete = useUserStore((state) => state.isUserDataComplete());

  const router = createBrowserRouter([
    {
      path: '/',
      element: isUserDataComplete ? <Navigate to="/expenses/home" replace /> : <Navigate to="/setup" replace />,
    },
    {
      path: '/setup',
      element: isUserDataComplete ? <Navigate to="/expenses/home" replace /> : <SetupPage />,
    },
    {
      path: '/expenses/*',
      element: <ProtectedRoute />,
      children: ExpensesRoutes,
    },
    {
      path: '*',
      element: <Navigate to="/setup" replace />,
    },
  ]);

  return <RouterProvider router={router} />;
};
