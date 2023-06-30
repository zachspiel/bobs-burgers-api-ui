import Endpoint from "../Endpoint";
import Schema from "../Schema";
import CharacterSchema from "../schemas/CharacterSchema";
import RelativeSchema from "../schemas/RelativeSchema";
import characters from "@bobs-burgers-api/data/characters.json";

const CharacterEndpoint = (): JSX.Element => {
  return (
    <>
      <Endpoint
        schema={CharacterSchema}
        about="characters in "
        name="Characters"
        pluralName="characters"
        singularName="character"
        url="characters/"
        exampleData={[characters[0], characters[1], characters[2]]}
      />
      <div className="row justify-content-center mt-5">
        <div className="col-lg-7 col-md-9 col-sm-12">
          <Schema name={"Relatives"} schema={RelativeSchema} />
        </div>
      </div>
    </>
  );
};

export default CharacterEndpoint;
