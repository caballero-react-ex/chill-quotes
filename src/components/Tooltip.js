import React from 'react';
import './Tooltip.scss';

function Tooltip({children}) {
  return (
    <div className="Tooltip">
      <div className="tooltip-arrow"></div>
      <div className="tooltip-inner">{children}</div>
    </div>
  )
}

export default Tooltip; 