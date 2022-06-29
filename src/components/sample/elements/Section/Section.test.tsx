import React from 'react';

import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { Section } from './Section';

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

describe('Section Element', () => {
  it('displayName is Section', () => {
    expect(Section.displayName).toBe('Section');
  });

  it('should take a snapshot', () => {
    const { asFragment } = renderWithRouter(
      <Section sectionTitle={'snapshot test'} to={'#'} linkText={'more'}>
        <p>snapshot test</p>
      </Section>
    );
    expect(asFragment).toMatchSnapshot();
  });

  it('renders Test Title', () => {
    renderWithRouter(
      <Section sectionTitle={'Renders Test Title'} to={'#'} linkText={'more'}>
        <p>renders test</p>
      </Section>
    );
    const screenElement = screen.getByText(/Renders Test Title/i);
    expect(screenElement).toBeInTheDocument();
  });

  it('Should Link Click Move Google', () => {
    renderWithRouter(
      <Section
        sectionTitle={'Renders Test Title'}
        to={'https://www.google.com'}
        linkText={'link to google'}
      >
        <p>renders test</p>
      </Section>
    );

    fireEvent.click(screen.getByText(/link to google/i));
    waitFor(() => {
      expect(window.location.href).toBe('https://www.google.com');
    });
  });
});
