import React from 'react';

// Components
import PortfolioThumbnail from '../Components/PortfolioThumbnail';
import PortfolioOverlay from '../Components/PortfolioOverlay';

//Image Imports
import jordanPipesThumbnail from '../assets/images/jordanpipes/jordanPipesBand-thumbnail.png';

// Pet Shop Images
import sandysPetThumbnail from '../assets/images/petshop/pet_shop_hp.png';
import petshopAdmin from '../assets/images/petshop/pet_shop_admin.png';
import petshopLocation from '../assets/images/petshop/pet_shop_location.png';

//CountryAPI Images/Videos
import countryAPIThumbnail from '../assets/images/countryAPI/countryAPI-hp.png';
import countryAPIDarkmode from '../assets/images/countryAPI/countryAPI-darkmode.png';
import countryAPISearch from '../assets/images/countryAPI/countryAPI-search.png';

class PortfolioContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = e => {
    let target = e.target;
    console.log(e.target.id);
    if (target.classList.contains('thumbnailLink')) {
      for (let i = 0; i < 15; i++) {
        console.log(target.id);
        if (target.id === 'portfolioThumbnail-' + [i]) {
          console.log(true);
          let overlay = document.getElementById('overlay-' + [i]);
          overlay.classList.add('active-info');
        }
      }
    } else if (target.classList.contains('closeMoreInfo')) {
      let overlay = document.querySelector('.active-info');
      overlay.classList.remove('active-info');
    }
  };

  render() {
    return (
      <div className="portfolioContainer" id="portfolio">
        <h1 className="portfolioHeader uppercase">Portfolio</h1>
        <PortfolioThumbnail
          projectTitle="The Jordan Pipes Band"
          projectDescription="A multipage, responsive webpage built with HTML and CSS"
          thumbnailImage={jordanPipesThumbnail}
          id="portfolioThumbnail-1"
          onClick={this.handleClick}
        />
        <PortfolioThumbnail
          projectTitle="Sandy's Pet Shop"
          projectDescription="Full-stack project built with HTML, CSS, Javascript, jQuery, PHP, SQL, and MySQL"
          thumbnailImage={sandysPetThumbnail}
          id="portfolioThumbnail-2"
          onClick={this.handleClick}
        />
        <PortfolioThumbnail
          projectTitle="Country API"
          projectDescription=" A single-page project built from a Frontend Mentor prompt.
        Utilizes the Rest Countries API. Built with HTML5, CSS3,
        Bootstrap, AJAX, and JQuery."
          thumbnailImage={countryAPIThumbnail}
          id="portfolioThumbnail-3"
          onClick={this.handleClick}
        />
        {/* ---- Portfolio Overlays ---- */}
        <PortfolioOverlay
          addClass="overlay-1"
          id="overlay-1"
          mainHeader="The Jordan Pipes Band"
          description="text here"
          goals={[1, 2, 3, 4]}
          onClick={this.handleClick}
          githubLink="https://github.com/pmarre/full_stack_cert/tree/master/01_html_css/user_centric_dev/milestone_project"
          liveLink="https://pmarre.github.io/full_stack_cert/01_html_css/user_centric_dev/milestone_project/index.html"
          homepageImage={jordanPipesThumbnail}
          homepageImageSubtext="The Jordan Pipes Band Homepage"
          featureOneHeader="Feature One"
          featureOneDescription="Feature one description here"
          featureOneImage="image"
          featureOneSubtext="text here"
          featureTwoHeader="Feature Two"
          featureTwoDescription="Feature one description here"
          featureTwoImage="image"
          featureTwoSubtext="text here"
          featureThreeHeader="Feature Three"
          featureThreeDescription="Feature one description here"
          featureThreeImage="image"
          featureThreeSubtext="text here"
        />
        <PortfolioOverlay
          addClass="overlay-2"
          id="overlay-2"
          mainHeader="Sandy's Pet Shop"
          description="For this project, I was prompted to created a multipage website that
          connected to a MySQL Database. Some of the features include forms
          submitted with AJAX, contact emails sent using PHPMailer, and an admin
          page with a table of all clients who have submitted a grooming form.
          The admin can add, update, and delete clients."
          goals={[
            'Fully functioning website',
            'Location API using Google Maps',
            'Responsive Layout'
          ]}
          onClick={this.handleClick}
          githubLink="https://github.com/pmarre/sandys_pet_shop"
          liveLink="https://epizoan-respiration.000webhostapp.com/"
          homepageImage={sandysPetThumbnail}
          homepageImageSubtext="Sandy's Pet Shop homepage."
          featureOneHeader="Admin Page"
          featureOneDescription="The admin has the ability to view, update, delete, and add clients to table. This is achieved using PHP, AJAX, SQL, and a Bootstrap Module."
          featureOneImage={petshopAdmin}
          featureOneSubtext="Sandy's Pet Shop admin page."
          featureTwoHeader="Google Maps API"
          featureTwoDescription="Used a Google Maps API to show the location of the [fictious] pet shop."
          featureTwoImage={petshopLocation}
          featureTwoSubtext="Sandy's Pet Shop locaton page."
        />
        <PortfolioOverlay
          addClass="overlay-3"
          id="overlay-3"
          mainHeader="Country API"
          description="Project idea from Frontend Mentor."
          goals={['Connect and display data from API', 'Dark Mode']}
          onClick={this.handleClick}
          githubLink="https://github.com/pmarre/country_api"
          liveLink="http://pmarre.com/Frontend_Mentor/CountryAPI/index.html"
          homepageImage={countryAPIThumbnail}
          featureOneHeader="Switching to Dark Mode"
          featureOneDescription="I used jQuery and CSS to toggle 'Dark Mode'"
          featureOneImage={countryAPIDarkmode}
          featureOneSubtext="Webpage in dark mode."
          featureTwoHeader="Searching For A Country"
          featureTwoImage={countryAPISearch}
          featureTwoSubtext="Country API search for country."
        />
      </div>
    );
  }
}

export default PortfolioContainer;
