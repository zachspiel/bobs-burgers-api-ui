import React from 'react';
import { Divider } from 'primereact/divider';
import { performGetRequest } from '../../services/apiService';

const FilterExample = (): JSX.Element => {
  const [characters, setChracters] = React.useState([]);
  const [episodes, setEpisodes] = React.useState([]);

  React.useEffect(() => {
    performGetRequest('characters?hairColor=Blonde&id=67').then((data) =>
      setChracters(data)
    );
    performGetRequest('episodes?airDate=January 16, 2011').then((data) =>
      setEpisodes(data)
    );
  }, []);
  return (
    <div className="row justify-content-center mt-5">
      <div className="col-md-7 col-sm-12">
        <h2 id="filter-endpoints" className="fw-bold">
          Filtering Endpoints
        </h2>
        <Divider />
        <p>
          All endpoints support filtering on any available key within their
          schema.
        </p>
        <h4 className="fw-bold">Example Results:</h4>
        <p>
          Find a character characters with{' '}
          <span className="highlight-block">Blonde</span> hair
        </p>
        <pre>
          https://bobsburgers-api.herokuapp.com/characters?hairColor=Blonde&id=67
        </pre>
        <pre> {JSON.stringify(characters, null, 2)}</pre>
        <p>
          Find all episodes that aired on{' '}
          <span className="highlight-block">January 16, 2011</span>
        </p>
        <pre>
          https://bobsburgers-api.herokuapp.com/episodes?airDate=January 16,
          2011
        </pre>
        <pre> {JSON.stringify(episodes, null, 2)}</pre>
      </div>
    </div>
  );
};

export default FilterExample;
