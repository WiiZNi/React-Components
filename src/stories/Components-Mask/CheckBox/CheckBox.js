import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './checkbox.scss';

/**
 * These components are related to the exercice QCM.
 * They are useful when there is more than one choice to make
 */
export const CheckBox = ({ id, state, isChecked, ...props }) => {
  const mode = 'cbcontainer__checkbox--' + state;
  return (
    <div  
    className='cbcontainer'
    {...props}>
        <input type='checkbox' className={['cbcontainer__checkbox', mode].join(' ')} checked={isChecked} />
        <label className='cbcontainer__label' />
    </div>
  );
}

CheckBox.propTypes = {
  /**
   * variant of the CheckBox used
   */
  state: PropTypes.oneOf(['default', 'pressed', 'disabled', 'selected', 'success', 'error']).isRequired,
  /**
  * is Checked or not
  */
   isChecked: PropTypes.bool.isRequired,
};

CheckBox.defaultProps = {
  state: 'default',
  isChecked: true,
};
