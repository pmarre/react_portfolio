import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
  let iconStyle = {
    fontSize: '2.5rem',
    padding: '5px',
    margin: '5px'
  };

  let largeIconStyle = {
    fontSize: '5rem',
    padding: '5px',
    marginTop: '20px'
  };

  return (
    <div className="footer-inner-container">
      <div className="aboutContainer" id="about">
        <h3 className="aboutHeader uppercase">About</h3>
        <p className="aboutContent">
          After taking a couple of basic HTML and CSS courses, I fell in love
          with programming. I have spent the last year and a half feeding my
          curiosity through online platforms and a certification through LMU. I
          am passionate about responsive design, effective animations, and
          simplifying the user experience. Outside of developing websites, I am
          an avid skier, rock climber, and trail runner. I use my outdoor
          experiences to inspire my designs and use of color.
        </p>
      </div>
      <div className="downloadContainer">
        <h3 className="downloadHeader uppercase">Download Resume</h3>
        <a href="#portfolio" className="downloadLink">
          <FontAwesomeIcon icon="file-download" style={largeIconStyle} />
        </a>
      </div>
      <div className="contactContainer" id="contact">
        <h3 className="contactHeader uppercase">Contact Me</h3>
        <ul className="contactList">
          <li className="contactItem">
            <FontAwesomeIcon icon="mobile-alt" style={iconStyle} />
            <span>(503)351-9504</span>
          </li>
          <li className="contactItem">
            <FontAwesomeIcon icon="paper-plane" style={iconStyle} />
            <span>patrick@pmarre.com</span>
          </li>
          <li className="contactItem">
            <FontAwesomeIcon icon="map-marker-alt" style={iconStyle} />
            <span>Palo Alto, California</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
