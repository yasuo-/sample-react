import React, { Suspense } from 'react';

import { Flex } from '@aws-amplify/ui-react';
import { Outlet } from 'react-router-dom';

import { WrapperLayout } from '../WrapperLayout/WrapperLayout';

import { Footer } from '@/components/layout/Footer/Footer';
import { Header } from '@/components/layout/Header/Header';

/**
 * PublicLayout
 */
export const PublicLayout: React.FC = () => (
  <WrapperLayout>
    <Header />
    <Flex direction="column" justifyContent="center" alignItems="center">
      <Suspense fallback={<></>}>
        <Outlet />
      </Suspense>
    </Flex>
    <Footer />
  </WrapperLayout>
);
