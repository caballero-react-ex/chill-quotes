import React from 'react';
import './Modal.scss';
import { ReactComponent as QuotesIcon }  from '../assets/quotes-icon.svg';

function Modal() {
  return (
    <>
      <div className="Modal">
        <div className="Modal-content">
          <QuotesIcon className="Modal-content-icon" />
          <p className="Modal-content-quote">Wealth consists not in having great possessions, but in having few wants.</p>
          <p className="Modal-content-author">&#8212; Epictetus</p>
        </div>
        <div className="Modal-btn-container">
          <button className="Modal-btn">Close</button>
        </div>
      </div>
      <div className="Modal-bg">
      
      </div>
    </>
    
    
  )
}

export default Modal; 