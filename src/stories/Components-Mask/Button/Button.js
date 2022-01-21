import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ state, label, imgSide, Icon, ...props }) => {
  const mode = 'button--' + state;
  const iconmode = 'button__icon--' + imgSide;
  return (
    <button
      type="button"
      className={['button', mode].join(' ')}
      {...props}
    >
      <div className="button__content">
        {imgSide === 'left' ? <Icon className={['button__icon', iconmode].join(' ')} color="currentColor" alt="icon" /> : ''   /* on affiche le label avant l'icone si imgSide==='right' */}

        {label}

        {imgSide === 'right' ? <Icon className={['button__icon', iconmode].join(' ')} color="currentColor" alt="icon" /> : ''   /* on affiche le label après l'icone si imgSide===left */}
      </div>
    </button>
  );
};

Button.propTypes = {
  /**
   * variant of the button used
   */
  state: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'disabled']).isRequired,
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * The icon is right or left side of label, imgSide = 'right' || 'left'
   */
  imgSide: PropTypes.string.isRequired,
  /**
   * Icon du button si left || right
   */
  Icon: PropTypes.func,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  state: 'primary',
  imgSide: undefined,
  onClick: undefined,
  Icon: undefined
};