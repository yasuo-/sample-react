import React from 'react';

import { render } from '@testing-library/react';

import { Loader } from './Loader';

describe('Loader Ui Components', () => {
  it('displayName is Loader', () => {
    expect(Loader.displayName).toBe('Loader');
  });

  it('should snapshot', () => {
    const { asFragment } = render(
      <div style={{ width: '100px', height: '100px' }}>
        <Loader />
      </div>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should have role img(svg)', () => {
    const rendered = render(<Loader size={'large'} />);
    expect(rendered.findByRole('img')).toBeDefined();
  });
});
