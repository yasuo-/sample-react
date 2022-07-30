import React from 'react';

import { render, screen } from '@testing-library/react';

import { ErrorFallback } from './ErrorFallback';

const error = {
  name: 'Error',
  message: 'An error has occurred.',
};
const resetErrorBoundary = () => jest.fn();

describe('ErrorFallback Ui Components', () => {
  it('displayName is ErrorFallback', () => {
    expect(ErrorFallback.displayName).toBe('ErrorFallback');
  });

  it('should snapshot', () => {
    const { asFragment } = render(
      <ErrorFallback error={error} resetErrorBoundary={resetErrorBoundary} />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders error message text', async () => {
    render(<ErrorFallback error={error} resetErrorBoundary={resetErrorBoundary} />);

    expect(screen.getByText(error.message)).toBeInTheDocument();
  });
});
