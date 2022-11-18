import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Loader } from './Loader';

export default {
  title: 'Components/UI/Loader',
  component: Loader,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => (
  <div style={{ width: '100px', height: '100px' }}>
    <Loader {...args} />
  </div>
);

export const DefaultSize = Template.bind({});
export const SmallSize = Template.bind({});
export const LargeSize = Template.bind({});

DefaultSize.args = {
  size: 'large',
};

SmallSize.args = {
  size: 'small',
};

LargeSize.args = {
  size: 'small',
};
