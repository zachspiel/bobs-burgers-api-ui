import React from 'react';
import { Chart } from 'primereact/chart';

interface Props {
  totalCharacters: number;
  totalEpisodes: number;
  totalStoresNextDoor: number;
  totalPestControlTrucks: number;
  totalEndCreditsSequences: number;
}

const Statistics = (props: Props): JSX.Element => {
  const basicData = {
    labels: [
      'characters',
      'episodes',
      'storeNextDoor',
      'pestControlTruck',
      'endCreditsSequence',
    ],
    datasets: [
      {
        label: 'Total data per endpoint',
        backgroundColor: '#42A5F5',
        data: [
          props.totalCharacters,
          props.totalEpisodes,
          props.totalStoresNextDoor,
          props.totalPestControlTrucks,
          props.totalEndCreditsSequences,
        ],
      },
    ],
  };

  return <Chart type='bar' data={basicData} />;
};

export default Statistics;
