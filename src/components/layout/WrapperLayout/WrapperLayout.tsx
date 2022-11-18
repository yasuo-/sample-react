import React from 'react';

type Props = {
  children: React.ReactNode;
};
/**
 * WrapperLayout
 */
export const WrapperLayout: React.FC<Props> = ({ children }) => {
  return <>{children}</>;
};

WrapperLayout.displayName = 'WrapperLayout';
