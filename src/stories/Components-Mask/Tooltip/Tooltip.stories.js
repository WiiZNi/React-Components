import React from 'react';
import { withDesign } from 'storybook-addon-designs'

import { Tooltip } from './Tooltip';

export default {
    title: 'Components/Tooltip',
    component: Tooltip,
    decorators: [withDesign],
    argTypes: {
        state: {
            options: ['top', 'bottom', 'left', 'right'],
            control: { type: 'radio' }
        },
        
    },
};

const Template = (args) => <Tooltip {...args} />;

export const Top = Template.bind({});
Top.args = {
    label: 'Un nouvel indice est disponible',
    state: 'top',
};
Top.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/NSI5OOGJKLRyPppyK4o1bI/DS_Elements?node-id=37%3A130',
    },
};

export const Bottom = Template.bind({});
Bottom.args = {
    label: 'Un nouvel indice est disponible',
    state: 'bottom'
};
Bottom.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/NSI5OOGJKLRyPppyK4o1bI/DS_Elements?node-id=37%3A130',
    },
};

export const Left = Template.bind({});
Left.args = {
    label: 'Nouvel indice disponible !',
    state: 'left'
};
Left.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/NSI5OOGJKLRyPppyK4o1bI/DS_Elements?node-id=37%3A130',
    },
};

export const Right = Template.bind({});
Right.args = {
    label: 'Nouvel indice disponible !',
    state: 'right'
};
Right.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/NSI5OOGJKLRyPppyK4o1bI/DS_Elements?node-id=37%3A130',
    },
};