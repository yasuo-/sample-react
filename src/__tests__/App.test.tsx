import React from 'react';

import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';

import App from '@/App';

const LOCALHOST = 'http://localhost/';

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

describe('App', () => {
  it('renders learn react link', () => {
    renderWithRouter(<App />);
    const linkElement = screen.getByText(/Learn React/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('should Page Title', () => {
    renderWithRouter(<App />);
    // 現在page titleが画面に表示されているか
    const pageTitle = screen.queryAllByText('site title');
    expect(pageTitle.length).toBe(1);
  });

  it('should click site title link ', () => {
    renderWithRouter(<App />);
    const linkElement = screen.getByText(/site title/i);
    userEvent.click(linkElement);
    waitFor(() => {
      expect(window.location.href).toBe(LOCALHOST);
    });
  });

  it('should click more link ', () => {
    renderWithRouter(<App />);
    const linkElement = screen.getByText(/more/i);
    userEvent.click(linkElement);
    waitFor(() => {
      expect(window.location.href).toBe(LOCALHOST);
    });
  });

  it('should click Learn React Link', () => {
    renderWithRouter(<App />);
    const linkElement = screen.getByText(/Learn React/i);
    userEvent.click(linkElement);
    waitFor(() => {
      expect(window.location.href).toBe('https://reactjs.org/');
    });
  });

  it('should click link', () => {
    renderWithRouter(<App />);
    const linkElement = screen.getByText(/Vite Docs/i);
    userEvent.click(linkElement);
    waitFor(() => {
      expect(window.location.href).toBe('https://vitejs.dev/guide/features.html');
    });
  });

  it('click count button', () => {
    renderWithRouter(<App />);
    userEvent.click(screen.getByTestId('count-button'));
    waitFor(() => {
      expect(screen.getByTestId('count-button').textContent).toBe('1');
    });
  });
});
