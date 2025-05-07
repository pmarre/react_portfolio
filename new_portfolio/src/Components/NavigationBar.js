import React from 'react';
import Resume from '../Assets/Resume/PatrickMarreResume.pdf';

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false,
    };
    this.openMobileMenu = this.openMobileMenu.bind(this);
  }

  openMobileMenu = (e) => {
    let overlay = document.querySelector('.mobileOverlay');
    let menuContent = document.querySelector('.mobileNavContainer');
    function open() {
      overlay.style.height = '100vh';
      menuContent.style.opacity = '1';
    }
    function close() {
      overlay.style.width = '0';
      menuContent.style.opacity = '0';
    }
    if (
      (this.state.isMenuOpen && e.target.id === 'close') ||
      (this.state.isMenuOpen && e.target.classList.contains('navLink-mobile'))
    ) {
      overlay.classList.remove('open-menu');
      overlay.style.height = '60px';
      setTimeout(close, 200);
      this.setState({
        isMenuOpen: false,
      });
    } else {
      overlay.classList.add('open-menu');
      overlay.style.width = '100vw';
      setTimeout(open, 200);
      this.setState({
        isMenuOpen: true,
      });
    }
  };

  render() {
    return (
      <div className="nav-inner-container">
        <div className="mobileOverlay" id="mobileOverlay">
          <div className="closeMenu" id="close" onClick={this.openMobileMenu}>
            X
          </div>
          <ul className="mobileNavContainer">
            <li className="navItem-mobile dark-font">
              <a className="navLink-mobile" href="#home" onClick={this.openMobileMenu}>
                HOME
              </a>
            </li>
            <li className="navItem-mobile">
              <a className="navLink-mobile" href="#portfolio" onClick={this.openMobileMenu}>
                PORTFOLIO
              </a>
            </li>
            <li className="navItem-mobile">
              <a className="navLink-mobile" href="#about" onClick={this.openMobileMenu}>
                ABOUT
              </a>
            </li>
            <li className="navItem-mobile">
              <a className="navLink-mobile" href="#contact" onClick={this.openMobileMenu}>
                CONTACT
              </a>
            </li>
            <li className="navItem-mobile">
              {/* <a
                className="navLink-mobile"
                href={Resume}
                target="_blank"
                rel="noopener noreferrer"
                onClick={this.openMobileMenu}>
                RESUME
              </a> */}
            </li>
          </ul>
        </div>
        <a className="navLogo" href="#home">
          PM
        </a>
        <div className="mobileNavIcon" id="mobileMenu" onClick={this.openMobileMenu}>
          MENU
        </div>
        <div className="fullNav dark-font">
          <ul className="fullNavContainer">
            <li className="navItem">
              <a className="navLink" href="#design">
                Design
              </a>
            </li>
            <li className="navItem">
              <a className="navLink" href="#portfolio">
                Development
              </a>
            </li>
            <li className="navItem">
              <a className="navLink" href="#about">
                About
              </a>
            </li>
            <li className="navItem">
              <a className="navLink" href="#contact">
                Contract
              </a>
            </li>
            <li className="navItem">
              <a className="navLink" href={Resume} rel="noopener noreferrer" target="_blank">
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default NavigationBar;
