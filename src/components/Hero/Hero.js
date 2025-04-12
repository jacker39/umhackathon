import React from 'react';
import './Hero.css'; // Import standard CSS
import heroImg from './heroImg.jpg'; // Import the image directly

function Hero() {
  return (
    // Use string literals for classNames
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroImg})` }} // Use imported image directly
    >
      <div className="overlay"></div> {/* Optional overlay for text readability */}
      <div className="heroContent">
        <h1>Make a difference today</h1>
        <p>Your every contribution matters</p>
      </div>
    </section>
  );
}

export default Hero;