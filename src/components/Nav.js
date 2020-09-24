import React from 'react';
import './Nav.scss';
import { ReactComponent as IconLogo }  from '../assets/logo-icon.svg';


function Nav() {
  return (
    <nav className="grid">
      <div className="grid-item Nav">
        <div className="Nav-logo">ChillQuotes</div>
        <IconLogo className="Nav-icon-logo" />
      </div>
    </nav>
  )
}

export default Nav;