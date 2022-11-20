import React from 'react';

import { Navigate } from 'react-router-dom';

import { PATH } from './path';

import type { RouteObject } from 'react-router-dom';

import { ErrorNotFound } from '@/components/error';
import { PublicLayout } from '@/components/layout';

import { loading } from '@/pages/Signin/Signin';
import { queryClient } from '@/providers/AppProvider';

const SigninPage = React.lazy(() => import('@/pages/Signin/Signin'));
const SignupPage = React.lazy(() => import('@/pages/Signup/Signup'));
const SignupIndexPage = React.lazy(() => import('@/pages/Signup/SignupIndex'));

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

export const publicRoutes: RouteObject[] = [
  {
    path: '/',
    element: <PublicLayout />,
    errorElement: <ErrorNotFound />,
    loader: loading(queryClient),
    id: 'root',
    children: [
      { index: true, element: <>sss</> },
      { path: PATH.SIGNIN, element: <SigninPage />, loader: loading(queryClient) },
      {
        path: PATH.SIGNUP,
        element: <SignupPage />,
        children: [{ index: true, element: <SignupIndexPage /> }],
      },
      // Error
      { path: PATH.ERROR, element: <></> },
      { path: '*', element: <Navigate to="." /> },
    ],
  },
];
