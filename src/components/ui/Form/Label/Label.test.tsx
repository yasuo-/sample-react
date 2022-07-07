import React from 'react';

import { render } from '@testing-library/react';

import { Label } from './Label';

import type { RenderResult } from '@testing-library/react';

describe('Form Label Ui Components', () => {
  let rendered: RenderResult;
  let label: HTMLElement | null = null;

  beforeEach(() => {
    rendered = render(
      <div>
        <input id="control" type={'checkbox'} />
        <Label htmlFor="control">Label</Label>
      </div>
    );
  });

  it('displayName is Label', () => {
    expect(Label.displayName).toBe('Label');
  });

  it('should snapshot', () => {
    expect(rendered.asFragment()).toMatchSnapshot();
  });

  it('should have label text on the label', () => {
    label = rendered.queryByLabelText('Label');
    expect(label).toBeInTheDocument();
  });

  it('should render the label after it has loaded', () => {
    expect(rendered.queryByRole('label')).toBeInTheDocument();
  });
});
