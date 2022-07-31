import React from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';
import { I18nextProvider } from 'react-i18next';

import { ErrorFallback } from '@/components/error';
import i18n from '@/lib/locale/i18n';

type AppProviderProps = {
  children: React.ReactNode;
};

// Create a client
const queryClient = new QueryClient();

/**
 * AppProvider
 * @param children
 * @returns {JSX.Element}
 */
export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  return (
    <I18nextProvider i18n={i18n}>
      <QueryClientProvider client={queryClient}>
        <ErrorBoundary FallbackComponent={ErrorFallback}>{children}</ErrorBoundary>
      </QueryClientProvider>
    </I18nextProvider>
  );
};
