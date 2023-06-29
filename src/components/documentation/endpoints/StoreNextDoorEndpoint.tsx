import Endpoint from "../Endpoint";
import StoreNextDoorSchema from "../schemas/StoreNextDoor";
import storesNextDoor from "@bobs-burgers-api/data/storeNextDoor.json";

const StoreNextDoorEndpoint = (): JSX.Element => {
  return (
    <Endpoint
      about="storefronts next to "
      name="Store Next Door"
      pluralName="stores next door"
      url="storeNextDoor/"
      schema={StoreNextDoorSchema}
      exampleData={storesNextDoor}
    />
  );
};

export default StoreNextDoorEndpoint;
