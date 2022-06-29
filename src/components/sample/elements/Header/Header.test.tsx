import React from 'react';

import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { Header } from './Header';

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

describe('Header Element', () => {
  it('displayName is Header', () => {
    expect(Header.displayName).toBe('Header');
  });

  it('should take a snapshot', () => {
    const { asFragment } = renderWithRouter(<Header siteTitle={'test title'} />);
    expect(asFragment).toMatchSnapshot();
  });

  it('renders test title', () => {
    renderWithRouter(<Header siteTitle={'test title'} />);
    const screenElement = screen.getByText(/test title/i);
    expect(screenElement).toBeInTheDocument();
  });

  it('Should Link Click Move Google', () => {
    renderWithRouter(<Header siteTitle={'test title'} to={'https://www.google.com'} />);
    fireEvent.click(screen.getByText(/test title/i));

    waitFor(() => {
      expect(window.location.href).toBe('https://www.google.com');
    });
  });
});
