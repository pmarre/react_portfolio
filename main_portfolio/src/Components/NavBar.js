import React from 'react';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false
    };
    this.openMobileMenu = this.openMobileMenu.bind(this);
  }

  openMobileMenu = e => {
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
        isMenuOpen: false
      });
    } else {
      overlay.classList.add('open-menu');
      overlay.style.width = '100vw';
      setTimeout(open, 200);
      this.setState({
        isMenuOpen: true
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
            <li className="navItem-mobile">
              <a
                className="navLink-mobile"
                href="#portfolio"
                onClick={this.openMobileMenu}>
                HOME
              </a>
            </li>
            <li className="navItem-mobile">
              <a
                className="navLink-mobile"
                href="#portfolio"
                onClick={this.openMobileMenu}>
                PORTFOLIO
              </a>
            </li>
            <li className="navItem-mobile">
              <a
                className="navLink-mobile"
                href="#portfolio"
                onClick={this.openMobileMenu}>
                ABOUT
              </a>
            </li>
            <li className="navItem-mobile">
              <a
                className="navLink-mobile"
                href="#portfolio"
                onClick={this.openMobileMenu}>
                CONTACT
              </a>
            </li>
          </ul>
        </div>
        <div className="navLogo">LOGO</div>
        <div
          className="mobileNavIcon"
          id="mobileMenu"
          onClick={this.openMobileMenu}>
          MENU
        </div>
        <div className="fullNav">
          <ul className="fullNavContainer">
            <li className="navItem">
              <a className="navLink" href="#portfolio">
                HOME
              </a>
            </li>
            <li className="navItem">
              <a className="navLink" href="#portfolio">
                PORTFOLIO
              </a>
            </li>
            <li className="navItem">
              <a className="navLink" href="#portfolio">
                ABOUT
              </a>
            </li>
            <li className="navItem">
              <a className="navLink" href="#portfolio">
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default NavBar;