import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './radiobutton.scss';

/**
 * These components are related to the exercice QCM.
 * They are useful when there is more than one choice to make
 */
export const RadioButton = ({ id, state, isChecked, ...props }) => {
  const mode = 'rbcontainer__radiobtn--' + state;
  return (
    <div  
    className="rbcontainer"
    {...props}>
        <input type='radio' className={['rbcontainer__radiobtn', mode].join(' ')} {...props} checked={isChecked} />
        <label className='rbcontainer__label' />  
    </div>
  );
}

RadioButton.propTypes = {
  /**
   * variant of the RadioButton used
   */
  state: PropTypes.oneOf(['default', 'pressed', 'disabled', 'selected', 'success', 'error']).isRequired,
  /**
  * Checked or not
  */
   isChecked: PropTypes.bool.isRequired,
};

RadioButton.defaultProps = {
  state: 'default',
  isChecked: true,
};
