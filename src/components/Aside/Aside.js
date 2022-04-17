import "../Aside/Aside.scss";
import CardDetails from "../CardDetails/CardDetails";

const Aside = (props) => {
  const videoList = props.selectedPage.map((object) => {
    return (
      <CardDetails
        key={object.id}
        id={object.id}
        image={object.image}
        title={object.title}
        channel={object.channel}
        onCardClick={props.onCardClick}
      ></CardDetails>
    );
  });
  return (
    <section className="videos-div">
      <h3> NEXT VIDEOS</h3>
      {videoList}
    </section>
  );
};

export default Aside;
