import React from 'react';
import './Footer.css'; // Import standard CSS
import logo from '../logo.jpg'; // Import the logo image directly
// Optional: Install react-icons: npm install react-icons
// import { FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  return (
    // Use string literals for classNames
    <footer className="footer">
      <div className="footerContent">
        <div className="leftSection">
          <div className="logoPlaceholder"> {/* Replace with your logo */}
          <img src={logo} alt="logo" className='logo' />
          </div>
          <div className="socialIcons">
             {/* Placeholder text icons - replace with actual icons */}
            <a href="#twitter" aria-label="Twitter">X</a>
            <a href="#instagram" aria-label="Instagram">IG</a>
            <a href="#linkedin" aria-label="LinkedIn">IN</a>
            {/* Example using react-icons: */}
            {/* <a href="#twitter" aria-label="Twitter"><FaTwitter /></a> */}
            {/* <a href="#instagram" aria-label="Instagram"><FaInstagram /></a> */}
            {/* <a href="#linkedin" aria-label="LinkedIn"><FaLinkedinIn /></a> */}
          </div>
        </div>

        <div className="rightSection">
          <div className="linkColumn">
            <h4>Use cases</h4>
            <ul>
              <li><a href="#ui">UI design</a></li>
              <li><a href="#ux">UX design</a></li>
              {/* ... other links */}
            </ul>
          </div>
          <div className="linkColumn">
            <h4>Explore</h4>
            <ul>
              <li><a href="#design">Design</a></li>
              <li><a href="#prototyping">Prototyping</a></li>
              {/* ... other links */}
            </ul>
          </div>
          <div className="linkColumn">
            <h4>Resources</h4>
            <ul>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#bestpractices">Best practices</a></li>
               {/* ... other links */}
            </ul>
          </div>
        </div>
      </div>
       {/* Optional: Add copyright or other bottom text here */}
       {/* <div className="footerBottom">© 2025 Charity Name. All rights reserved.</div> */}
    </footer>
  );
}
// Ensure all links are included as needed

export default Footer;