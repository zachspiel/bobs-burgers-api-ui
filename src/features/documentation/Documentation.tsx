import React from 'react';
import Navbar from '../../common/Navbar';
import Endpoint from '../../components/Endpoint';
import Playground from '../../components/Playground';
import Sidebar from '../../components/Sidebar';
import Statistics from '../../components/Statistics';
import { performGetRequest } from '../../services/apiService';
import { ScrollTop } from 'primereact/scrolltop';
import Footer from '../../common/Footer';
import { Divider } from 'primereact/divider';

const Documentation = (): JSX.Element => {
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
    <div className='container-fluid'>
      <Navbar parentClassName='custom-menubar' />
      <Sidebar className='custom-sidebar' />

      <div className='main-content'>
        <div className='row justify-content-center mt-5'>
          <div className='col-md-7 col-sm-12'>
            <h2 id='introduction' className='fw-bold'>
              Introduction
            </h2>
            <Divider />
            <b>What is this?</b>
            <p>
              The Bob's Burgers API is a REST API based on the television show{' '}
              <a
                href='https://www.fox.com/bobs-burgers/'
                target='_blank'
                className='text-primary'
                rel='noreferrer'
              >
                Bob's Burgers
              </a>
              . The Bob's Burgers API contains data for hundreds of characters, episodes,
              running gags and images from the show.
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
            <h2 id='base-url' className='fw-bold'>
              Base URL
            </h2>
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
          about='The Root endpoint provides information on all available resources within the API. All requests are GET requests and are sent over HTTPS.'
          name='Root URL'
          url=''
          exampleData={rootData}
        />
        <div className='row justify-content-center mt-5'>
          <div className='col-md-7 col-sm-12'>
            <h2 id='get-started' className='fw-bold'>
              Sorting and Limiting
            </h2>
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
        <Endpoint
          data={[
            'id',
            'name',
            'image',
            'hairColor',
            'gender',
            'occupation',
            'relatives',
            'firstEpisode',
            'voicedBy',
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
        <Footer />
      </div>

      <ScrollTop />
    </div>
  );
};

export default Documentation;
