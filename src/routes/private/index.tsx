import React from 'react';

import { Navigate } from 'react-router-dom';

import { PATH } from '../path';

import type { RouteObject } from 'react-router-dom';

import { ErrorNotFound } from '@/components/error';
import { AuthGuardLayout } from '@/components/layout';
import { fetchAccount } from '@/pages/Account/Account';
import { queryClient } from '@/providers';

const AccountLayout = React.lazy(() => import('@/pages/Account/Account'));
const AccountPage = React.lazy(() => import('@/pages/Account/AccountIndex'));
const AccountEditPage = React.lazy(() => import('@/pages/Account/AccountEdit'));
/**
 * interface RouteObject {
 *   path?: string;
 *   index?: boolean;
 *   children?: React.ReactNode;
 *   caseSensitive?: boolean;
 *   id?: string;
 *   loader?: LoaderFunction;
 *   action?: ActionFunction;
 *   element?: React.ReactNode | null;
 *   errorElement?: React.ReactNode | null;
 *   handle?: RouteObject["handle"];
 *   shouldRevalidate?: ShouldRevalidateFunction;
 * }
 */

export const privateRoutes: RouteObject[] = [
  {
    path: '/',
    element: <AuthGuardLayout />,
    errorElement: <ErrorNotFound />,
    loader: fetchAccount(queryClient),
    children: [
      { index: true, element: <>mypage</> },
      {
        path: PATH.ACCOUNT,
        element: <AccountLayout />,
        children: [
          { index: true, element: <AccountPage /> },
          { path: PATH.ACCOUNT_EDIT, element: <AccountEditPage /> },
        ],
      },
      // Error
      { path: PATH.ERROR, element: <></> },
      { path: '*', element: <Navigate to="." /> },
    ],
  },
];
