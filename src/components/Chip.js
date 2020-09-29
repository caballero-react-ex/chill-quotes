import React from 'react';
import './Chip.scss';

function Chip({
  type, 
  index, 
  children, 
  onSelect, 
  isSelected,
  returnQuery
}) {

  return (
    <span 
      className={ (isSelected === index) ? "Chip Chip-isActive" : "Chip" } 
      onClick={() => {
        type === "author"
        ? returnQuery(children)
        : returnQuery({ genre: children });
        onSelect(index);
      }}
    >
      {type === "topic" 
        ? <span className="material-icons Chip-icon">stars</span>
        : <span className="material-icons Chip-icon">account_circle</span>
      }
      <p>{children}</p>
    </span>
  )
}

export default Chip;