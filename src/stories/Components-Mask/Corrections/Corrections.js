import React from 'react';
import PropTypes from 'prop-types';
import './corrections.scss';
import { Button } from "../Button/Button";

/**
 * Some components usefull for corrections
 */
export const Corrections = ({ state, label, previousBtn, ...props }) => {
  let btnState;
  const mode = 'corrections--' + state;

  if (state==='default')      //class css du Bouton
    btnState='secondary';
  else
    btnState='primary';
  
  return (
    <div
      className={['corrections', mode].join(' ')}
      {...props}
    >
      {previousBtn &&
      <div className='corrections__btn_previous'>
        <Button

          state={btnState}
          label='PRECEDENT'           /*  label du Button */
          {...props}
        >
        </Button>
      </div>
      }
      <span className='corrections__label'>{label}</span>    {/*  label de Corrections */}
      <div className='corrections__btn_next'>
        <Button

          state={btnState}
          label='SUIVANT'           /*  label du Button */
          {...props}
        >
        </Button>
      </div>
    </div>
  );
};

Corrections.propTypes = {
  /**
   * variant of the Corrections used
   */
  state: PropTypes.oneOf(['default', 'valid', 'invalid']).isRequired,
  /**
   * Corrections contents
   */
  label: PropTypes.string.isRequired,
  /**
   * If button "précédent" is present
   */
  previousBtn: PropTypes.bool.isRequired,
};

Corrections.defaultProps = {
  state: 'default',
  label: 'Bonnes réponses',
  previousBtn: false
};