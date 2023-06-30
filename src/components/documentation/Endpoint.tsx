import Schema, { EndpointSchema } from "./Schema";
import UrlCodeBlock from "../common/UrlCodeBlock";
import JsonCodeBlock from "../common/JsonCodeBlock";
import Divider from "./Divider";

interface Props {
  about: string;
  name: string;
  isRoot?: boolean;
  isGraphQl?: boolean;
  pluralName?: string;
  singularName?: string;
  url: string;
  exampleData?: unknown[];
  schema?: EndpointSchema;
  message?: JSX.Element;
}

const Endpoint = (props: Props): JSX.Element => {
  const pluralName = props.pluralName ?? props.name.toLowerCase();
  const singularName = props.singularName ?? props.name.toLowerCase();
  const endpointId = props.name.toLocaleLowerCase().split(" ").join("-");

  return (
    <div className="row justify-content-center mt-5">
      <div className="col-lg-7 col-md-9 col-sm-12">
        <h2 id={endpointId} className="fw-bold">
          {props.name}
        </h2>
        <Divider />

        {(props.isRoot || props.isGraphQl) && (
          <>
            {props.about} <UrlCodeBlock endpoint={props.url} />
          </>
        )}
        {!props.isRoot && props.exampleData !== undefined && (
          <>
            <>
              The {props.name} endpoint provides information on all {props.about}
              Bob&apos;s Burgers.
            </>
            {props.message}

            <h4 className="fw-bold mt-5">Get all {pluralName}</h4>

            <p>
              The list of all {pluralName} can be found by using the{" "}
              <span className="highlight-block">/{props.url}</span> endpoint.
            </p>

            <UrlCodeBlock endpoint={props.url} />

            <h4 className="fw-bold mt-5">Get a single {singularName}</h4>
            <p>
              A single {singularName} can be found by adding the id parameter to the{" "}
              <span className="highlight-block">/{props.url}</span> endpoint.
            </p>

            <UrlCodeBlock endpoint={`${props.url}1`} />
            <JsonCodeBlock data={props.exampleData?.[0]} />

            <h4 className="fw-bold mt-5">Get multiple {pluralName}</h4>
            <p>
              Multiple {pluralName} can be found by adding an array of ids to the{" "}
              <span className="highlight-block">/{props.url}</span> endpoint. (E.g.{" "}
              <span className="highlight-block">[1,2,3]</span> or
              <span className="highlight-block">1,2,3</span> )
            </p>

            <UrlCodeBlock endpoint={`${props.url}[1,2,3]`} />
            <JsonCodeBlock data={props.exampleData} />
          </>
        )}
        {props.schema !== undefined && <Schema name={props.name} schema={props.schema} />}
        {props.isRoot && (
          <>
            <h4 className="fw-bold">Example Result:</h4>
            <JsonCodeBlock data={props.exampleData?.[0] ?? {}} />
          </>
        )}
      </div>
    </div>
  );
};

export default Endpoint;
