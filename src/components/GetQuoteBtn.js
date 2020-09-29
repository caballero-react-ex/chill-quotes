import React from 'react';
import './GetQuoteBtn.scss';

function GetQuoteBtn({ onHandleClickGet, onDisabled }) {
  return (
    <button 
      className={onDisabled === true ? "GetQuote-btn-disabled GetQuote-btn" : "GetQuote-btn"}
      onClick={onHandleClickGet}
      disabled={onDisabled}
    >
      Get quote
    </button>
  )
}

export default GetQuoteBtn;