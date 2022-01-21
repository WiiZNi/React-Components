

import React, {useState} from 'react';
import { withDesign } from 'storybook-addon-designs'

import { Input } from './Input';
import './input.scss';

export default {
    title: 'Components/Input',
    component: Input,
    decorators: [withDesign],
    argTypes: {
        state: {
            options: [ 'default', 'error', 'success' ],
            control: { type: 'radio' }
        },
        value: {
            control: {
              disable: true,
            },
          },
    },
};

//const Template = (args) => <Input {...args} />;

const Template = args => {
    const [value, setValue] = useState(args.value ?? '');
    return (
        <Input
          {...args}
          onChange={(...params) => {
            args.onChange(...params);
            setValue(...params);
          }}
          value={value}
        />
    );
  };

export const Default = Template.bind({});
Default.args = {
    label: 'Tapez votre réponse ici',
    state: 'default',
};
Default.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/NSI5OOGJKLRyPppyK4o1bI/DS_Elements?node-id=135%3A182',
    },
};

export const Error = Template.bind({});
Error.args = {
    label: '5 ans',
    state: 'error',
};
Error.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/NSI5OOGJKLRyPppyK4o1bI/DS_Elements?node-id=135%3A182',
    },
};

export const Success = Template.bind({});
Success.args = {
    label: '1998',
    state: 'success',
};
Success.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/NSI5OOGJKLRyPppyK4o1bI/DS_Elements?node-id=135%3A182',
    },
};

