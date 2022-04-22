import React from "react";

const HeroVideo = (props) => {
  return (
    <div>
      <section className="hero-section">
        <video width="108%" height="40%" controls poster={props.data.image}>
          <source src="" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>
    </div>
  );
};

export default HeroVideo;
