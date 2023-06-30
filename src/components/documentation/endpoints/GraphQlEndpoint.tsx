import Endpoint from "../Endpoint";

const GraphQlEndpoint = (): JSX.Element => {
  return (
    <Endpoint
      about="The GraphQL endpoint provides a GraphQL wrapper around the Bob's Burgers REST API."
      name="GraphQL"
      url={"graphql"}
      isGraphQl
    />
  );
};

export default GraphQlEndpoint;
