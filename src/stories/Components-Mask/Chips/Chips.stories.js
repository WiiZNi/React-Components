import React from 'react';
import { withDesign } from 'storybook-addon-designs'
import {Interrogation as ImgInterogation} from '../../Foundation/Icons/assets/Regular';

import { Chips } from './Chips';

export default {
  title: 'Components/Chips',
  component: Chips,
  decorators: [withDesign],
  argTypes: {
    imgSide: {
      options: ['left', 'right'],
      control: { type: 'select' }
    }
  },
};

const Template = (args) => <Chips {...args} />;

export const WithIcon = Template.bind({});
WithIcon.args = {
  Icon: ImgInterogation,
};
WithIcon.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/NSI5OOGJKLRyPppyK4o1bI/DS_Elements?node-id=37%3A305',
  },
};

export const WithOutIcon = Template.bind({});
WithOutIcon.args = {
  withIcon: false,
};
WithOutIcon.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/NSI5OOGJKLRyPppyK4o1bI/DS_Elements?node-id=37%3A305',
  },
};


export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
Disabled.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/NSI5OOGJKLRyPppyK4o1bI/DS_Elements?node-id=37%3A305',
  },
};






