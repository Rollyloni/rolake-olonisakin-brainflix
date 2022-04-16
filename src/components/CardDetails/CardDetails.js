import React from "react";
import "../CardDetails/CardDetails.scss";

const CardDetails = (props) => {
  const { image, title, id, channel, onCardClick } = props;
  const handleClick = (event) => {
    onCardClick(id);
  };

  return (
    <article onClick={handleClick} className="card">
      <img className="card__images" src={image} alt="video avatar" />
      <div className="card__div">
        <p className="card__title">{title} </p>
        <p className="card__channel">{channel} </p>
      </div>
    </article>
  );
};

export default CardDetails;
