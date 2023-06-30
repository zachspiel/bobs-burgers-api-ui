import { RootEndpoint } from "@bobs-burgers-api/types/RootEndpoint";
import Endpoint from "../Endpoint";

interface Props {
  rootEndpoint: RootEndpoint;
}

const RootEndpoint = (props: Props): JSX.Element => {
  return (
    <Endpoint
      about="The Root endpoint provides information on all available resources within the API. All requests are GET requests and are sent over HTTPS."
      name="Root URL"
      url=""
      isRoot
      exampleData={[props.rootEndpoint]}
    />
  );
};

export default RootEndpoint;
