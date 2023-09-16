import characters from "@bobs-burgers-api/data/characters.json";
import UrlCodeBlock from "../common/UrlCodeBlock";
import Divider from "./Divider";
import JsonCodeBlock from "../common/JsonCodeBlock";

const SortingLimiting = (): JSX.Element => {
  return (
    <div className="row justify-content-center mt-5">
      <div className="col-lg-7 col-md-9 col-sm-12">
        <h2 id="sort-limit" className="fw-bold">
          Sorting and Limiting
        </h2>
        <Divider />
        <p>
          <span>All endpoints support the </span>
          <span className="highlight-block"> sortBy</span>,{" "}
          <span className="highlight-block"> orderBy</span>,{" "}
          <span className="highlight-block">limit</span>, and{" "}
          <span className="highlight-block"> skip</span>
          <span> parameters.</span>
        </p>
        <h4 className="fw-bold">Example Results:</h4>
        Sort in ascending order:
        <UrlCodeBlock endpoint="characters?sortBy=name&OrderBy=asc&limit=1&skip=0" />
        <JsonCodeBlock data={characters[0]} />
        Sort in descending order:
        <UrlCodeBlock endpoint="characters?sortBy=name&OrderBy=desc&limit=1&skip=0" />
        <JsonCodeBlock data={characters[characters.length - 1]} />
      </div>
    </div>
  );
};

export default SortingLimiting;
