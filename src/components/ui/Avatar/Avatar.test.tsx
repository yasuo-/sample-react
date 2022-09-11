import React from 'react';

import { render } from '@testing-library/react';

import { Avatar } from './Avatar';

import type { RenderResult } from '@testing-library/react';

describe('Avatar Ui Components', () => {
  const DELAY = 600;
  let rendered: RenderResult;
  let image: HTMLElement | null = null;
  const fallbackText = 'SS';
  const globalImage = window.Image;

  beforeAll(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window.Image as any) = class MockImage {
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      onload: () => void = () => {};
      src = '';

      constructor() {
        setTimeout(() => {
          this.onload();
        }, DELAY);
        return this;
      }
    };
  });

  afterAll(() => {
    window.Image = globalImage;
  });

  beforeEach(() => {
    rendered = render(<Avatar src="/test.jpg" alt={'alt text'} fallbackText={fallbackText} />);
  });

  it('displayName is Avatar', () => {
    expect(Avatar.displayName).toBe('Avatar');
  });

  it('should have alt text on the image', async () => {
    image = await rendered.findByAltText('alt text');
    expect(image).toBeInTheDocument();
  });

  it('should not render the image initially', () => {
    image = rendered.queryByRole('img');
    expect(image).not.toBeInTheDocument();
  });

  it('should render the image after it has loaded', async () => {
    image = await rendered.findByRole('img');
    expect(image).toBeInTheDocument();
  });
});

describe('Avatar Ui Components has fallback', () => {
  let rendered: RenderResult;
  let fallback: HTMLElement | null;

  beforeEach(() => {
    rendered = render(<Avatar fallbackText={'FT'} />);
  });

  it('should not fallback', async () => {
    fallback = await rendered.queryByText('FT');
    expect(fallback).not.toBeInTheDocument();
  });

  it('should render a fallback after the delay', async () => {
    fallback = rendered.queryByText('FT');
    expect(fallback).not.toBeInTheDocument();
    fallback = await rendered.findByText('FT');
    expect(fallback).toBeInTheDocument();
  });
});
