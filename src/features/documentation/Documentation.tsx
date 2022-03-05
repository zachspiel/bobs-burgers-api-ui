import React from 'react';
import Navbar from '../common/Navbar';
import Endpoint from './Endpoint';
import Playground from '../../components/Playground';
import Sidebar from '../../components/Sidebar';
import Statistics from '../../components/Statistics';
import { performGetRequest } from '../../services/apiService';
import { ScrollTop } from 'primereact/scrolltop';
import Footer from '../common/Footer';
import { Divider } from 'primereact/divider';
import CharacterSchema from './schemas/CharacterSchema';
import getRunningGag from './schemas/RunningGagSchema';
import EpisodeSchema from './schemas/EpisodeSchema';
import FilterExample from './FilterExample';
import EndCreditsSequence from './schemas/EndCreditsSequence';
import SortingLimiting from './SortingLimiting';

const Documentation = (): JSX.Element => {
  const [rootData, setRootData] = React.useState('');

  React.useEffect(() => {
    performGetRequest('').then((data) => setRootData(data));
  }, []);

  return (
    <div className="container-fluid">
      <Navbar parentClassName="custom-menubar" displayMenuButton />

      <div
        className={`sidebar p-4 custom-sidebar`}
        style={{ backgroundColor: '#FFFFFF' }}
      >
        <Sidebar />
      </div>
      <div className="main-content">
        <div className="row justify-content-center mt-5">
          <div className="col-md-7 col-sm-12 mt-5">
            <h2 id="introduction" className="fw-bold">
              Introduction
            </h2>
            <Divider />
            <b>What is this?</b>
            <p>
              The Bob's Burgers API is a REST API based on the television show{' '}
              <a
                href="https://www.fox.com/bobs-burgers/"
                target="_blank"
                className="text-primary"
                rel="noreferrer"
              >
                Bob's Burgers
              </a>
              . The Bob's Burgers API contains data for hundreds of characters,
              episodes, running gags, and images from the show.
            </p>

            <p>
              If you are using this API please consider supporting the project
              by{' '}
              <a
                href="https://www.buymeacoffee.com/bobsburgersapi"
                target="_blank"
                rel="noreferrer"
                className="text-primary"
              >
                buying me a coffee{' '}
              </a>
              to help maintain the API and keep it free for everyone.
            </p>
          </div>
        </div>
        <Playground />
        <Statistics
          totalCharacters={501}
          totalEpisodes={228}
          totalStoresNextDoor={225}
          totalPestControlTrucks={225}
          totalEndCreditsSequences={228}
        />
        <Endpoint
          about="The Root endpoint provides information on all available resources within the API. All requests are GET requests and are sent over HTTPS."
          name="Root URL"
          skipFetch={true}
          url=""
          exampleData={rootData}
        />
        <SortingLimiting />
        <FilterExample />
        <Endpoint
          schema={CharacterSchema}
          about="characters in"
          name="Characters"
          pluralName="characters"
          singularName="character"
          url="characters/"
        />
        <Endpoint
          about="episodes in"
          name="Episodes"
          url="episodes/"
          singularName="episode"
          schema={EpisodeSchema}
        />
        <Endpoint
          about="storefronts next to"
          name="Store Next Door"
          pluralName="stores next door"
          url="storeNextDoor/"
          schema={getRunningGag('store')}
        />
        <Endpoint
          about="pest control trucks in"
          name="Pest Control Truck"
          pluralName="pest control trucks"
          url="pestControlTruck/"
          schema={getRunningGag('pest control truck')}
        />
        <Endpoint
          about="end credits sequences in"
          name="End Credits Sequence"
          pluralName={`end credits sequences`}
          url="endCreditsSequence/"
          schema={EndCreditsSequence}
        />
        <Footer />
      </div>

      <ScrollTop />
    </div>
  );
};

export default Documentation;
