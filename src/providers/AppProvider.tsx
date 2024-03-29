import React from 'react';

import { ThemeProvider } from '@aws-amplify/ui-react';
import { QueryClient, QueryClientProvider, QueryErrorResetBoundary } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider, HelmetData } from 'react-helmet-async';
import { I18nextProvider } from 'react-i18next';
import { RecoilRoot } from 'recoil';

import { ErrorFallback } from '@/components/error';
import i18n from '@/lib/locale/i18n';
import theme from '@/theme';

interface AppProviderProps {
  children: React.ReactNode;
}

// Create a client
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
      staleTime: 10000,
    },
  },
});
const helmetContext = new HelmetData({});

/**
 * AppProvider
 * @param children
 * @returns {AppProviderProps}
 */
export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  return (
    <I18nextProvider i18n={i18n}>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider context={helmetContext}>
          <ThemeProvider theme={theme}>
            <RecoilRoot>
              <QueryErrorResetBoundary>
                <ErrorBoundary FallbackComponent={ErrorFallback}>{children}</ErrorBoundary>
              </QueryErrorResetBoundary>
            </RecoilRoot>
          </ThemeProvider>
        </HelmetProvider>
      </QueryClientProvider>
    </I18nextProvider>
  );
};
