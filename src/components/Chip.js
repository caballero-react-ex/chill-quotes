import React from 'react';
import './Chip.scss';

function Chip({type, children}) {
  return (
    <span className="Chip">
      {type === "topic" 
        ? <span className="material-icons Chip-icon">stars</span>
        : <span className="material-icons Chip-icon">account_circle</span>
      }
      <p>{children}</p>
    </span>
  )
}

export default Chip;