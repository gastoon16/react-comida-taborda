import React from 'react';
import '../App.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span>logo</span>
      </div>
      <ul className="navbar-right">
        <li>home</li>
        <li>info</li>
      </ul>
    </nav>
  );
}

export default Navbar;
