import React from 'react';
import PropTypes from 'prop-types';
import './chips.scss';

/**
 * Chips are compact elements that represent an input (e.g in a multi-select), attribute (e.g. a label), or action (e.g. a filter).
 */
export const Chips = ({label, imgSide, disabled, Icon, ...props }) => {
  const mode = disabled ? 'chips--disabled' : '';
  const iconmode = 'chips__icon--' + imgSide;
  return (
    <div
      className={['chips', mode].join(' ')}
      {...props}
    >
      <div className="chips__content">
        {imgSide === 'right' ? label : ''   /* on affiche le label avant l'icone si imgSide==='right' */ }

        { Icon && <Icon className={['chips__icon', iconmode].join(' ')} color="currentColor" alt="icon" /> }
        
        {imgSide === 'left' ? label : ''   /* on affiche le label après l'icone si imgSide===left */ }
      </div>
    </div>
  );
};

Chips.propTypes = {
  /**
   * Chip contents
   */
  label: PropTypes.string.isRequired,
  /**
   * The icon is right or left side of label, imgSide = 'right' || 'left'
   */
  imgSide: PropTypes.string.isRequired,
  /**
   * The icon 
   */
  Icon: PropTypes.func,
   /**
   * Disabled or not
   */
  disabled: PropTypes.bool.isRequired,
};

Chips.defaultProps = {
  imgSide: 'left',
  label:  'Phase 3',
  disabled: false
};