import React from 'react';

import { ScrollToTop } from '@/components/ui/Scroll';

interface Props {
  children: React.ReactNode;
}
/**
 * WrapperLayout
 */
export const WrapperLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <ScrollToTop />
      {children}
    </>
  );
};

WrapperLayout.displayName = 'WrapperLayout';
