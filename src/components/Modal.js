import React, { useEffect } from 'react';
import './Modal.scss';
import { ReactComponent as QuotesIcon }  from '../assets/quotes-icon.svg';
import { copyCodeToClipboard } from '../components/utils/Utils';

function Modal({onClose, fetchState}) {

 
  const sortedQuote = fetchState[Math.floor(Math.random()*fetchState.length)];

  // init state for sortedQuote, so it doesnt give an "undefined" error
  const init = {
    id: sortedQuote === undefined ? 1 : sortedQuote._id, 
    quote: sortedQuote === undefined ? "text" : sortedQuote.quoteText,
    author: sortedQuote === undefined ? "author" : sortedQuote.quoteAuthor,
  }

  const web = "caballero-react-ex.github.io/chill-quotes";

  function handleCopyBtn() {
    copyCodeToClipboard('.copyContent');
    alert("copied")
  }
  
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
    
  }, [onClose]);



  return (
    <div className="Modal-wrapper">
      <div className="Modal">
        <div className="Modal-btn-container-top">
          <span 
            className="material-icons btn-icon"
            onClick={onClose} 
          >
            close
          </span>
        </div>

        <div className="Modal-content">
          <QuotesIcon className="Modal-content-icon" />
          <div key={init.id} className="copyContent">
            <p className="Modal-content-quote">{init.quote}</p>
            <p className="Modal-content-author">&#8212; {init.author}</p>
          </div>
        </div>

        <div className="Modal-btn-container-bottom">
          <button
            className="btn-text" 
            onClick={handleCopyBtn}
          >
            Copy
          </button>
          <button className="btn-text">
            <a 
              href={
                `
                https://twitter.com/intent/tweet?text=From%20${web}%20“${init.quote}”%20—%20${init.author}&hashtags=ChillQuotes
                `
              }
              data-url="https://dev.twitter.com/web/tweet-button"
              data-hashtags="example,demo"
              data-size="large"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tweet it
            </a>
          </button>
        </div>

      </div> 
      <div className="Modal-bg" onClick={onClose}></div>
    </div>
  )
}

export default Modal; 