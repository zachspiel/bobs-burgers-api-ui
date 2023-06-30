import endCredits from "@bobs-burgers-api/data/endCreditsSequence.json";
import Endpoint from "../Endpoint";
import EndCreditsSequenceSchema from "../schemas/EndCreditsSequence";

const EndCreditsSequenceEndpoint = (): JSX.Element => {
  return (
    <Endpoint
      about="end credits sequences in"
      name="End Credits Sequence"
      pluralName="end credits sequences"
      url="endCreditsSequence/"
      schema={EndCreditsSequenceSchema}
      exampleData={endCredits}
    />
  );
};

export default EndCreditsSequenceEndpoint;
