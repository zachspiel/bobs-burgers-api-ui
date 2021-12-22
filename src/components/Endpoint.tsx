import { Divider } from 'primereact/divider';
import React from 'react';

interface Props {
  data: String[];
  about: String;
  name: String;
  url: String;
  exampleData?: String;
}

const Endpoint = (props: Props): JSX.Element => {
  return (
    <div className='row justify-content-center mt-5'>
      <div className='col-md-7 col-sm-12'>
        <h2 id={props.name.toLocaleLowerCase().split(' ').join('-')}>{props.name}</h2>
        <Divider />
        {props.url.length > 0 && (
          <>
            The {props.name} endpoint provides information on all {props.about} Bob's
            Burgers.
          </>
        )}
        {props.url.length === 0 && <>{props.about}</>}
        <pre>https://bobsburgers-api.herokuapp.com/{props.url}</pre>
        <pre>https://bobsburgers-api.herokuapp.com/{props.url}:id</pre>
        {props.data.length > 0 && (
          <>
            <p>Available Data:</p>
            <ul>
              {props.data.map((data, index) => (
                <li key={index}>{data}</li>
              ))}
            </ul>
          </>
        )}
        {props.exampleData !== undefined && (
          <>
            Example Result:
            <pre> {JSON.stringify(props.exampleData, null, 2)}</pre>
          </>
        )}
      </div>
    </div>
  );
};

export default Endpoint;
