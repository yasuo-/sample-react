import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';

import { Header } from './Header';

import { AppProvider } from '@/providers';
import { PATH } from '@/routes/path';

/**
 * renderWithRouter
 * helper function to render component with router
 * @param component
 */
const renderWithRouter = (component: React.ReactNode) => {
  return {
    ...render(
      <AppProvider>
        <MemoryRouter>{component}</MemoryRouter>
      </AppProvider>
    ),
  };
};

describe('Header Components', () => {
  it('displayName is Header', () => {
    expect(Header.displayName).toBe('Header');
  });

  it('should take a snapshot', () => {
    const { asFragment } = renderWithRouter(<Header siteTitle={'test title'} />);
    expect(asFragment).toMatchSnapshot();
  });

  it('renders test title', () => {
    renderWithRouter(<Header siteTitle={'test title'} />);
    const screenElement = screen.getByAltText(/test title/i);
    expect(screenElement).toBeInTheDocument();

    userEvent.click(screenElement);
    expect(window.location.pathname).toEqual(PATH.HOME);
  });
});
