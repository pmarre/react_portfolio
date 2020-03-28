import React from 'react';

function PortfolioThumbnail(props) {
  return (
    <div className="cardContainer">
      <div className="imageThumbnail"></div>
      <div className="thumbnailContent">
        <h3 className="thumbnailHeader">{props.projectTitle}</h3>
        <p className="thumbnailParagraph">{props.projectDescription}</p>
        <a className="thumbnailLink" href={props.thumbnailLink}>
          Click Here
        </a>
      </div>
    </div>
  );
}

export default PortfolioThumbnail;
