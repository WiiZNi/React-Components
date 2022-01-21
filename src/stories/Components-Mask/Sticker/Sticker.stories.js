import React from 'react';
import { withDesign } from 'storybook-addon-designs'

import { Sticker } from './Sticker';

export default {
  title: 'Components/Sticker',
  component: Sticker,
  decorators: [withDesign],
  argTypes: {
    state: {
      options: ['active', 'inactive', 'print', 'target', 'error', 'success', 'disabled'],
    }
  },
};

const Template = (args) => <Sticker {...args} />;

export const Active = Template.bind({});
Active.args = {
  label: 'Cnam',
  state: 'active'
};
Active.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/NSI5OOGJKLRyPppyK4o1bI/DS_Elements?node-id=76%3A211',
  },
};

export const Inactive = Template.bind({});
Inactive.args = {
  label: 'Cnam',
  state: 'inactive'
};
Inactive.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/NSI5OOGJKLRyPppyK4o1bI/DS_Elements?node-id=76%3A211',
  },
};

export const Print = Template.bind({});
Print.args = {
  label: 'Cnam',
  state: 'print'
};
Print.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/NSI5OOGJKLRyPppyK4o1bI/DS_Elements?node-id=76%3A211',
  },
};

export const Target = Template.bind({});
Target.args = {
  label: 'Cnam',
  state: 'target'
};
Target.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/NSI5OOGJKLRyPppyK4o1bI/DS_Elements?node-id=76%3A211',
  },
};

export const Error = Template.bind({});
Error.args = {
  label: 'Cnam',
  state: 'error'
};
Error.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/NSI5OOGJKLRyPppyK4o1bI/DS_Elements?node-id=76%3A211',
  },
};

export const Success = Template.bind({});
Success.args = {
  label: 'Cnam',
  state: 'success'
};
Success.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/NSI5OOGJKLRyPppyK4o1bI/DS_Elements?node-id=76%3A211',
  },
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'CNAM',
  state: 'disabled'
};
Disabled.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/NSI5OOGJKLRyPppyK4o1bI/DS_Elements?node-id=76%3A211',
  },
};
