import viewIcon from "../assets/Icons/views.svg";
import likesIcon from "../assets/Icons/likes.svg";
import "../Hero/Hero.scss";
import Comments from "../Comments/Comments";

const Hero = (props) => {
  const {
    image,
    video,
    title,
    channel,
    timestamp,
    views,
    likes,
    description,
    comments,
  } = props.pageInfo;
  return (
    <div className="hero-section">
      <section className="hero-section">
        <video width="100%" height="40%" controls poster={image}>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>
      <h1 className="hero-section__heading">{title}</h1>

      <section className="hero-section__container">
        <article>
          <p className="hero-section__channel">{channel}</p>
          <span className="hero-section__timestamp">{timestamp}</span>
        </article>

        <article className="hero-section__icon--div">
          <>
            <img
              className="hero-section__viewIcon"
              src={viewIcon}
              alt="views Icon"
            ></img>
            <span className="hero-section__views">{views}</span>
          </>
          <>
            <img
              className="hero-section__likesIcon"
              src={likesIcon}
              alt="likes Icon"
            ></img>
            <span className="hero-section__likes">{likes}</span>
          </>
        </article>
      </section>

      <section>
        <p className="hero-section__description">{description}</p>
      </section>
      <Comments comments={comments} />
    </div>
  );
};

export default Hero;
