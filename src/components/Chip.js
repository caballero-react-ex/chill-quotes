import React from 'react';
import PropTypes from 'prop-types';
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
    <button 
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
    </button>
  )
}

export default Chip;

Chip.propTypes = {
  type: PropTypes.oneOf(['topic', 'author']).isRequired, 
  index: PropTypes.number.isRequired, 
  children: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
  returnQuery: PropTypes.func.isRequired
}