import React from 'react';
import PropTypes from 'prop-types';
import './tooltip.scss';
/**
 * Primary UI component for user interaction
 */
export const Tooltip = ({ state, label, offset, ...props }) => {
    const mode = 'tooltip--' + state;
    const tooltipOffset = ( offset >= 10 && offset <= 90 ) ? { "--tooltip-offset": offset + "%" } : null;
    return (
        <div
            className={['tooltip', mode].join(' ')}
            style={tooltipOffset}
            {...props}
        >
            {label}
        </div>
    );
};
Tooltip.propTypes = {
    /**
     * variant of the button used
     */
    state: PropTypes.oneOf(['top', 'bottom', 'left', 'right']).isRequired,
    /**
     * Button contents
     */
    label: PropTypes.string.isRequired,
    /**
     * Zone Verticale
     */
     offset: PropTypes.number,
};
Tooltip.defaultProps = {
    state: 'top',
    onClick: undefined,
    offset: 50,
};