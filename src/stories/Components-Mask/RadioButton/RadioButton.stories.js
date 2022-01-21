import React from 'react';
import { withDesign } from 'storybook-addon-designs'

import { RadioButton } from './RadioButton';

export default {
  title: 'Components/RadioButton',
  component: RadioButton,
  decorators: [withDesign],
  argTypes: {
    state: {
      options: ['default', 'pressed', 'selected', 'disabled', 'success', 'error'],
      control: { type: 'radio' }
    }
  },
};

const Template = (args) => <RadioButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  state: 'default'
};
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/NSI5OOGJKLRyPppyK4o1bI/DS_Elements?node-id=4454%3A3536',
  },
};

export const Pressed = Template.bind({});
Pressed.args = {  
  state: 'pressed'
};
Pressed.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/NSI5OOGJKLRyPppyK4o1bI/DS_Elements?node-id=4454%3A3536',
  },
};

export const Selected = Template.bind({});
Selected.args = {
  state: 'selected'
};
Selected.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/NSI5OOGJKLRyPppyK4o1bI/DS_Elements?node-id=4454%3A3536',
  },
};

export const Disabled = Template.bind({});
Disabled.args = {
  state: 'disabled'
};
Disabled.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/NSI5OOGJKLRyPppyK4o1bI/DS_Elements?node-id=4454%3A3536',
  },
};

export const Success = Template.bind({});
Success.args = {
  state: 'success'
};
Success.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/NSI5OOGJKLRyPppyK4o1bI/DS_Elements?node-id=4454%3A3536',
  },
};

export const Error = Template.bind({});
Error.args = {
  state: 'error'
};
Error.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/NSI5OOGJKLRyPppyK4o1bI/DS_Elements?node-id=4454%3A3536',
  },
};