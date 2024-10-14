import React from 'react';
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';

// Custom error fallback component
const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div role="alert">
      <h2>Something went wrong:</h2>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
};

// ErrorBoundary wrapper component
const ErrorBoundary = ({ children }) => {
  return (
    <ReactErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        
      }}
    >
      {children}
    </ReactErrorBoundary>
  );
};

export default ErrorBoundary;
