import React from 'react';
import { Divider } from 'primereact/divider';
import Schema, { EndpointSchema } from '../features/documentation/Schema';
import { performGetRequest } from '../services/apiService';

interface Props {
  data?: string[];
  about: string;
  name: string;
  pluralName?: string;
  singularName?: string;
  url: string;
  exampleData?: string;
  schema?: EndpointSchema;
  skipFetch?: boolean;
}

const Endpoint = (props: Props): JSX.Element => {
  const getPrettyString = (data: any) => {
    return JSON.stringify(data, null, 2);
  };
  const [exampleData, setExampleData] = React.useState([]);

  const url = `${props.url}[1,2,3]`;
  const shouldFetchData = !props.skipFetch ?? false;

  React.useEffect(() => {
    if (shouldFetchData) {
      performGetRequest(url).then((data) => setExampleData(data));
    }
  }, [shouldFetchData, url]);

  const pluralName = props.pluralName ?? props.name.toLowerCase();
  const singularName = props.singularName ?? props.name.toLowerCase();

  return (
    <div className='row justify-content-center mt-5'>
      <div className='col-md-7 col-sm-12'>
        <h2 id={props.name.toLocaleLowerCase().split(' ').join('-')} className='fw-bold'>
          {props.name}
        </h2>
        <Divider />
        {props.url.length > 0 && (
          <>
            The {props.name} endpoint provides information on all {props.about} Bob's
            Burgers.
          </>
        )}
        {props.url.length === 0 && <>{props.about}</>}
        {shouldFetchData && (
          <>
            <h4 className='fw-bold mt-5'>Get all {pluralName}</h4>

            <p>
              The list of all {pluralName} can be found by using the{' '}
              <span className='highlight-block'>/{props.url}</span> endpoint.
            </p>
            <pre>https://bobsburgers-api.herokuapp.com/{props.url}</pre>

            <h4 className='fw-bold mt-5'>Get a single {singularName}</h4>
            <p>
              A single {singularName} can be found by adding the id parameter to the{' '}
              <span className='highlight-block'>/{props.url}</span> endpoint.
            </p>
            <pre>https://bobsburgers-api.herokuapp.com/{props.url}1</pre>

            <pre>{getPrettyString(exampleData[0])}</pre>

            <h4 className='fw-bold mt-5'>Get multiple {pluralName}</h4>
            <p>
              Multiple {pluralName} can be found by adding an array of ids to the{' '}
              <span className='highlight-block'>/{props.url}</span> endpoint. (E.g.{' '}
              <span className='highlight-block'>[1,2,3]</span> or
              <span className='highlight-block'>1,2,3</span> )
            </p>
            <pre>https://bobsburgers-api.herokuapp.com/{props.url}[1,2,3]</pre>
            <pre>{getPrettyString(exampleData)}</pre>
          </>
        )}
        {props.schema !== undefined && <Schema name={props.name} schema={props.schema} />}
        {props.data && (
          <>
            <p>Available Data:</p>
            <ul>
              {props.data?.map((data, index) => (
                <li key={index}>{data}</li>
              ))}
            </ul>
          </>
        )}
        {!shouldFetchData && (
          <>
            <h4 className='fw-bold'>Example Result:</h4>
            <pre> {getPrettyString(props.exampleData)}</pre>
          </>
        )}
      </div>
    </div>
  );
};

export default Endpoint;
