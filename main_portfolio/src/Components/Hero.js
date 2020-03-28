import React from 'react';

function Hero(props) {
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
      <div className="socialIcons">
        <a
          href="https://github.com/pmarre"
          target="_blank"
          rel="noopener noreferrer">
          <i className="fa fa-github"></i>
        </a>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer">
          <i className="fa fa-facebook"></i>
        </a>
        <a
          href="https://www.instagram.com/pmdelyte"
          target="_blank"
          rel="noopener noreferrer">
          <i className="fa fa-instagram"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/patrickmarre"
          target="_blank"
          rel="noopener noreferrer">
          <i className="fa fa-linkedin"></i>
        </a>
      </div>
    </section>
  );
}

export default Hero;
