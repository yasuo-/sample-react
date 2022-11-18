import React from 'react';

import { Navigate } from 'react-router-dom';

import { PATH } from '../path';

import type { RouteObject } from 'react-router-dom';

import { ErrorNotFound } from '@/components/error';
import { AuthGuardLayout } from '@/components/layout';
import { loading } from '@/pages/Signin/Signin';

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
    loader: loading,
    children: [
      { index: true, element: <>mypage</> },
      { path: PATH.ACCOUNT, element: <>accounts</> },
      // Error
      { path: PATH.ERROR, element: <></> },
      { path: '*', element: <Navigate to="." /> },
    ],
  },
];
