import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Header } from './Header';

export default {
  title: 'Components/Layout/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Default = Template.bind({});

Default.args = {
  siteTitle: 'logo',
  src: 'https://via.placeholder.com/150',
  logoWidth: 150,
  logoHeight: 50,
};
