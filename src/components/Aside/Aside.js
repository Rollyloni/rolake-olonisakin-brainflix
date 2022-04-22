import "../Aside/Aside.scss";
import CardDetails from "../CardDetails/CardDetails";

const Aside = (props) => {
  return (
    <section className="videos-div">
      <h3> NEXT VIDEOS</h3>
      {props.VideoNavData
        ? props.VideoNavData.map((object) => {
            return (
              <CardDetails
                key={object.id}
                id={object.id}
                image={object.image}
                title={object.title}
                channel={object.channel}
              ></CardDetails>
            );
          })
        : null}
    </section>
  );
};

export default Aside;
