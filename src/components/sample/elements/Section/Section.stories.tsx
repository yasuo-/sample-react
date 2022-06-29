import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Section } from './Section';

export default {
  title: 'Example/Elements/Section',
  component: Section,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Section>;

const Template: ComponentStory<typeof Section> = (args) => (
  <Section {...args}>
    <div>section inner</div>
  </Section>
);

export const Default = Template.bind({});
Default.args = {
  sectionTitle: 'Section Title',
  to: '/',
  linkText: 'Link Text',
};
