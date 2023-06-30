"use client";

import pestControlTrucks from "@bobs-burgers-api/data/pestControlTruck.json";
import Endpoint from "../Endpoint";
import Message from "@bobs-burgers-api/components/common/Message";
import * as Hooks from "@bobs-burgers-api/redux/hooks";
import getPestControlTruckSchema from "../schemas/PestControlTruckSchema";

const PestControlTrucksEndpoint = (): JSX.Element => {
  const { apiVersion } = Hooks.useAppSelector((state) => state.app);

  return (
    <Endpoint
      about="pest control trucks in"
      name="Pest Control Truck"
      pluralName="pest control trucks"
      url="pestControlTruck/"
      schema={getPestControlTruckSchema(apiVersion)}
      exampleData={pestControlTrucks}
      message={
        <Message message="Please note, the first 13 pest control trucks all have the same name and image. This is because the same pest control truck was used in every episode in the first season. " />
      }
    />
  );
};

export default PestControlTrucksEndpoint;
