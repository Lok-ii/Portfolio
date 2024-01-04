import React from "react";
import "./morecard.css";

const MoreCard = (props) => {
  return (
    <div className="moreCard">
      <div className="cardImg">
        <img src={props.image} alt="" />
      </div>
      <div className="cardDetails">
        <p className="cardType">{props.type}</p>
        <p className="cardTitle">{props.name}</p>
        <p className="cardDescription">{props.description}</p>
      </div>
      <div className="cardButtons">
        <a href={props.website} className="webLink">
          <button
            className="webBtn"
            // style={{ backgroundColor: gitColor }}
            // disabled={github}
          >
            <i class="fa-solid fa-globe"></i> Website
          </button>
        </a>
        <a href={props.insta} className="instaLink">
          <button
            className="instaBtn"
            // style={{ backgroundColor: gitColor }}
            // disabled={github}
          >
            <i class="fa-brands fa-instagram"></i>Instagram
          </button>
        </a>
        <a href={props.youtube} className="ytLink">
          <button
            className="ytBtn"
            // style={{ backgroundColor: gitColor }}
            // disabled={github}
          >
            <i class="fa-brands fa-youtube"></i> Youtube
          </button>
        </a>
      </div>
    </div>
  );
};

export default MoreCard;
