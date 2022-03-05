import React from 'react';
import { Divider } from 'primereact/divider';
import { performGetRequest } from '../../services/apiService';
import { getJsonCodeBlock, getUrlCodeBlock } from '../../util';

const SortingLimiting = (): JSX.Element => {
  const [sortAsc, setSortAsc] = React.useState([]);
  const [sortDesc, setSortDesc] = React.useState([]);
  const sortByOptions = ['sortBy', 'orderBy', 'limit and', 'skip paramters.'];

  React.useEffect(() => {
    performGetRequest('characters?sortBy=name&OrderBy=asc&limit=1&skip=0').then(
      (data) => setSortAsc(data)
    );
    performGetRequest(
      'characters?sortBy=name&OrderBy=desc&limit=1&skip=0'
    ).then((data) => setSortDesc(data));
  }, []);

  return (
    <div className="row justify-content-center mt-5">
      <div className="col-md-7 col-sm-12">
        <h2 id="sort-limit" className="fw-bold">
          Sorting and Limiting
        </h2>
        <Divider />
        <p>
          All endpoints support the{' '}
          {sortByOptions.map((option, index) => {
            return (
              <span className="highlight-block me-1" key={index}>
                {option}
                {index !== sortByOptions.length - 1 && ','}
              </span>
            );
          })}
        </p>
        <h4 className="fw-bold">Example Results:</h4>
        Sort in ascending order:
        {getUrlCodeBlock('characters?sortBy=name&OrderBy=asc&limit=1&skip=0')}
        {getJsonCodeBlock(sortAsc)}
        Sort in descending order:
        {getUrlCodeBlock('characters?sortBy=name&OrderBy=desc&limit=1&skip=0')}
        {getJsonCodeBlock(sortDesc)}
      </div>
    </div>
  );
};

export default SortingLimiting;