import { TrackerData } from "../utils/@types/custom";
import "./InfoCard.css";

type Props<T> = {
  state: "daily" | "weekly" | "monthly";
  datum: T;
  bgStyles: { url: string; bgColor: string };
};

const InfoCard = ({ state, datum, bgStyles }: Props<TrackerData>) => {
  const style = {
    backgroundImage: `url('${bgStyles.url}')`,
    backgroundColor: bgStyles.bgColor,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top right 5%",
    backgroundSize: "20%",
  };
  return (
    <li className="container--info rounded-md" style={style}>
      <article className="info-card rounded-md">
        <div className="copy stack-md">
          <h2 className="bold-300 text:md">{datum?.title}</h2>
          <p className="text:xl hours">
            {datum?.timeframes[state].current}
            {datum?.timeframes[state].current != 1 ? "hrs" : "hr"}
          </p>
          <p className="text:sm timeframe">
            {`${
              state === "monthly"
                ? "Last Month"
                : state === "weekly"
                ? "Last Week"
                : "Yesterday"
            } - `}
            {datum?.timeframes[state].previous}
            {datum?.timeframes[state].previous != 1 ? "hrs" : "hr"}
          </p>
        </div>
        <div className="side-bar">
          <button aria-label="Display options">
            <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
                fill="#BBC0FF"
                fill-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      </article>
    </li>
  );
};

export default InfoCard;
