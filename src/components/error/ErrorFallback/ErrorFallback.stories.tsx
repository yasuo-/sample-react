import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ErrorFallback } from './ErrorFallback';

export default {
  title: 'Components/Error/ErrorFallback',
  component: ErrorFallback,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof ErrorFallback>;

const Template: ComponentStory<typeof ErrorFallback> = (args) => <ErrorFallback {...args} />;

export const Default = Template.bind({});

Default.args = {
  error: {
    name: 'Error',
    message: 'An error has occurred.',
  },
};
