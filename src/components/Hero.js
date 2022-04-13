import dataArray from "./assets/data/video-details.json";
import viewIcon from "./assets/Icons/views.svg";
import likesIcon from "./assets/Icons/likes.svg";
import "../components/Hero.scss";

const Hero = () => {
  console.log(dataArray);
  return (
    <div className="hero-section">
      <section className="hero-section">
        <video width="100%" height="40%" controls poster={dataArray[0].image}>
          <source src={dataArray[0].video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>
      <h1 className="hero-section__heading">{dataArray[0].title}</h1>

      <section className="hero-section__container">
        <article>
          <p className="hero-section__channel">{dataArray[0].channel}</p>
          <span className="hero-section__timestamp">
            {dataArray[0].timestamp}
          </span>
        </article>

        <article className="hero-section__icon--div">
          <>
            <img
              className="hero-section__viewIcon"
              src={viewIcon}
              alt="views Icon"
            ></img>
            <span className="hero-section__views">{dataArray[0].views}</span>
          </>
          <>
            <img
              className="hero-section__likesIcon"
              src={likesIcon}
              alt="likes Icon"
            ></img>
            <span className="hero-section__likes">{dataArray[0].likes}</span>
          </>
        </article>
      </section>

      <section>
        <p className="hero-section__description">{dataArray[0].description}</p>
      </section>
    </div>
  );
};

export default Hero;
