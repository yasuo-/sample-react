import { Navigate } from 'react-router-dom';

import { PublicLayout } from '@/components/layout';

export const publicRoutes = [
  {
    path: '/',
    element: <PublicLayout />,
    children: [
      { path: '/', element: <></> },
      { path: '/error', element: <></> },
      { path: '*', element: <Navigate to="." /> },
    ],
  },
];
