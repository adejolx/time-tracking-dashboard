import ellipses from "../assets/icon-ellipsis.svg";
import "./InfoCard.css";

const InfoCard = () => {
  return (
    <div className="container--info rounded-md">
      <article className="info-card rounded-md">
        <h2 className="text:xl">32hrs</h2>
        <p className="text:sm">Last Week - 36hrs</p>
        <div className="header">
          <span className="bold-300">Work</span>
          <img src={ellipses} alt="" />
        </div>
      </article>
    </div>
  );
};

export default InfoCard;
