import React from 'react';

import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider, HelmetData } from 'react-helmet-async';
import { I18nextProvider } from 'react-i18next';

import { ErrorFallback } from '@/components/error';
import i18n from '@/lib/locale/i18n';

type AppProviderProps = {
  children: React.ReactNode;
};

const helmetContext = new HelmetData({});

/**
 * AppProvider
 * @param children
 * @returns {JSX.Element}
 */
export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  return (
    <I18nextProvider i18n={i18n}>
      <HelmetProvider context={helmetContext}>
        <ErrorBoundary FallbackComponent={ErrorFallback}>{children}</ErrorBoundary>
      </HelmetProvider>
    </I18nextProvider>
  );
};
