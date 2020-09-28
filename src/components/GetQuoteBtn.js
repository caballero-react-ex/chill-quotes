import React from 'react';
import './GetQuoteBtn.scss';

function GetQuoteBtn({onOpenModal}) {
  return (
    <button 
      className="GetQuote-btn"
      onClick={onOpenModal}
    >
      Get quote
    </button>
  )
}

export default GetQuoteBtn;