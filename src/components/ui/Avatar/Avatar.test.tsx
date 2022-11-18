/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-empty-function */
import React from 'react';

import { render } from '@testing-library/react';

import { Avatar } from './Avatar';

describe('Avatar Ui Components', () => {
  it('displayName is Avatar', () => {
    expect(Avatar.displayName).toBe('Avatar');
  });

  it('should have alt text on the image', async () => {
    const rendered = render(<Avatar src="/test.jpg" alt={'alt text'} />);
    const image = await rendered.findByAltText('alt text');
    expect(image).toBeInTheDocument();
  });

  it('should have not src ', async () => {
    const rendered = render(<Avatar src={undefined} />);
    expect(rendered.findByRole('svg')).toBeDefined();
  });
});
