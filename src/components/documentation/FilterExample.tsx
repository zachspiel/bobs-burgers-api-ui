"use client";

import Divider from "./Divider";
import UrlCodeBlock from "../common/UrlCodeBlock";
import JsonCodeBlock from "../common/JsonCodeBlock";
import useSWR from "swr";
import { ROOT_URL } from "@bobs-burgers-api/util/constants";
import { Character } from "@bobs-burgers-api/types/Character";
import { Episode } from "@bobs-burgers-api/types/Episode";

async function getCharacters(): Promise<Character[]> {
  return fetch(`${ROOT_URL}/characters?hair=Blonde&id=52&limit=1`).then((res) =>
    res.json(),
  );
}

async function getEpisodes(): Promise<Episode[]> {
  return fetch(`${ROOT_URL}/episodes?airDate=January 16, 2011`).then((res) =>
    res.json(),
  );
}

const FilterExample = (): JSX.Element => {
  const { data: characters } = useSWR(`${ROOT_URL}/characters`, getCharacters);
  const { data: episodes } = useSWR(`${ROOT_URL}/episodes`, getEpisodes);

  return (
    <div className="row justify-content-center mt-5">
      <div className="col-lg-7 col-md-9 col-sm-12">
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
          Find a character characters with{" "}
          <span className="highlight-block">Blonde</span> hair
        </p>
        <UrlCodeBlock endpoint="characters?hair=Blonde&id=52" />
        <JsonCodeBlock data={characters} />

        <p>
          Find all episodes that aired on{" "}
          <span className="highlight-block">January 16, 2011</span>
        </p>

        <UrlCodeBlock endpoint="episodes?airDate=January 16, 2011" />
        <JsonCodeBlock data={episodes} />
      </div>
    </div>
  );
};

export default FilterExample;
