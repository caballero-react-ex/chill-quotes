import React from 'react';
import './Modal.scss';
import { ReactComponent as QuotesIcon }  from '../assets/quotes-icon.svg';

function Modal({isActive, onClose, fetchState}) {
  
  // console.log(fetchState.data);
  return (
    
    <>
      {isActive === true && 
        <>
          <div className="Modal">
            <div className="Modal-content">
              <QuotesIcon className="Modal-content-icon" />
              {fetchState.data.map(quote => (
                <div key={quote._id}>
                  <p className="Modal-content-quote">{quote.quoteText}</p>
                  <p className="Modal-content-author">&#8212; {quote.quoteAuthor}</p>
                </div>
              ))}
              
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