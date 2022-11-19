import React from 'react';

import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { Footer } from './Footer';

import { AppProvider } from '@/providers';

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

describe('Footer Components', () => {
  it('displayName is Footer', () => {
    expect(Footer.displayName).toBe('Footer');
  });

  it('should take a snapshot', () => {
    const { asFragment } = renderWithRouter(<Footer />);
    expect(asFragment).toMatchSnapshot();
  });

  it('renders Link terms', () => {
    renderWithRouter(<Footer />);
    const screenElement = screen.getByText(/利用規約/i);
    expect(screenElement).toBeInTheDocument();

    // const linkElement = screen.getByTestId('terms');
    // userEvent.click(linkElement);
    // expect(window.location.pathname).toEqual(PATH.TERMS);
  });

  it('renders text privacy', () => {
    renderWithRouter(<Footer />);
    const screenElement = screen.getByText(/プライバシーポリシー/i);
    expect(screenElement).toBeInTheDocument();

    //const linkElement = screen.getByTestId('privacy');
    // userEvent.click(linkElement);
    // expect(window.location.pathname).toEqual(PATH.PRIVACY);
  });

  it('renders text contact', () => {
    renderWithRouter(<Footer />);
    const screenElement = screen.getByText(/お問い合わせ/i);
    expect(screenElement).toBeInTheDocument();

    // const linkElement = screen.getByTestId('contact');
    // userEvent.click(linkElement);
    // expect(window.location.pathname).toEqual(PATH.CONTACT);
  });
});
