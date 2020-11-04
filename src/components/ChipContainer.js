import React, { useState } from 'react';
import './ChipContainer.scss';
import queryData from '../data/dataQuery';
import Chip from './Chip';
import GetQuoteBtn from './GetQuoteBtn';
import Modal from './Modal';

import useFetch from './hooks/useFetch';



function ChipContainer() {
  ////////////////////////////
  // STATES 
  ////////////////////////////
 
  // Chip State for select just one Chip at a time
  const [stateChip, setStateChip] = useState({ activeIndex: null })
  const { activeIndex } = stateChip;

  const [ fetchState, setUrl] = useFetch(
    `https://quote-garden.herokuapp.com/api/v2/authors/Bruce%20Lee?page=1&limit=1`, 
    []
  );
  
  // console.log("fetchState:", fetchState)
  const [ getBtn, setGetBtn ] = useState(true);

  ////////////////////////////
  // FETCH() 
  ////////////////////////////
  // Get the query back from Chip for the fetch()
  const fetch = (query) => {
    if (typeof query === 'string' ) {
      // Fetch Data Author
      setUrl(`https://quote-garden.herokuapp.com/api/v2/authors/${query}?page=1&limit=100`);
    } else {
      // Fetch Data Genre
      const { genre } = query
      setUrl(`https://quote-garden.herokuapp.com/api/v2/genres/${genre}?limit=100`);
    }
  };

  
  
    
  function chipToggle(index) {
    setStateChip({ 
      activeIndex: index,
    })
    setGetBtn(false);
  }

  //// MODAL
  const modal = document.querySelector('.Modal-wrapper');

  function showModal() {
    document.body.style.overflow = 'hidden';
    modal.classList.add('open-modal');
  }

  function closeModal() {
    document.body.style.overflow = '';
    modal.classList.remove('open-modal');
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
              returnQuery={fetch}
            >
              {chip.query}
            </Chip>
          
          )}
        </div>
        <GetQuoteBtn 
          onHandleClickGet={showModal}
          onDisabled={getBtn}
        />
      </div>
      <Modal 
        onClose={closeModal}
        data={fetchState.data}
        isLoading={fetchState.isLoading}
      />
    </main>
  )
}

export default ChipContainer;