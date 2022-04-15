import React from "react";

const CardDetails = (props) => {
  const { image, title, id, channel, onCardClick } = props;
  const handleClick = (event) => {
    onCardClick(id);
  };

  return (
    <article onClick={handleClick}>
      <img className="card__images" src={image} alt="video avatar" />
      <h3>{title} </h3>
      <p>{channel} </p>
    </article>
  );
};

export default CardDetails;
