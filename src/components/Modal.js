import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './Modal.scss';
import Tooltip from './Tooltip';
import Loader from './Loader';
import { ReactComponent as QuotesIcon }  from '../assets/quotes-icon.svg';
import { copyCodeToClipboard } from '../components/utils/Utils';


function Modal({onClose, data, isLoading}) {
//// CONSTS
  const sortedQuote = data[Math.floor(Math.random()*data.length)];

  // init state for sortedQuote, so it doesnt give an "undefined" error
  const init = {
    id: sortedQuote === undefined ? 1 : sortedQuote._id, 
    quote: sortedQuote === undefined ? "text" : sortedQuote.quoteText,
    author: sortedQuote === undefined ? "author" : sortedQuote.quoteAuthor,
  }

  // const for the twitter Link
  const web = "caballero-react-ex.github.io/chillquotes";

  const twitterHref = 
      `
      https://twitter.com/intent/tweet?text=From%20${web}%20“${init.quote}”%20—%20${init.author}&hashtags=ChillQuotes
      `
  ;

  /////
  const focusCloseBtn = useRef(null);

  

////// FUNCTIONS
  // Tooltip for copy text

  function handleCopyBtn() {
    // copy text to clipboard function
    copyCodeToClipboard('.copyContent');
    // tooltip animation to give feedback to user
    animateTooltip();
    // myFocusedBtn.current && myFocusedBtn.current.focus();
    onFocusBtn()
    // set aria-expanded attr. to true (accessibility)
    document.getElementById('copy-btn').setAttribute('aria-expanded', 'true');
    setTimeout(() => {
      document.getElementById('copy-btn').setAttribute('aria-expanded', 'false');
    }, 1800)
  }

  function animateTooltip() {
    const tooltip = document.querySelector('.Tooltip');
    tooltip.classList.add('open-tooltip');
    // remove the tooltip classes automatically after 2s
    setTimeout(() => tooltip.classList.remove('open-tooltip'), 1800);
  }


  // when press ESC, close modal
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
  
  // Usability, when link is pressed with SPACEBAR, it opens
  function handleSpaceKeyDown(event) {
    if (event.keyCode === 32) {
      window.open(twitterHref,'_blank','noopener')
      onFocusBtn()
    }
  }

  function onFocusBtn() {
    focusCloseBtn.current.focus();
  } 



  return (
    <div className="Modal-wrapper">
      <aside className="Modal">
        <div className="Modal-bar Modal-bar-top">
          <button 
            className="material-icons btn-icon"
            onClick={onClose}
            type="button"
            ref={focusCloseBtn}
          >
            close
          </button>
        </div>

        <div className="Modal-content">
          <QuotesIcon className="Modal-content-icon" />
          {isLoading === true 
            ? <Loader />
            : (
              <div key={init.id} className="copyContent">
                <p className="Modal-content-quote">{init.quote}</p>
                <p className="Modal-content-author">&#8212; {init.author}</p>
              </div>
              )
          }
        </div>

        <div className="Modal-bar Modal-bar-bottom">
          <button
            id="copy-btn"
            className="btn btn-text" 
            aria-describedby="tooltip"
            aria-expanded="false"
            aria-label="copy the quote into the clipboard"
            onClick={handleCopyBtn}
          >
            Copy
          </button>
          <Tooltip>Copied!</Tooltip>
          <a className="btn btn-text"
            href={twitterHref}
            data-url="https://dev.twitter.com/web/tweet-button"
            data-hashtags="example,demo"
            data-size="large"
            target="_blank"
            rel="noopener noreferrer"
            role="button"
            aria-label="external link to post the quote on Twitter"
            onKeyDown={handleSpaceKeyDown}
            onClick={onFocusBtn}
          >
            Tweet it
          </a>
        </div>

      </aside> 
      <div className="Modal-bg" onClick={onClose}></div>
    </div>
  )
}

export default Modal; 


Modal.propTypes = {
  onClose:PropTypes.func.isRequired, 
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  isLoading: PropTypes.bool.isRequired,
}