"use client";

import { RootEndpoint } from "@bobs-burgers-api/types/RootEndpoint";
import Endpoint from "../Endpoint";
import useSWR from "swr";
import { ROOT_URL } from "@bobs-burgers-api/util/constants";

async function getRootData(): Promise<RootEndpoint> {
  return fetch(ROOT_URL).then((result) => result.json());
}

const RootEndpointComponent = (): JSX.Element => {
  const { data } = useSWR(ROOT_URL, getRootData);

  return (
    <Endpoint
      about="The Root endpoint provides information on all available resources within the API. All requests are GET requests and are sent over HTTPS."
      name="Root URL"
      url=""
      isRoot
      exampleData={data ? [data] : undefined}
    />
  );
};

export default RootEndpointComponent;
