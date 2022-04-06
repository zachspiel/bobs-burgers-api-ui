import React from "react";
import { Chart } from "primereact/chart";
import { Divider } from "primereact/divider";

const TOTAL_CHARACTERS = 501;
const TOTAL_EPISODES = 228;
const TOTAL_STORES_NEXT_DOOR = 225;
const TOTAL_PEST_CONTROL_TRUCKS = 225;
const TOTAL_END_CREDITS = 228;
const TOTAL_BURGERS = 333;

const Statistics = (): JSX.Element => {
  const basicData = {
    labels: [
      "characters",
      "episodes",
      "storeNextDoor",
      "pestControlTruck",
      "endCreditsSequence",
      "burgersOfTheDay",
    ],
    datasets: [
      {
        label: "Total data per endpoint",
        backgroundColor: "#42A5F5",
        data: [
          TOTAL_CHARACTERS,
          TOTAL_EPISODES,
          TOTAL_STORES_NEXT_DOOR,
          TOTAL_PEST_CONTROL_TRUCKS,
          TOTAL_END_CREDITS,
          TOTAL_BURGERS,
        ],
      },
    ],
  };

  return (
    <div className="row justify-content-center mt-5">
      <div className="col-md-7 col-sm-12">
        <h2 id="statistics" className="fw-bold">
          Statistics
        </h2>
        <Divider />
        <div className="card">
          <Chart type="bar" data={basicData} />
        </div>
      </div>
    </div>
  );
};

export default Statistics;
