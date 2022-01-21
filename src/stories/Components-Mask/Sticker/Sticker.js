import React from 'react';
import PropTypes from 'prop-types';
import {Drag as ImgDrag} from '../../Foundation/Icons/assets/Bold/Navigation';
import {Croix as ImgError} from '../../Foundation/Icons/assets/Regular/Navigation';
import {Test as ImgSuccess} from '../../Foundation/Icons/assets/Regular/Navigation';

import './sticker.scss';

export const Sticker = ({ state, label, ...props }) => {
    const mode = 'sticker--' + state;
    return (
      <div className={['sticker', mode].join(' ')} {...props}>
          {(state==='active' || state==='inactive')&&        //affiche l'icone si state === 'active'||'inactive'
            <ImgDrag className='sticker__icon' color="currentColor" alt="sticker__icon" />
          }
          {state==='error' &&                                 //affiche l'icone si state === 'error'
            <ImgError className='sticker__icon' color="currentColor" alt="sticker__icon" />
          }
          {state==='success' &&                               //affiche l'icone si state === 'success'
            <ImgSuccess className='sticker__icon' color="currentColor" alt="sticker__icon" />
          } 
          {label}
      </div>
    );
  };

  Sticker.propTypes = {
    /**
     * variant of the sticker used
     */
    state: PropTypes.oneOf(['active', 'inactive', 'print', 'target', 'error', 'success', 'disabled']).isRequired,
    /**
     * sticker contents
     */
    label: PropTypes.string.isRequired,
  };
  
  Sticker.defaultProps = {
    state: 'active',
  };