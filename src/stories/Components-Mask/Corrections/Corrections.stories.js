import React from 'react';
import { withDesign } from 'storybook-addon-designs'

import { Corrections } from './Corrections';

export default {
  title: 'Components/Corrections',
  component: Corrections,
  decorators: [withDesign],
  argTypes: {
    state: {
      options: ['default', 'valid', 'invalid'],
    }
  },
};

const Template = (args) => <Corrections {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Il y a des mauvaises réponses',
  state: 'default'
};
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/kIzcjvaTvyEuu5gCqiuyn1/DS_Navigation?node-id=363%3A14812',
  },
};

export const Valid = Template.bind({});
Valid.args = {
  label: 'Bonnes réponses',
  state: 'valid'
};
Valid.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/kIzcjvaTvyEuu5gCqiuyn1/DS_Navigation?node-id=363%3A14812',
  },
};

export const Invalid = Template.bind({});
Invalid.args = {
  label: 'Il y a des mauvaises réponses',
  state: 'invalid'
};
Invalid.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/kIzcjvaTvyEuu5gCqiuyn1/DS_Navigation?node-id=363%3A14812',
  },
};

