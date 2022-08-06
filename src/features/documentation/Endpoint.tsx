import React from "react";
import { Divider } from "primereact/divider";
import Schema, { EndpointSchema } from "./Schema";
import { performGetRequest } from "../../services/apiService";
import { getJsonCodeBlock, getUrlCodeBlock } from "../../util";

interface Props {
  about: string;
  name: string;
  pluralName?: string;
  singularName?: string;
  url: string;
  exampleData?: string;
  schema?: EndpointSchema;
  skipFetch?: boolean;
  message?: JSX.Element;
}

const Endpoint = (props: Props): JSX.Element => {
  const [exampleData, setExampleData] = React.useState([]);
  const url = `${props.url}[1,2,3]`;
  const shouldFetchData = !props.skipFetch ?? false;
  const pluralName = props.pluralName ?? props.name.toLowerCase();
  const singularName = props.singularName ?? props.name.toLowerCase();
  const endpointId = props.name.toLocaleLowerCase().split(" ").join("-");

  React.useEffect(() => {
    if (shouldFetchData) {
      performGetRequest(url).then((data) => setExampleData(data));
    }
  }, [shouldFetchData, url]);

  return (
    <div className="row justify-content-center mt-5">
      <div className="col-lg-7 col-md-9 col-sm-12">
        <h2 id={endpointId} className="fw-bold">
          {props.name}
        </h2>
        <Divider />

        {!shouldFetchData && (
          <>
            {props.about} {getUrlCodeBlock(`${props.url}`)}
          </>
        )}
        {shouldFetchData && (
          <>
            <>
              The {props.name} endpoint provides information on all {props.about} Bob's
              Burgers.
            </>
            {props.message}

            <h4 className="fw-bold mt-5">Get all {pluralName}</h4>

            <p>
              The list of all {pluralName} can be found by using the{" "}
              <span className="highlight-block">/{props.url}</span> endpoint.
            </p>
            {getUrlCodeBlock(`${props.url}`)}

            <h4 className="fw-bold mt-5">Get a single {singularName}</h4>
            <p>
              A single {singularName} can be found by adding the id parameter to the{" "}
              <span className="highlight-block">/{props.url}</span> endpoint.
            </p>
            {getUrlCodeBlock(`${props.url}1`)}
            {getJsonCodeBlock(exampleData[0] ?? "")}

            <h4 className="fw-bold mt-5">Get multiple {pluralName}</h4>
            <p>
              Multiple {pluralName} can be found by adding an array of ids to the{" "}
              <span className="highlight-block">/{props.url}</span> endpoint. (E.g.{" "}
              <span className="highlight-block">[1,2,3]</span> or
              <span className="highlight-block">1,2,3</span> )
            </p>
            {getUrlCodeBlock(`${props.url}[1,2,3]`)}
            {getJsonCodeBlock(exampleData)}
          </>
        )}
        {props.schema !== undefined && <Schema name={props.name} schema={props.schema} />}
        {!shouldFetchData && (
          <>
            <h4 className="fw-bold">Example Result:</h4>
            {getJsonCodeBlock(props.exampleData)}
          </>
        )}
      </div>
    </div>
  );
};

export default Endpoint;
