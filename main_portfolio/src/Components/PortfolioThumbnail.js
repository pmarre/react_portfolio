import React from 'react';

function PortfolioThumbnail(props) {
  return (
    <div className="cardContainer">
      <div
        className="imageThumbnail"
        style={{ backgroundImage: 'url(' + props.thumbnailImage + ')' }}></div>
      <div className="thumbnailContent">
        <h3 className="thumbnailHeader uppercase">{props.projectTitle}</h3>
        <p className="thumbnailParagraph">{props.projectDescription}</p>
        <button className="thumbnailLink" onClick={props.onClick} id={props.id}>
          More info
        </button>
      </div>
    </div>
  );
}

export default PortfolioThumbnail;
