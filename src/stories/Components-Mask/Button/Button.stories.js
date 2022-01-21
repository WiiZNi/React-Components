import React from 'react';
import { withDesign } from 'storybook-addon-designs'
import {Interrogation as ImgInterogation} from '../../Foundation/Icons/assets/Regular';


import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  decorators: [withDesign],
  argTypes: {
    imgSide: {
      options: ['left', 'right'],
      control: { type: 'select' }
    },
    state: {
      options: ['primary', 'secondary', 'tertiary', 'disabled'],
      control: { type: 'radio' }
    }
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  Icon: ImgInterogation,
  label: 'Button',
  state: 'primary'
};
Primary.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/NSI5OOGJKLRyPppyK4o1bI/DS_Elements?node-id=48%3A5',
  },
};

export const Secondary = Template.bind({});
Secondary.args = {
  Icon: ImgInterogation,
  label: 'Button',
  state: 'secondary'
};
Secondary.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/NSI5OOGJKLRyPppyK4o1bI/DS_Elements?node-id=48%3A5',
  },
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  Icon: ImgInterogation,
  label: 'Button',
  state: 'tertiary'
};
Tertiary.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/NSI5OOGJKLRyPppyK4o1bI/DS_Elements?node-id=48%3A5',
  },
};

export const Disabled = Template.bind({});
Disabled.args = {
  Icon: ImgInterogation,
  label: 'Button',
  state: 'disabled'
};
Disabled.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/NSI5OOGJKLRyPppyK4o1bI/DS_Elements?node-id=48%3A5',
  },
};
