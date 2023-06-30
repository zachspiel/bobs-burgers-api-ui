import Endpoint from "../Endpoint";
import BurgerOfTheDaySchema from "../schemas/BurgerOfTheDaySchema";
import burgersOfTheDay from "@bobs-burgers-api/data/burgerOfTheDay.json";

const BurgerOfTheDayEndpoint = (): JSX.Element => {
  return (
    <Endpoint
      about="burgers of the day in "
      name="Burger of The Day"
      pluralName="burgers of the day"
      url="burgerOfTheDay/"
      schema={BurgerOfTheDaySchema}
      exampleData={burgersOfTheDay}
    />
  );
};

export default BurgerOfTheDayEndpoint;
