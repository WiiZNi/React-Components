import React from 'react';
import { withDesign } from 'storybook-addon-designs'
import { SidebarButton } from './SidebarButton';

export default {
  title: 'Components/SidebarButton',
  component: SidebarButton,
  decorators: [withDesign],
  argTypes: {
    state: {
      options: ['default'],
      control: { type: 'radio' }
    }
  },
};

const Template = (args) => <SidebarButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  state: 'default'
};
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/NSI5OOGJKLRyPppyK4o1bI/DS_Elements?node-id=3799%3A3618',
  },
};
