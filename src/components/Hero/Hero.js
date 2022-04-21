import viewIcon from "../assets/Icons/views.svg";
import likesIcon from "../assets/Icons/likes.svg";
import "../Hero/Hero.scss";
import Comments from "../Comments/Comments";

const Hero = (props) => {
  const {
    title,
    channel,
    views,
    image,
    video,
    likes,
    timestamp,
    description,
    comments,
  } = props.pageInfo;

  return (
    <>
      <section className="hero-section">
        <video width="108%" height="40%" controls poster={image}>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>
      <div className="hero-div">
        <main>
          <h1 className="hero-section__heading">{title}</h1>

          <section className="hero-section__container">
            <article className="hero-section__div">
              <p className="hero-section__channel"> By {channel}</p>
              <span className="hero-section__timestamp">{timestamp}</span>
            </article>

            <article className="hero-section__icon--div">
              <>
                <p className="hero-section__views">
                  <img
                    className="hero-section__viewIcon"
                    src={viewIcon}
                    alt="views Icon"
                  ></img>
                  {views}
                </p>
              </>
              <>
                <p className="hero-section__likes">
                  <img
                    className="hero-section__likesIcon"
                    src={likesIcon}
                    alt="likes Icon"
                  ></img>
                  {likes}
                </p>
              </>
            </article>
          </section>

          <section>
            <p className="hero-section__description">{description}</p>
          </section>
          <Comments comments={comments} />
        </main>
      </div>
    </>
  );
};

export default Hero;
