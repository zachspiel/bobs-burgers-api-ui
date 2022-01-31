import React from 'react';
import { Divider } from 'primereact/divider';
import Sidebar from '../../components/Sidebar';
import Endpoint from '../../components/Endpoint';
import { performGetRequest } from '../../services/apiService';
import Statistics from '../../components/Statistics';
import Playground from '../../components/Playground';

const Test = () => {
  const [rootData, setRootData] = React.useState('');
  const [episodes, setEpisodes] = React.useState([]);
  const [storesNextDoor, setStoresNextDoor] = React.useState([]);
  const [endCreditsSequences, setEndCreditsSequences] = React.useState([]);
  const [pestControlTrucks, setPestControlTrucks] = React.useState([]);
  const [characters, setCharacters] = React.useState([]);
  const [sortAsc, setSortAsc] = React.useState([]);
  const [sortDesc, setSortDesc] = React.useState([]);

  React.useEffect(() => {
    performGetRequest('characters').then((data) => setCharacters(data));
    performGetRequest('').then((data) => setRootData(data));
    performGetRequest('episodes').then((data) => setEpisodes(data));
    performGetRequest('storeNextDoor').then((data) => setStoresNextDoor(data));
    performGetRequest('pestControlTruck').then((data) => setPestControlTrucks(data));
    performGetRequest('endCreditsSequence').then((data) => setEndCreditsSequences(data));
    performGetRequest('characters?sortBy=name&OrderBy=asc&limit=1&skip=0').then((data) =>
      setSortAsc(data)
    );
    performGetRequest('characters?sortBy=name&OrderBy=desc&limit=1&skip=0').then((data) =>
      setSortDesc(data)
    );
  }, []);

  return (
    <div>
      <div className='d-flex'>
        <Sidebar />

        <div className='main-content'>
          <div className='mt-4 p-5 text-white rounded text-center' id='jumbotron'>
            <h1 className='display-4 header'>Bob's Burgers API documentation</h1>
            <p className='lead'>Get all data for Bob's Burgers from a single API.</p>
          </div>

          <div className='row justify-content-center mt-5'>
            <div className='col-md-7 col-sm-12'>
              <h2 id='introduction'>Introduction</h2>
              <Divider />
              <b>What is this?</b>
              <p>
                The Bob's Burgers API is a programatically accessable data source for
                Bob's Burgers. The data is formatted in JSON and can be accessed through a
                simple REST API.
              </p>
            </div>
          </div>
          <Playground />
          <Statistics
            totalCharacters={characters.length - 1}
            totalEpisodes={episodes.length - 1}
            totalStoresNextDoor={storesNextDoor.length - 1}
            totalPestControlTrucks={pestControlTrucks.length - 1}
            totalEndCreditsSequences={endCreditsSequences.length - 1}
          />
          <div className='row justify-content-center mt-5'>
            <div className='col-md-7 col-sm-12'>
              <h2 id='get-started' className='fw-bold'>
                Get Started
              </h2>
              <Divider />
              <div className='info-box'>
                <div className='title'>Quickstart - Get a character</div>
                <div className=''>
                  <p>
                    Go to{' '}
                    <a
                      href='https://bobsburgers-api.herokuapp.com/characters/1'
                      target='_blank'
                      rel='noreferrer'
                    >
                      https://bobsburgers-api.herokuapp.com/characters/1
                    </a>{' '}
                    to make an API request for the first character "Dottie Minerva".
                  </p>
                </div>
              </div>
              Example result:
              <pre> {JSON.stringify(characters[0], null, 2)}</pre>
            </div>
          </div>
          <div className='row justify-content-center mt-5'>
            <div className='col-md-7 col-sm-12'>
              <h2 id='get-started'>Sorting and Limiting</h2>
              <Divider />
              <p>
                All endpoints support the <span className='text-primary'>sortBy</span>,{' '}
                <span className='text-primary'>OrderBy</span>,{' '}
                <span className='text-primary'>limit</span>, and{' '}
                <span className='text-primary'>skip</span> paramters.
              </p>
              Sort in ascending order:
              <pre>
                https://bobsburgers-api.herokuapp.com/characters?sortBy=name&OrderBy=asc&limit=1&skip=0
              </pre>
              <pre> {JSON.stringify(sortAsc, null, 2)}</pre>
              Sort in descending order:
              <pre>
                https://bobsburgers-api.herokuapp.com/characters?sortBy=name&OrderBy=desc&limit=1&skip=0
              </pre>
              <pre> {JSON.stringify(sortDesc, null, 2)}</pre>
            </div>
          </div>
          <div className='row justify-content-center mt-5'>
            <div className='col-md-7 col-sm-12'>
              <h2 id='base-url'>Base URL</h2>
              <Divider />
              The base URL is the root URL for the entire API. If a request returns a 404
              response, check this URL first.
              <pre>https://bobsburgers-api.herokuapp.com/</pre>
            </div>
          </div>
          <Endpoint
            data={[
              'characters',
              'episodes',
              'storeNextDoor',
              'pestControlTruck',
              'endCreditsSequence',
            ]}
            about='The Root endpoint provides information on all available resources within the API.'
            name='Root URL'
            url=''
            exampleData={rootData}
          />
          <Endpoint
            data={[
              'id',
              'name',
              'image',
              'hairColor',
              'gender',
              'occupation',
              'relatives',
              'url',
            ]}
            about='characters in'
            name='Characters'
            url='characters/'
            exampleData={characters[0]}
          />
          <Endpoint
            data={[
              'id',
              'name',
              'productionCode',
              'airDate',
              'season',
              'episode',
              'totalViewers',
              'url',
            ]}
            about='episodes in'
            name='Episodes'
            url='episodes/'
            exampleData={episodes[0]}
          />
          <Endpoint
            data={['id', 'name', 'image', 'episode', 'season', 'url']}
            about='storefronts next to'
            name='Store Next Door'
            url='storeNextDoor/'
            exampleData={storesNextDoor[0]}
          />
          <Endpoint
            data={['id', 'name', 'image', 'episode', 'season', 'url']}
            about='pest control trucks in'
            name='Pest Control Truck'
            url='pestControlTruck/'
            exampleData={pestControlTrucks[0]}
          />
          <Endpoint
            data={['id', 'image', 'episode', 'season', 'url']}
            about='end credits sequences in'
            name='End Credits Sequence'
            url='endCreditsSequence/'
            exampleData={endCreditsSequences[0]}
          />
        </div>
      </div>
      <div className='d-flex justify-content-end p-4 footer'>
        <p>Created 2021</p>

        <a
          href='https://github.com/zachspiel'
          target='_blank'
          className='p-button p-component p-button-sm ms-3'
          rel='noreferrer'
        >
          <span className='p-button-icon p-c p-button-icon-left pi pi-github' />
          <span className='p-button-label p-c follow-button'>Follow @zachspiel</span>
        </a>
      </div>
    </div>
  );
};

export default Test;
