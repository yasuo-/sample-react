import { Navigate } from 'react-router-dom';

import { PublicLayout } from '@/components/layout';

export const publicRoutes = [
  {
    path: '/',
    element: <PublicLayout />,
    children: [
      { index: true, element: <>sss</> },
      { path: '/error', element: <></> },
      { path: '*', element: <Navigate to="." /> },
    ],
  },
];
