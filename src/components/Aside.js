import React, { Component } from "react";
import dataArray from "./assets/data/video-details.json";

const dataObject = dataArray.map((object) => {
  return {
    titles: object.title,
    channels: object.channel,
    images: object.image,
  };
});

class Aside extends Component {
  state = {
    card: dataObject,
  };
  render() {
    const cardItem = dataArray.map((object) => {
      return (
        <article key={object.id}>
          <video width="100%" height="40%" controls poster={object.image} />
          <source src={object.video} type="video/mp4" />
          <h3>{object.title}</h3>
          <p>{object.channel}</p>
        </article>
      );
    });

    return (
      <div>
        <h2>NEXT VIDEOS</h2>
        <section>{cardItem}</section>
      </div>
    );
  }
}

export default Aside;
