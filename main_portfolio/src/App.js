import React from 'react';

// Import Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faFacebookF,
  faGithub,
  faInstagram,
  faLinkedin,
  faHtml5,
  faCss3Alt,
  faBootstrap,
  faJs,
  faPhp
} from '@fortawesome/free-brands-svg-icons';
import {
  faMobileAlt,
  faPaperPlane,
  faMapMarkerAlt,
  faFileDownload
} from '@fortawesome/free-solid-svg-icons';

// Styling
import './assets/style.css';

// Containers
import PortfolioContainer from './Containers/PortfolioContainer';
import HeroContainer from './Containers/HeroContainer';
import NavContainer from './Containers/NavContainer';
import FooterContainer from './Containers/FooterContainer';

// Font Awesome Library
library.add(
  faMobileAlt,
  faPaperPlane,
  faMapMarkerAlt,
  faFileDownload,
  faFacebookF,
  faGithub,
  faInstagram,
  faLinkedin,
  faHtml5,
  faCss3Alt,
  faBootstrap,
  faJs,
  faPhp
);
function App() {
  return (
    <div className="AppContainer">
      <NavContainer />
      <HeroContainer />
      <PortfolioContainer />
      <FooterContainer />
    </div>
  );
}

export default App;
