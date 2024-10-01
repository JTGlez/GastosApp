import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { ExpensesRoutes } from '@/expenses/routes/ExpensesRoutes';
import { SetupPage } from '@/setup/pages/SetupPage';

// Configuración del router
const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/setup" replace />,
  },
  {
    path: '/setup',
    element: <SetupPage />,
  },
  {
    path: '/expenses/*',
    children: ExpensesRoutes,
  },
  {
    path: '*',
    element: <Navigate to="/setup" replace />,
  },
]);

export const AppRouter = () => {
  return (
    <RouterProvider router={router} />
  );
};