import React from 'react';

// Components
import PortfolioThumbnail from '../Components/PortfolioThumbnail';

function PortfolioContainer(props) {
  return (
    <div className="portfolioContainer" id="portfolio">
      <h1 className="portfolioHeader">Portfolio</h1>
      <PortfolioThumbnail
        projectTitle="Jordan Pipes Band"
        projectDescription="A multipage, responsive webpage built with HTML and CSS"
        thumbnailLink="#"
        thumbnailImage="../assets/images/jordanPipesBand-thumbnail.png"
      />
      <PortfolioThumbnail
        projectTitle="Sandy's Pet Shop"
        projectDescription="Full-stack project built with HTML, CSS, Javascript, jQuery, PHP, SQL, and MySQL"
        thumbnailLink="#"
      />
      <PortfolioThumbnail
        projectTitle="Project Three"
        projectDescription="Quick Description"
        thumbnailLink="#"
      />
    </div>
  );
}

export default PortfolioContainer;
