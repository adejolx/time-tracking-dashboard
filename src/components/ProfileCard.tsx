import { useEffect, useState } from "react";
import avatar from "../assets/image-jeremy.png";
import { TrackerData } from "../utils/@types/custom";
import "./ProfileCard.css";

type Props<T> = {
  onClick: React.MouseEventHandler<HTMLInputElement>;
  data: T;
  currentState: string;
};

const ProfileCard = ({ onClick, data, currentState }: Props<TrackerData[]>) => {
  const [timeFrames, setTimeframes] = useState<string[]>([]);

  useEffect(() => {
    if (data) setTimeframes(Object.keys(data[0].timeframes));
  }, [data]);

  return (
    <div className="container--profile rounded-md">
      <article className="user-card rounded-md">
        <h2>
          <span className="text:sm unbold">Report for</span>{" "}
          <span className="username text:lg">Jeremy Robson</span>
        </h2>
        <img src={avatar} alt="" />
      </article>
      <ul className="stack-md">
        {timeFrames.map((timeFrame) => (
          <li key={timeFrame}>
            <input
              type="button"
              value={timeFrame}
              onClick={onClick}
              style={
                timeFrame === currentState ? { color: "white" } : undefined
              }
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileCard;
