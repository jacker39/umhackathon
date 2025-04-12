import React from 'react';
import './Header.css'; // Import standard CSS
import logo from '../logo.jpg'; // Import the logo image directly

function Header() {
  return (
    // Use string literals for classNames
    <header className="header">
      <nav className="nav">
        <div className="logoPlaceholder">
           <img src={logo} alt="logo" className='logo' />
        </div>
        <ul className="navList">
          <li><a href="#donations">Donations</a></li>
          <li><a href="#institutions">Institutions</a></li>
          <li><a href="#community">Community</a></li>
          <li><a href="#resources">Resources</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#about">About Us</a></li>
        </ul>
        <div className="authButtons">
          <button className="signInButton">Sign In</button>
          <button className="registerButton">Register</button>
        </div>
      </nav>
    </header>
  );
}

export default Header;