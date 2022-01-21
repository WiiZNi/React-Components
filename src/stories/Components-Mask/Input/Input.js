import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './input.scss';
import { Croix as IconError } from '../../Foundation/Icons/assets/Regular/Navigation';
import { Test as IconSuccess } from '../../Foundation/Icons/assets/Regular/Navigation';

/**
 * Primary UI component for user interaction
 */
export const Input = ({ state, label, textarea, disabled, value, onChange, ...props }) => {
    const modeInput = 'input--' + state;

    if (state === 'error' || state === 'success') {
        if (textarea) {
            return (
                <div
                    className={['input', 'input--textarea', modeInput].join(' ')}
                    {...props}
                >
                    {state === 'error' && <IconError className='input__icon input__icon--error' color='currentColor' />}
                    {state === 'success' && <IconSuccess className='input__icon input__icon--success' color='currentColor' />}
                    <span className='input__label'>{label}</span>
                </div>
            )
        } else {
            return (
                <div
                    className={['input', modeInput].join(' ')}
                    {...props}
                >
                    {state === 'error' && <IconError className='input__icon input__icon--error' color='currentColor' />}
                    {state === 'success' && <IconSuccess className='input__icon input__icon--success' color='currentColor' />}
                    <span className='input__label'>{label}</span>
                </div>
            )
        }
    }
    else {
        if (textarea) {
            return (
                <textarea
                    onChange={e => onChange(e.target.value)}
                    placeholder={label}
                    disabled={disabled ? true : false}
                    className={['input', 'input--textarea', modeInput, value ? "input--filled" : ""].join(' ')}
                    {...props}
                />
            )
        }
        else {
            return (
                <input
                    type="text"
                    onChange={e => onChange(e.target.value)}
                    placeholder={label}
                    disabled={disabled ? true : false}
                    className={['input', modeInput, value ? "input--filled" : ""].join(' ')}
                    {...props}
                />
            )
        }
    }
};

Input.propTypes = {
    /**
     * variant of the button used
     */
    state: PropTypes.oneOf(['default', 'error', 'success']).isRequired,
    /**
     * Button contents
     */
    label: PropTypes.string.isRequired,
    /**
     * Valeur de l'Input
     */
    value: PropTypes.string,
    /**
     * textarea===true on affiche un textarea
     * textarea===false on affiche un input
     */
    textarea: PropTypes.bool.isRequired,
    /**
     * disabled or not
     */
    disabled: PropTypes.bool,
    /**
     * Optional click handler
     */
    onChange: PropTypes.func,
};

Input.defaultProps = {
    state: 'default',
    textarea: false,
};