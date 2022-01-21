import React from 'react';
import './Icons.css'

import { Ampoule, Question, Instructions } from './assets/Bold/24';
import { Croix } from './assets/Regular/24/Navigation'

/**
 * Primary UI component for user interaction
 */
export const Icons = ({ state, label, ...props }) => {
  return (
    <div className="Icons">
      <div>
        <Ampoule color="#EE0000" />
        <span>Ampoule</span>
      </div>
      <div>
        <Question color="#00EE00" />
        <span>Question</span>
      </div>
      <div>
        <Croix color="#0000EE" />
        <span>Croix</span>
      </div>
      <div>
        <Instructions color="#0000EE" />
        <span>Instructions</span>
      </div>
    </div>
  );
};