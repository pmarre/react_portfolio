import React from 'react';

// Styling
import './assets/style.css';

// Containers
import PortfolioContainer from './Containers/PortfolioContainer';
import HeroContainer from './Containers/HeroContainer';
import NavContainer from './Containers/NavContainer';

function App() {
  return (
    <div className="AppContainer">
      <NavContainer />
      <HeroContainer />
      <PortfolioContainer />
    </div>
  );
}

export default App;
