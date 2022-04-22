import viewIcon from "../assets/Icons/views.svg";
import likesIcon from "../assets/Icons/likes.svg";
import "../Hero/Hero.scss";
import Comments from "../Comments/Comments";
import Form from "../Comments/Form";

const Hero = (props) => {
  return (
    <>
      <div className="hero-div">
        <main>
          <h1 className="hero-section__heading">{props.data.title}</h1>

          <section className="hero-section__container">
            <article className="hero-section__div">
              <p className="hero-section__channel"> By {props.data.channel}</p>
              <span className="hero-section__timestamp">
                {props.data.timestamp}
              </span>
            </article>

            <article className="hero-section__icon--div">
              <>
                <p className="hero-section__views">
                  <img
                    className="hero-section__viewIcon"
                    src={viewIcon}
                    alt="views Icon"
                  ></img>
                  {props.data.views}
                </p>
              </>
              <>
                <p className="hero-section__likes">
                  <img
                    className="hero-section__likesIcon"
                    src={likesIcon}
                    alt="likes Icon"
                  ></img>
                  {props.data.likes}
                </p>
              </>
            </article>
          </section>

          <section>
            <p className="hero-section__description">
              {props.data.description}
            </p>
          </section>
        </main>
        <Form />
        <Comments comments={props.data.comments} />
      </div>
    </>
  );
};

export default Hero;
