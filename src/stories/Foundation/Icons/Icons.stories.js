import React from 'react';
import './icons.stories.scss';

import { LegenderImage,  QuestionATrous, Sondage, RelierElements, ZoneInteret, RéponseOuverte, QuestionAudio, OrdonnerElements, GrouperElements, QuestionChoixMultiples, RecomposerTexte, ElementScorm, ReponseIllustre, ElementLti } from './assets/Regular/Exercice-type';


export default {
  title: 'Foundation/Icons',
  component: Icons,
  argTypes: {
    state: {
      options: ['primary', 'secondary', 'tertiary', 'disabled'],
      control: { type: 'radio' }
    }
  },
};

export const Icons = () => {
  return (
    <div className="icons">
      <h2>Regular</h2>
      <div className="exercice-type">
        <h4>Exercice-type</h4>
        <ul className="icons--showcase">
          <li>
            <LegenderImage color="#111" />
            <p>Legender Image</p>
          </li>
          <li>
            <QuestionATrous color="#111" />
          </li>
          <li>
            <Sondage color="#111" />
          </li>
          <li>
            <RelierElements color="#111" />
          </li>
          <li>
            <ZoneInteret color="#111" />
          </li>
          <li>
            <RéponseOuverte color="#111" />
          </li>
          <li>
            <QuestionAudio color="#111" />
          </li>
          <li>
            <OrdonnerElements color="#111" />
          </li>
          <li>
            <GrouperElements color="#111" />
          </li>
          <li>
            <QuestionChoixMultiples color="#111" />
          </li>
          <li>
            <RecomposerTexte color="#111" />
          </li>
          <li>
            <ElementScorm color="#111" />
          </li>
          <li>
            <ReponseIllustre color="#111" />
          </li>
          <li>
            <ElementLti color="#111" />
          </li>
        </ul>
      </div>
    </div>
  )
};