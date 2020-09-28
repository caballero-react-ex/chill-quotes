import React, { useState } from 'react';
import './ChipContainer.scss';
import queryData from '../data/dataQuery';
import Chip from './Chip';
import GetQuoteBtn from './GetQuoteBtn';
import Modal from './Modal';



function ChipContainer() {

  // Modal State
  const [stateModal, setStateModal] = useState(false)

  // Get Quote Button
  function openModal() {
    setStateModal(true)
    document.body.style.overflow = 'hidden';
  }

  function closeBtn() {
    setStateModal(false)
    document.body.style.overflow = '';
  }

  // Chip State for select just one Chip at a time
  const [stateChip, setStateChip] = useState({
    activeIndex: null,
  })

  function chipToggle(index) {
    setStateChip({ 
      activeIndex: index,
    })
  }

  const { activeIndex } = stateChip;

  // Get the query back from Chip for the fetch()
  const [stateQuery, setStateQuery] = useState("")

  const getQuery = (query) => {
    setStateQuery(query)
  }



  

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
              returnQuery={getQuery}
            >
              {chip.query}
            </Chip>
          
          )}
        </div>
        <GetQuoteBtn 
          onOpenModal={openModal}
        />
      </div>
      <Modal 
        isActive={stateModal} 
        onClose={closeBtn}
        // query={stateQuery}
      />
    </main>
  )
}

export default ChipContainer;