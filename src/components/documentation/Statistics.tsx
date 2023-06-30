"use client";

import { Chart } from "primereact/chart";
import { Divider } from "primereact/divider";

export const TOTAL_CHARACTERS = 496;
export const TOTAL_EPISODES = 259;
export const TOTAL_STORES_NEXT_DOOR = 256;
export const TOTAL_PEST_CONTROL_TRUCKS = 257;
export const TOTAL_END_CREDITS = 228;
export const TOTAL_BURGERS = 333;

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
      <div className="col-lg-7 col-md-9 col-sm-12">
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
