import React, { Suspense } from 'react';

import { Outlet } from 'react-router-dom';

import { WrapperLayout } from '../WrapperLayout/WrapperLayout';

import { AuthGuardProvider } from '@/providers/AuthGuardProvider';

/**
 * AuthGuardLayout
 */
export const AuthGuardLayout: React.FC = () => (
  <AuthGuardProvider>
    <WrapperLayout>
      <Suspense fallback={<></>}>
        <Outlet />
      </Suspense>
    </WrapperLayout>
  </AuthGuardProvider>
);
