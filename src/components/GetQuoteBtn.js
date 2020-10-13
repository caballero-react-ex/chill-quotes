import React from 'react';
import './GetQuoteBtn.scss';

function GetQuoteBtn({ onHandleClickGet, onDisabled }) {
  return (
    <button 
      className={onDisabled === true ? "btn GetQuote-btn-disabled GetQuote-btn" : "btn GetQuote-btn"}
      onClick={onHandleClickGet}
      disabled={onDisabled}
    >
      Get quote
    </button>
  )
}

export default GetQuoteBtn;