import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function PortfolioThumbnail(props) {
  let socialStyle = {
    fontSize: '1.5rem',
    margin: '20px 10px'
  };
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
        <ul className="toolsList">
          {props.tools.map((tool, i) => (
            <li className="tool" key={i}>
              <FontAwesomeIcon icon={tool} style={socialStyle} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PortfolioThumbnail;
