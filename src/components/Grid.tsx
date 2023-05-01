import InfoCard from "./InfoCard";
import { TrackerData } from "../utils/@types/custom";
import {
  workIcon,
  playIcon,
  studyIcon,
  exerciseIcon,
  socialIcon,
  selfCareIcon,
} from "../assets";
import "./Grid.css";

type Props<T> = {
  data: T;
  loading: boolean;
  error: string;
  state: "daily" | "weekly" | "monthly";
};

const CardGrid = ({ data, error, loading, state }: Props<TrackerData[]>) => {
  const bgStylesArr = [
    { url: workIcon, bgColor: "var(--c-work)" },
    { url: playIcon, bgColor: "var(--c-play)" },
    { url: studyIcon, bgColor: "var(--c-study)" },
    { url: exerciseIcon, bgColor: "var(--c-exercise)" },
    { url: socialIcon, bgColor: "var(--c-social)" },
    { url: selfCareIcon, bgColor: "var(--c-self-care)" },
  ];
  return (
    <ul className="container--grid grid">
      {error ? (
        error
      ) : loading ? (
        <p>Loading Data...</p>
      ) : (
        Array.isArray(data) &&
        data.map((datum, index) => (
          <InfoCard
            key={datum.title}
            state={state}
            datum={datum}
            bgStyles={bgStylesArr[index]}
          />
        ))
      )}
    </ul>
  );
};

export default CardGrid;
