import InfoCard from "./InfoCard";
import { TrackerData } from "../utils/@types/custom";
import "./Grid.css";

type Props<T> = {
  data: T;
  loading: boolean;
  error: string;
};
const CardGrid = ({ data, error, loading }: Props<TrackerData[]>) => {
  return (
    <div className="container--grid grid">
      {error ? (
        error
      ) : loading ? (
        <p>Loading Data...</p>
      ) : (
        Array.isArray(data) &&
        data.map((datum) => <InfoCard key={datum.title} />)
      )}
    </div>
  );
};

export default CardGrid;
