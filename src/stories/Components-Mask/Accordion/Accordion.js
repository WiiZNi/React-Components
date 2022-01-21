import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './accordion.scss';

import { SimpleArrowBottom as ArrowBottom } from '../../Foundation/Icons/assets/Regular/Navigation';

export const Accordion = ({ label, lock, notif, ...props }) => {

    const [isExpanded, setExpanded] = useState(false);

    const toogleExpand = () => {
        setExpanded(!isExpanded)
    }

    return (

        <div
            className='accordion__btn-expanded'
            onClick={toogleExpand}
            {...props}
        >
            <div className='accordion__ctn-expanded'>
                <div className='accordion__content'>
                    {lock === true ? <ArrowBottom className='accordion__lock' color='currentColor' /> : ''}
                    {!lock && isExpanded ? 'Collapse' : 'Expand'}
                    {notif === true ? <div className='accordion__notif' color='currentColor' /> : ''}
                </div>
                <ArrowBottom className='accordion__arrow' color='currentColor' />
            </div>
            {!lock && isExpanded ? <div className="accordion__panel">
                <p>{label}</p>
            </div> : null}
        </div>

    );
}

Accordion.propTypes = {
    /**
     * sticker contents
     */
    label: PropTypes.string.isRequired,
    /**
     * lock si true
     */
    lock: PropTypes.bool.isRequired,
    /**
     * notif si true
     */
    notif: PropTypes.bool.isRequired,
};

Accordion.defaultProps = {
    lock: false,
    notif: false,
};