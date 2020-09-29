import React from 'react';
import './Modal.scss';
import { ReactComponent as QuotesIcon }  from '../assets/quotes-icon.svg';
import { copyCodeToClipboard } from '../components/utils/Utils';

function Modal({isActive, onClose, fetchState}) {
  
  const sortedQuote = fetchState[Math.floor(Math.random()*fetchState.length)];
  console.log(sortedQuote)
  
  // const { _id, quoteText, quoteAuthor } = sortedQuote;

  return (
    <>
      {isActive === true && 
        <>
          <div className="Modal">
            <div className="Modal-content">
              <QuotesIcon className="Modal-content-icon" />
            
                <div key={sortedQuote._id} className="copyContent">
                  <p className="Modal-content-quote">{sortedQuote.quoteText}</p>
                  <p className="Modal-content-author">&#8212; {sortedQuote.quoteAuthor}</p>
                </div>
            
              
            </div>
            <div className="Modal-btn-container">
              <button 
                  // https://twitter.com/intent/tweet?hashtags=demo&original_referer=https%3A%2F%2Fdeveloper.twitter.com%2F&ref_src=twsrc%5Etfw&related=twitterapi%2Ctwitter&text=Hello%20world&tw_p=tweetbutton&url=https%3A%2F%2Fexample.com%2Ffoo&via=twitterdev
                >
                <a className="twitter-share-button"
                  href={
                    `https://twitter.com/intent/tweet?text=From%20https://elpais.com/%20-->%20${sortedQuote.quoteText}%20—%20${sortedQuote.quoteAuthor}&hashtags=ChillQuotes
                    `}
                  data-url="https://dev.twitter.com/web/tweet-button"
                  data-hashtags="example,demo"
                  data-size="large"
                  target="_blank"
                  rel="nofollow noopener"
                >
                  Tweet
                </a>
              </button>
              <button 
                
              >
              <a href={`https://twitter.com/home?status=https://www.websiteplanet.com/ ${sortedQuote.quoteText} ${sortedQuote.quoteAuthor}`} rel="nofollow noopener">
                TWITTER
              </a>
              </button>
              <button 
                
              >
              <a href="https://www.facebook.com/sharer/sharer.php?u=https://www.websiteplanet.com" rel="nofollow noopener">
                FACEBOOK
              </a>
              </button>
              <button 
                onClick={
                  () => copyCodeToClipboard('.copyContent'), 
                  () => alert("copied")
                }
              >
                COPY
              </button>
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