import React from 'react';
import { Divider } from 'primereact/divider';

interface Props {
  data: String[];
  about: String;
  name: String;
  url: String;
  exampleData?: String;
}

const Endpoint = (props: Props): JSX.Element => {
  const getPrettyString = (data: String) => {
    return JSON.stringify(data, null, 2);
  };

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
            <pre> {getPrettyString(props.exampleData)}</pre>
          </>
        )}
      </div>
    </div>
  );
};

export default Endpoint;
