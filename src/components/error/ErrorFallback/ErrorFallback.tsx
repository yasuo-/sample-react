import React from 'react';

interface ErrorFallbackProps {
  error: {
    name: Error | string;
    message: string;
  };
  resetErrorBoundary: (...args: never[]) => void;
}
/**
 * ErrorFallback
 * Fallback component for ErrorBoundary.
 * @param {Error} error Error object
 * @param resetErrorBoundary Reset error boundary
 * @constructor
 */
export const ErrorFallback: React.FC<ErrorFallbackProps> = ({ error, resetErrorBoundary }) => {
  return (
    <div>
      <h2>エラーが発生しました。</h2>
      <pre>{error.message}</pre>

      <button onClick={resetErrorBoundary}>リロード</button>
    </div>
  );
};
ErrorFallback.displayName = 'ErrorFallback';
