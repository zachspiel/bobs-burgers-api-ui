import React from "react";
import { Divider } from "primereact/divider";
import { performGetRequest } from "../../services/apiService";
import { getJsonCodeBlock, getUrlCodeBlock } from "../../util";

const FilterExample = (): JSX.Element => {
  const [characters, setChracters] = React.useState([]);
  const [episodes, setEpisodes] = React.useState([]);

  React.useEffect(() => {
    performGetRequest("characters?hairColor=Blonde&id=50").then((data) =>
      setChracters(data)
    );
    performGetRequest("episodes?airDate=January 16, 2011").then((data) =>
      setEpisodes(data)
    );
  }, []);

  return (
    <div className="row justify-content-center mt-5">
      <div className="col-lg-7 col-md-9 col-sm-12">
        <h2 id="filter-endpoints" className="fw-bold">
          Filtering Endpoints
        </h2>
        <Divider />
        <p>All endpoints support filtering on any available key within their schema.</p>
        <h4 className="fw-bold">Example Results:</h4>
        <p>
          Find a character characters with <span className="highlight-block">Blonde</span>{" "}
          hair
        </p>
        {getUrlCodeBlock(`characters?hairColor=Blonde&id=50`)}
        {getJsonCodeBlock(characters)}
        <p>
          Find all episodes that aired on{" "}
          <span className="highlight-block">January 16, 2011</span>
        </p>
        {getUrlCodeBlock(`episodes?airDate=January 16,2011`)}
        {getJsonCodeBlock(episodes)}
      </div>
    </div>
  );
};

export default FilterExample;
