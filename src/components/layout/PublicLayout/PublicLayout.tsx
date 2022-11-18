import React, { Suspense } from 'react';

import { Flex } from '@aws-amplify/ui-react';
import { Outlet } from 'react-router-dom';

import { WrapperLayout } from '../WrapperLayout/WrapperLayout';

/**
 * PublicLayout
 */
export const PublicLayout: React.FC = () => (
  <WrapperLayout>
    <Flex direction="column" justifyContent="center" alignItems="center">
      <Suspense fallback={<></>}>
        <Outlet />
      </Suspense>
    </Flex>
  </WrapperLayout>
);
