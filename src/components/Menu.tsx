import React from 'react';
import './Menu.scss';

function Menu() {
  return (
    <nav className="menu">
      <ul className="menu__ul">
        <li className="menu__li">Home</li>
        <li className="menu__li">About</li>
        <li className="menu__li">Team</li>
        <li className="menu__li">Log In</li>
      </ul>
    </nav>
  );
}

export default Menu;