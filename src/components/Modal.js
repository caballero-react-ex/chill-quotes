import React from 'react';
import './Modal.scss';
import { ReactComponent as QuotesIcon }  from '../assets/quotes-icon.svg';

function Modal({isActive, onClose, fetchState}) {
  
  // var item = items[Math.floor(Math.random()*items.length)];
  const sortedQuote = fetchState[Math.floor(Math.random()*fetchState.length)];
  console.log(sortedQuote);
  return (
    
    <>
      {isActive === true && 
        <>
          <div className="Modal">
            <div className="Modal-content">
              <QuotesIcon className="Modal-content-icon" />
            
                <div key={sortedQuote._id}>
                  <p className="Modal-content-quote">{sortedQuote.quoteText}</p>
                  <p className="Modal-content-author">&#8212; {sortedQuote.quoteAuthor}</p>
                </div>
            
              
            </div>
            <div className="Modal-btn-container">
              <button 
                className="Modal-btn"
                onClick={onClose}  
              >Close</button>
            </div>
          </div>
          <div className="Modal-bg" onClick={onClose} ></div>
        </>
      }
    </>
  )
}

export default Modal; 