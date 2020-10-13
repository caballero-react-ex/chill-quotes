import React, { useEffect } from 'react';
import './Modal.scss';
import { ReactComponent as QuotesIcon }  from '../assets/quotes-icon.svg';
import { copyCodeToClipboard } from '../components/utils/Utils';

function Modal({isActive, onClose, fetchState}) {
  
  const sortedQuote = fetchState[Math.floor(Math.random()*fetchState.length)];
  console.log("SortedfetchState.Data: ", sortedQuote)
 
  console.log("test const is: ", sortedQuote)
  
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
  }, []);

  return (
    <>
      {isActive === true && 
        <>
          <div 
            className="Modal"
          >
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
            
                <div key={sortedQuote._id} className="copyContent">
                  <p className="Modal-content-quote">{sortedQuote.quoteText}</p>
                  <p className="Modal-content-author">&#8212; {sortedQuote.quoteAuthor}</p>
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
                    https://twitter.com/intent/tweet?text=From%20${web}%20“${sortedQuote.quoteText}”%20—%20${sortedQuote.quoteAuthor}&hashtags=ChillQuotes
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
          <div className="Modal-bg" onClick={onClose} ></div>
        </>
      }
    </>
  )
}

export default Modal; 