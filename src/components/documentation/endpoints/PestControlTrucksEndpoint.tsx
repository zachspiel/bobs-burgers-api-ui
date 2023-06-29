import pestControlTrucks from "@bobs-burgers-api/data/pestControlTruck.json";
import Endpoint from "../Endpoint";
import getRunningGag from "../schemas/RunningGagSchema";
import Message from "@bobs-burgers-api/components/common/Message";

const PestControlTrucksEndpoint = (): JSX.Element => {
  return (
    <Endpoint
      about="pest control trucks in"
      name="Pest Control Truck"
      pluralName="pest control trucks"
      url="pestControlTruck/"
      schema={getRunningGag("pest control truck")}
      exampleData={pestControlTrucks}
      message={
        <Message message="Please note, the first 13 pest control trucks all have the same name and image. This is because the same pest control truck was used in every episode in the first season. " />
      }
    />
  );
};

export default PestControlTrucksEndpoint;
