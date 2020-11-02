import React from 'react';
import './Footer.scss';

function Footer() {
  return(
    <footer className="grid bg-dark">
      <div className="grid-item Footer">
        <a href="https://github.com/caballero-react-ex/chill-quotes" target="_blank" rel="noopener noreferrer">About ChillQuotes</a>
        <div className="Footer-infos">
          <a href="https://www.luiscaballero.dev" target="_blank" rel="noopener noreferrer">&copy; 2020 Luis Caballero</a>
          <p className="Footer-infos-love">
            Coded with <span role="img" aria-label="heart" className="Footer-emoji">❤️</span> and React
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer; 

// https://github.com/caballero-react-ex/chill-quotes