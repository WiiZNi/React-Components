import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../../../Components-Mask/Button/Button';
import './accordion.scss';

export const Accordion = ({ state, label, ...props }) => {
    const mode = 'accordion--' + state;

    const [isExpanded, setExpanded] = useState(false);

    const toogleExpand = () => {
        if(isExpanded === true){
            setExpanded(false)
        }else{
            setExpanded(true)
        }
    }

    return (
        <div className={['accordion', mode].join(' ')}>
            <Button
                onClick={toogleExpand}
                state={isExpanded ? 'secondary' : 'primary'}
                label={isExpanded ? 'Collapse' : 'Expand'}
                {...props}
            />
            {isExpanded ? <div className="panel">
                <p>{label}</p>
            </div> : null}
        </div>
    );
}




Accordion.propTypes = {
    /**
     * variant of the sticker used
     */
    state: PropTypes.oneOf(['active']).isRequired,
    /**
     * sticker contents
     */
    label: PropTypes.string.isRequired,
};

Accordion.defaultProps = {
    state: 'active',
};