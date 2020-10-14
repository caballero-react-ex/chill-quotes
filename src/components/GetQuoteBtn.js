import React from 'react';
import './GetQuoteBtn.scss';

function GetQuoteBtn({ onHandleClickGet, onDisabled }) {
  return (
    <div className="GetQuote-btn-bg">
      <button 
      className={onDisabled === true ? "btn GetQuote-btn-disabled GetQuote-btn" : "btn GetQuote-btn"}
      onClick={onHandleClickGet}
      disabled={onDisabled}
      >
        Get quote
      </button>
    </div>
  )
}

export default GetQuoteBtn;