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
  return useRoutes([...routes]);
};

/**
 * router
 * react-router-dom v6.4~ <RouterProvider>
 */
export const router = createBrowserRouter([...publicRoutes, ...privateRoutes]);
