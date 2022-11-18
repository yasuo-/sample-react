import { useRoutes, createBrowserRouter } from 'react-router-dom';

import { privateRoutes } from './private';
import { publicRoutes } from './public';

/**
 * AppRoutes
 * react-router-dom v6 <BrowserRouter>
 */
export const AppRoutes = () => {
  // auth logic
  const auth = false;
  const routes = auth ? privateRoutes : publicRoutes;
  const element = useRoutes([...routes]);

  return element;
};

/**
 * router
 * react-router-dom v6.4~ <RouterProvider>
 */
export const router = createBrowserRouter([...publicRoutes, ...privateRoutes]);
