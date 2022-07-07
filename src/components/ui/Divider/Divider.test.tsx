import React from 'react';

import { render, screen } from '@testing-library/react';

import { Divider } from './Divider';

describe('Divider Ui Components', () => {
  it('displayName is Divider', () => {
    expect(Divider.displayName).toBe('Divider');
  });

  it('should snapshot', () => {
    const { asFragment } = render(
      <div style={{ width: '100px', height: '5px', padding: '4px' }}>
        <p style={{ margin: '8px' }}>text</p>
        <Divider />
        <p style={{ margin: '8px' }}>text2</p>
      </div>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should have horizontal class name on the Divider', async () => {
    render(
      <div>
        <Divider />
      </div>
    );

    const divider = screen.queryByRole(/separator/i);
    expect(divider).toHaveClass('horizontal');
  });

  it('should have vertical class name on the Divider', async () => {
    render(
      <div style={{ width: '100px', height: '5px', padding: '4px' }}>
        <Divider orientation={'vertical'} />
      </div>
    );

    const divider = screen.queryByRole(/separator/i);
    expect(divider).toHaveClass('vertical');
  });
});
