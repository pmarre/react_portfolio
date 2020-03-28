import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
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

library.add(faMobileAlt, faPaperPlane, faMapMarkerAlt, faFileDownload);
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
