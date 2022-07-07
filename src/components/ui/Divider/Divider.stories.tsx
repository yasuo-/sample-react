import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Divider } from './Divider';

export default {
  title: 'Components/UI/Divider',
  component: Divider,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Divider>;

const Template: ComponentStory<typeof Divider> = (args) => (
  <div style={{ width: '100px', height: '5px', padding: '4px' }}>
    <p style={{ margin: '8px' }}>text</p>
    <Divider {...args} />
    <p style={{ margin: '8px' }}>text2</p>
  </div>
);

const VerticalTemplate: ComponentStory<typeof Divider> = (args) => (
  <div style={{ display: 'flex', width: '200px', height: '100px', padding: '4px' }}>
    <p style={{ margin: '8px' }}>text</p>
    <Divider {...args} />
    <p style={{ margin: '8px' }}>text2</p>
  </div>
);

export const Default = Template.bind({});
export const VerticalDivider = VerticalTemplate.bind({});
export const PrimaryColorAvatar = Template.bind({});
export const SecondaryColorAvatar = Template.bind({});

Default.args = {
  orientation: 'horizontal',
  color: 'black',
};

VerticalDivider.args = {
  orientation: 'vertical',
  color: 'black',
};

PrimaryColorAvatar.args = {
  orientation: 'horizontal',
  color: 'primary',
};

SecondaryColorAvatar.args = {
  orientation: 'horizontal',
  color: 'secondary',
};
