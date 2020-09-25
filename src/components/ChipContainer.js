import React, { useState } from 'react';
import './ChipContainer.scss';
import queryData from '../data/dataQuery';
import Chip from './Chip';
import Modal from './Modal';



function ChipContainer() {

  // Modal State
  const [stateModal, setStateModal] = useState(false)
  // Chip State
  // const [stateChip, setStateChip] = useState({
  //   isActive: false,
  // })

  // Get Quote Button
  function openModal() {
    setStateModal(true)
    document.body.style.overflow = 'hidden';
  }

  function closeBtn() {
    setStateModal(false)
    document.body.style.overflow = '';
  }

  // Chip State
  const [stateChip, setStateChip] = useState({
    activeIndex: null,
  })

  function chipToggle(index) {
    setStateChip({ 
      activeIndex: index,
    })
  }


  const {activeIndex } = stateChip;

  return (
    <main className="grid">
      <div className="grid-item Content">
        <div className="grid-item Content-chip-container">
          {queryData.map((chip, i) => 
            <Chip 
              key={chip.id}
              index={i}
              type={chip.type} 
              isSelected={activeIndex}
              onSelect={chipToggle}
            >
              {chip.query}
            </Chip>
          )}
        </div>
        <button 
          className="Content-btn"
          onClick={openModal}
        >
          Get quote
        </button>
      </div>
      <Modal isActive={stateModal} onClose={closeBtn}/>
    </main>
  )
}

export default ChipContainer;