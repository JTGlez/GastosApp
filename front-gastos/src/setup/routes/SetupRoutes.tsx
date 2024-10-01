import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { SetupPage } from '../pages/SetupPage';

// Define el enrutador con las rutas específicas para la configuración
const setupRouter = createBrowserRouter([
  {
    path: '/setup',
    element: <SetupPage />,
  }
]);

export const SetupRoutes = () => {
  return (
    <RouterProvider router={setupRouter} />
  );
};
