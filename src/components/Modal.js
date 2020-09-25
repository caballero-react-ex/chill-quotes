import React, { useEffect } from 'react';
import './Modal.scss';
import { ReactComponent as QuotesIcon }  from '../assets/quotes-icon.svg';

function Modal({isActive, onClose}) {

  // useEffect(() => {
  //   document.body.style.overflow = 'hidden';
  //   return ()=> document.body.style.overflow = 'unset';
  // }, [onClose]);

  return (
    <>
      {isActive === true && 
        <>
          <div className="Modal">
            <div className="Modal-content">
              <QuotesIcon className="Modal-content-icon" />
              <p className="Modal-content-quote">Wealth consists not in having great possessions, but in having few wants.</p>
              <p className="Modal-content-author">&#8212; Epictetus</p>
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