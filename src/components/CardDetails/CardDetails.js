import React from "react";
import { NavLink } from "react-router-dom";
import "../CardDetails/CardDetails.scss";

const CardDetails = (props) => {
  return (
    <article className="card" key={props.id}>
      <NavLink to={`/videos/${props.id}`}>
        <img className="card__images" src={props.image} alt="video avatar" />
        <div className="card__div">
          <p className="card__title">{props.title} </p>
          <p className="card__channel">{props.channel} </p>
        </div>
      </NavLink>
    </article>
  );
};

export default CardDetails;
