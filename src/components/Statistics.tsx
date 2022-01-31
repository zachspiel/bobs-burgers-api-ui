import React from 'react';
import { Chart } from 'primereact/chart';
import { Divider } from 'primereact/divider';

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

  return (
    <div className='row justify-content-center mt-5'>
      <div className='col-md-7 col-sm-12'>
        <h2 id='statistics' className='fw-bold'>
          Statistics
        </h2>
        <Divider />
        <div className='card'>
          <Chart type='bar' data={basicData} />
        </div>
      </div>
    </div>
  );
};

export default Statistics;
