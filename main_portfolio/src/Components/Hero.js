import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Hero(props) {
  let socialStyles = {
    margin: '0 10px',
    fontSize: '1.5rem',
    padding: '5px',
    borderBottom: '4px solid transparent',
    transition: 'all 0.2s ease-in-out'
  };

  return (
    <section className="hero-inner-container" id="#home">
      <p className="heroContent">
        My name is <strong>Patrick Marre</strong>. I am a Software Engineer with
        a focus on the frontend. I have experience with HTML, CSS, Javascript,
        React, Redux, SQL, MySQL, and PHP. This is my{' '}
        <a className="heroPortfolioLink" href="#portfolio">
          portfolio
        </a>
        . Enjoy.
      </p>
      <div className="socialIconsContainer">
        <a
          href="https://github.com/pmarre"
          target="_blank"
          className="socialIcons"
          style={socialStyles}
          rel="noopener noreferrer">
          <FontAwesomeIcon icon={['fab', 'github']} />
        </a>
        <a
          href="https://www.facebook.com"
          target="_blank"
          className="socialIcons"
          style={socialStyles}
          rel="noopener noreferrer">
          <FontAwesomeIcon icon={['fab', 'facebook-f']} />
        </a>
        <a
          href="https://www.instagram.com/pmdelyte"
          target="_blank"
          className="socialIcons"
          style={socialStyles}
          rel="noopener noreferrer">
          <FontAwesomeIcon icon={['fab', 'instagram']} />
        </a>
        <a
          href="https://www.linkedin.com/in/patrickmarre"
          target="_blank"
          className="socialIcons"
          style={socialStyles}
          rel="noopener noreferrer">
          <FontAwesomeIcon icon={['fab', 'linkedin']} />
        </a>
      </div>
    </section>
  );
}

export default Hero;
