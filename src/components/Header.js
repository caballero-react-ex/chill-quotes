import React from 'react';
import './Header.scss';

function Header() {
  return (
    <div className="grid">
      <div className="grid-item">
        <h1 className="Header Header-title">Slow down, relax, find quality quotes and inspiration. </h1>
        <h3 className="Header Header-text">Select a topic or an author and get a quote to share with others.</h3>
      </div>
    </div>
  );
}

export default Header;