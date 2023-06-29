"use client";

import { getJsonCodeBlock, getUrlCodeBlock } from "@bobs-burgers-api/util/util";
import Divider from "./Divider";

interface Props {
  characters: unknown[];
  episodes: unknown[];
}

const FilterExample = (props: Props): JSX.Element => {
  const { characters, episodes } = props;

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
