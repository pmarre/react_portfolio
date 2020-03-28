import React from 'react';

function PortfolioOverlay(props) {
  return (
    <section className={'portfolioOverlay ' + props.addClass} id={props.id}>
      <div className="portfolioOverlay-inner-container">
        <span className="closeMoreInfo" onClick={props.onClick}></span>
        <h1 className="overlayHeader uppercase">{props.mainHeader}</h1>
        <div className="buttonContainer">
          <a
            href={props.githubLink}
            className="githubLink overlayBtn"
            target="_blank"
            rel="noopener noreferrer">
            View Code
          </a>
          <a
            href={props.liveLink}
            className="liveLink overlayBtn"
            target="_blank"
            rel="noopener noreferrer">
            View Site
          </a>
        </div>
        <p className="projectDescription">{props.description}</p>
        <h3 className="goalsHeader">More Goals:</h3>
        <ul className="goalList">
          {props.goals.map((goal, i) => (
            <li className="goalItem" key={i}>
              {goal}
            </li>
          ))}
        </ul>
        <figure className="moreImg">
          <img
            src={props.homepageImage}
            alt={props.homepageImageSubtext}
            className="img"
          />
          <figcaption>{props.homepageImageSubtext}</figcaption>
        </figure>
        <h3 className="featureHeader">{props.featureOneHeader}</h3>
        <p className="featureDescription">{props.featureOneDescription}</p>
        <figure className="moreImg">
          <img
            src={props.featureOneImage}
            alt={props.featureOneSubtext}
            className="img"
          />
          <figcaption>{props.featureOneSubtext}</figcaption>
        </figure>
        <h3 className="featureHeader">{props.featureTwoHeader}</h3>
        <p className="featureDescription">{props.featureTwoDescription}</p>
        <figure className="moreImg">
          <img
            src={props.featureTwoImage}
            alt={props.featureTwoSubtext}
            className="img"
          />
          <figcaption>{props.featureTwoSubtext}</figcaption>
        </figure>
      </div>
    </section>
  );
}

export default PortfolioOverlay;
