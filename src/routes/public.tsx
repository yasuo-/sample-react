import React from 'react';

import { Navigate } from 'react-router-dom';

import { PATH } from './path';

import type { RouteObject } from 'react-router-dom';

import { ErrorNotFound } from '@/components/error';
import { PublicLayout } from '@/components/layout';

import { loading } from '@/pages/Signin/Signin';
import { queryClient } from '@/providers/AppProvider';

const SignInPage = React.lazy(() => import('@/pages/Signin/Signin'));
const SignupPage = React.lazy(() => import('@/pages/Signup/Signup'));

const ContactInputPage = React.lazy(() => import('@/pages/Contact/Input'));
const ContactConfirmPage = React.lazy(() => import('@/pages/Contact/Confirm'));
const ContactCompletePage = React.lazy(() => import('@/pages/Contact/Complete'));
const TermsPage = React.lazy(() => import('@/pages/Terms/Terms'));
const PrivacyPage = React.lazy(() => import('@/pages/Terms/Privacy'));

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
      { path: PATH.SIGNIN, element: <SignInPage />, loader: loading(queryClient) },
      { path: PATH.SIGNUP, element: <SignupPage /> },
      { path: PATH.TERMS, element: <TermsPage /> },
      { path: PATH.PRIVACY, element: <PrivacyPage /> },
      {
        path: PATH.CONTACT,
        element: <ContactInputPage />,
        children: [
          { path: PATH.CONTACT_CONFIRM, element: <ContactConfirmPage /> },
          { path: PATH.CONTACT_COMPLETE, element: <ContactCompletePage /> },
        ],
      },
      // Error
      { path: PATH.ERROR, element: <></> },
      { path: '*', element: <Navigate to="." /> },
    ],
  },
];
