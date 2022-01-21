import React from 'react';
import { withDesign } from 'storybook-addon-designs'

import { Accordion } from './Accordion';

export default {
  title: 'Components/Accordion',
  component: Accordion,
  decorators: [withDesign],
  argTypes: {
    state: {
      options: ['active'],
    }
  },
};

const Template = (args) => <Accordion {...args} />;

export const Active = Template.bind({});
Active.args = {
  label: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.",
  state: 'active'
};
Active.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/kIzcjvaTvyEuu5gCqiuyn1/DS_Navigation?node-id=306%3A13351',
  },
};

