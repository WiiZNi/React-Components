import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { DoubleArrowLeft as ImgLeftArrow } from '../../Foundation/Icons/assets/Regular/Navigation/';
import './sidebarButton.scss';

/**
 * Sidebar Button
 */
export const SidebarButton = ({label, ...props }) => {
  const [sbopened, setsbOpened] = useState(true); //sbopened===true => boutton ouvert
                                                  //sbopened===false => boutton fermé
  const toggleSidebarButton = () => { 
    if (sbopened === true)
      setsbOpened(false);
    else
      setsbOpened(true);
  }

  return (
    <button
      onClick={toggleSidebarButton}
      type="button"
      className={['sidebarButton', sbopened ? '' : 'sidebarButton--closed'].join(' ') }
      {...props}
    >
      {sbopened && <span onClick={toggleSidebarButton} className='sidebarButton__label'>{label}</span>}
      <ImgLeftArrow onClick={toggleSidebarButton} className={['sidebarButton__imgLeftArrow', sbopened ? '' : 'sidebarButton__imgLeftArrow--closed'].join(' ') } color="currentColor" alt="icon" />
    </button>
  );
};


SidebarButton.propTypes = {
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

SidebarButton.defaultProps = {
  label: 'REPLIER',
};