import React from 'react';
//import '../global-style/_variables.scss';
import './Header.scss';

function Header() {
  return (
    <div className="grid-item">
      <h1 className="Header Header-title">There is no time to worry... slow down, relax, take it easy. </h1>
      <h3 className="Header Header-text">Select a topic or an author and get a chill quote.</h3>
    </div>
  );
}

export default Header;