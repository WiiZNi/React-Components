import React from 'react';
import { withDesign } from 'storybook-addon-designs'

import { Accordion } from './Accordion';

export default {
  title: 'Compo-plus/Controls/Accordion',
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
  label: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.",
  state: 'active'
};
Active.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/NSI5OOGJKLRyPppyK4o1bI/DS_Elements?node-id=76%3A211',
  },
};
