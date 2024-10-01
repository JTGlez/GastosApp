import { ExpensesPage } from '@/expenses/pages/ExpensesPage';
import { ExpensesViewPage } from '@/expenses/pages/ExpensesViewPage';
import { Navigate } from 'react-router-dom';

export const ExpensesRoutes = [
  {
    path: 'home',
    element: <ExpensesPage />,
  },
  {
    path: 'view',
    element: <ExpensesViewPage />,
  },
  {
    path: '*',
    element: <Navigate to="/expenses/home" replace />,
  },
];
