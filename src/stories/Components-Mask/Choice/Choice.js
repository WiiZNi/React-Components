import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CheckBox } from '../CheckBox/CheckBox'
import { RadioButton } from '../RadioButton/RadioButton'
import { Button } from '../Button/Button'
import { Test as ImgSuccess } from '../../Foundation/Icons/assets/Regular/Navigation';
import { Croix as ImgError } from '../../Foundation/Icons/assets/Regular/Navigation';
import {Sound as ImgSound} from '../../Foundation/Icons/assets/Regular/Player';
import './choice.scss';

/**
 * These components are related to the exercice QCM.
 * They are useful when there is more than one choice to make
 */
export const Choice = ({ id, ischeckbox, state, capture, label, audioUrl, imgUrl, ...props }) => {
  const [isChecked, setChecked] = useState(false);

  let mode = 'page__choicecontainer--' + state;
  if (isChecked && state === 'default')
    mode = 'page__choicecontainer--selected'; //prend la classe container__cbcontainer--selected si coché

  const toogleChecked = () => {
    setChecked(!isChecked);
  }

  return (
    <div
      onClick={toogleChecked}
      className={['page__choicecontainer', mode].join(' ')}
      {...props}>
      {ischeckbox &&    //On affiche CheckBox ou RadioButton selon la props booléen ischeckbox
        <CheckBox state={state} isChecked={isChecked} />
      }
      {!ischeckbox &&
        <RadioButton state={state} isChecked={isChecked} />
      }
      {
        imgUrl &&   //on affiche cette image qu'en mode mobile
        <img src={imgUrl} className='choicecontainer__imageCheck__media' color="currentColor" alt="icon" />
      }
  
      {audioUrl &&
      <Button state='secondary' Icon={ImgSound} imgSide='left' label='JOUER LE SON' className='choicecontainer__sound'/>
      }
      
      {
        imgUrl && //on affiche cette image qu'en mode non mobile
        <img src={imgUrl} className='choicecontainer__imageCheck' color="currentColor" alt="icon" />
      }
      {label &&
        <label className='choicecontainer__label'>{label}</label>
      }
      {state === 'success' &&
        <ImgSuccess className='choicecontainer__imgSuccess' color='currentColor' alt="icon" />
      }
      {state === 'error' &&
        <ImgError className='choicecontainer__imgError' color='currentColor' alt="icon" />
      }
    </div>
  );
};

Choice.propTypes = {
  /**
   * variant of the checkbox used
   */
  state: PropTypes.oneOf(['default', 'pressed', 'disabled', 'selected', 'success', 'error']).isRequired,
  /**
   * CheckBox contents
   */
  label: PropTypes.string.isRequired,
  /**
   *  Choice image path
   */
  imgUrl: PropTypes.string,
  /**
  * path to audio file
  */
  audioUrl: PropTypes.string,
  /**
  * true => Checkbox; false => RadioButton
  */
  ischeckbox: PropTypes.bool.isRequired,
};

Choice.defaultProps = {
  state: 'default',
  label: 'Une légende',
  ischeckbox: true,
};