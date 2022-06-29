import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Footer } from './Footer';

/**
 * renderWithRouter
 * helper function to render component with router
 * @param component
 */
const renderWithRouter = (component: React.ReactNode) => {
  return {
    ...render(<MemoryRouter>{component}</MemoryRouter>),
  };
};

describe('Footer Element', () => {
  it('displayName is Footer', () => {
    expect(Footer.displayName).toBe('Footer');
  });

  it('should take a snapshot', () => {
    const { asFragment } = renderWithRouter(<Footer />);
    expect(asFragment).toMatchSnapshot();
  });

  it('renders All rights reserved', () => {
    renderWithRouter(<Footer />);
    const screenElement = screen.getByText(/All rights reserved/i);
    expect(screenElement).toBeInTheDocument();
  });
});
