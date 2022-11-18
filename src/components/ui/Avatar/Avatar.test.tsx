/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-empty-function */
import React from 'react';

import { render } from '@testing-library/react';

import { Avatar } from './Avatar';

import type { RenderResult } from '@testing-library/react';

describe('Avatar Ui Components', () => {
  const DELAY = 600;
  let rendered: RenderResult;
  let image: HTMLElement | null = null;
  const globalImage = window.Image;

  beforeAll(() => {
    (window.Image as any) = class MockImage {
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
    rendered = render(<Avatar src="/test.jpg" alt={'alt text'} />);
  });

  it('displayName is Avatar', () => {
    expect(Avatar.displayName).toBe('Avatar');
  });

  it('should have alt text on the image', async () => {
    image = await rendered.findByAltText('alt text');
    expect(image).toBeInTheDocument();
  });
});
