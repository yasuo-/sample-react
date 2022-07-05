import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Avatar } from './Avatar';

export default {
  title: 'Components/UI/Avatar',
  component: Avatar,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
export const SmallSizeAvatar = Template.bind({});
export const LargeSizeAvatar = Template.bind({});
export const FallbackAvatar = Template.bind({});
export const FallbackPrimaryColorAvatar = Template.bind({});
export const FallbackSecondaryColorAvatar = Template.bind({});

Default.args = {
  src: 'https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=256&h=256',
  alt: 'Default Avatar',
  size: 'md',
  backgroundColor: 'white',
  fallbackText: 'DT',
};

SmallSizeAvatar.args = {
  src: 'https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=256&h=256',
  alt: 'Small Size Avatar',
  size: 'sm',
  backgroundColor: 'white',
  fallbackText: 'DT',
};

LargeSizeAvatar.args = {
  src: 'https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=256&h=256',
  alt: 'Large Size Avatar',
  size: 'lg',
  backgroundColor: 'white',
  fallbackText: 'DT',
};

FallbackAvatar.args = {
  size: 'md',
  backgroundColor: 'white',
  fallbackText: 'FB',
};

FallbackPrimaryColorAvatar.args = {
  size: 'md',
  backgroundColor: 'primary',
  fallbackText: 'FB',
};

FallbackSecondaryColorAvatar.args = {
  size: 'md',
  backgroundColor: 'secondary',
  fallbackText: 'FB',
};
