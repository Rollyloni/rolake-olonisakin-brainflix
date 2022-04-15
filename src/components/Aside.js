import "../components/Aside.scss";
import CardDetails from "./CardDetails";

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
  return <section>{videoList}</section>;
};

export default Aside;
