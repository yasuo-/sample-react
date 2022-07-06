import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Label } from './Label';

export default {
  title: 'Components/UI/Form/Label',
  component: Label,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => <Label {...args}>{args.children}</Label>;

export const Default = Template.bind({});
export const SmallSizeLabel = Template.bind({});
export const LargeSizeLabel = Template.bind({});
export const PrimaryColorLabel = Template.bind({});
export const SecondaryColorLabel = Template.bind({});
export const BlackColorLabel = Template.bind({});

Default.args = {
  children: 'Default Label',
  htmlFor: 'label-id',
  size: 'md',
  color: 'black',
};

SmallSizeLabel.args = {
  children: 'SmallSize Label',
  htmlFor: 'label-id',
  size: 'sm',
  color: 'black',
};

LargeSizeLabel.args = {
  children: 'LargeSize Label',
  htmlFor: 'label-id',
  size: 'lg',
  color: 'black',
};

PrimaryColorLabel.args = {
  children: 'PrimaryColor Label',
  htmlFor: 'label-id',
  size: 'md',
  color: 'primary',
};

SecondaryColorLabel.args = {
  children: 'SecondaryColor Label',
  htmlFor: 'label-id',
  size: 'md',
  color: 'secondary',
};

BlackColorLabel.args = {
  children: 'BlackColor Label',
  htmlFor: 'label-id',
  size: 'md',
  color: 'black',
};
