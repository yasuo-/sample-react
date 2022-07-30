import React, { Suspense } from 'react';

import { Outlet } from 'react-router-dom';

/**
 * PublicLayout
 */
export const PublicLayout: React.FC = () => (
  <Suspense fallback={<></>}>
    <Outlet />
  </Suspense>
);
