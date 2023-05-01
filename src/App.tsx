import { useState } from "react";
import "./App.css";
import CardGrid from "./components/Grid";
import ProfileCard from "./components/ProfileCard";
import useFetch from "./components/hooks/useFetch";
import { TrackerData } from "./utils/@types/custom";

function App() {
  const localDataSource = "data.json";
  const { data, error, loading } = useFetch({ localDataSource });
  const [timeframe, setTimeframe] = useState("");

  const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
    switch (e.currentTarget.value) {
      case "daily":
        setTimeframe("daily");
        break;
      case "weekly":
        setTimeframe("weekly");
        break;
      case "monthly":
        setTimeframe("monthly");
        break;
      default:
        setTimeframe("daily");
    }
  };

  console.log(timeframe);
  return (
    <main className="container">
      <h1 className="sr-only">Time Tracking Dashboard</h1>
      <div className="switcher">
        <ProfileCard onClick={handleClick} />
        <CardGrid
          data={data as TrackerData[]}
          loading={loading}
          error={error}
        />
      </div>
    </main>
  );
}

export default App;
