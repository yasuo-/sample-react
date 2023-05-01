import React from 'react';

import { FallbackProps } from 'react-error-boundary';

/**
 * ErrorFallback
 * Fallback component for ErrorBoundary.
 * @param {Error} error Error object
 * @param resetErrorBoundary Reset error boundary
 * @constructor
 */
export const ErrorFallback: React.FC<FallbackProps> = ({ error, resetErrorBoundary }) => {
  return (
    <div>
      <h2>エラーが発生しました。</h2>
      <pre>{error}</pre>

      <button onClick={resetErrorBoundary}>リロード</button>
    </div>
  );
};
ErrorFallback.displayName = 'ErrorFallback';
