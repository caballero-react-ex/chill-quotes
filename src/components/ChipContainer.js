import React from 'react';
import './ChipContainer.scss';
import queryData from '../data/dataQuery';
import Chip from './Chip';


function shuffleArray(array) {
  const shuffled = array.sort(()=>  {
    return .5 - Math.random();
  });
  return shuffled; 
};



function ChipContainer() {
  return (
    <main className="grid">
      <div className="grid-item Content">
      <div className="grid-item Content-chip-container">
        {shuffleArray(queryData).map(chip => 
          <Chip type={chip.type}>{chip.query}</Chip>
        )}
      </div>
      <button className="Content-btn">Get quote</button>
      </div>
    </main>
  )
}

export default ChipContainer;