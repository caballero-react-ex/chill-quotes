import React, { useState, useEffect } from 'react';
import './ChipContainer.scss';
import queryData from '../data/dataQuery';
import Chip from './Chip';
import Modal from './Modal';



function ChipContainer() {

  // Modal State
  const [stateModal, setStateModal] = useState(false)

  function handleClick() {
    setStateModal(true)
    document.body.style.overflow = 'hidden';
  }

  function closeBtn() {
    setStateModal(false)
    document.body.style.overflow = '';
  }

  return (
    <main className="grid">
      <div className="grid-item Content">
        <div className="grid-item Content-chip-container">
          {queryData.map(chip => 
            <Chip type={chip.type}>{chip.query}</Chip>
          )}
        </div>
        <button 
          className="Content-btn"
          onClick={handleClick}
        >
          Get quote
        </button>
      </div>
      <Modal isActive={stateModal} onClose={closeBtn}/>
    </main>
  )
}

export default ChipContainer;