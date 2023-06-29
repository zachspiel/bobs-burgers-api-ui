import Endpoint from "../Endpoint";
import EpisodeSchema from "../schemas/EpisodeSchema";
import episodes from "@bobs-burgers-api/data/episodes.json";

const EpisodesEndpoint = (): JSX.Element => {
  return (
    <Endpoint
      about="episodes in "
      name="Episodes"
      url="episodes/"
      singularName="episode"
      schema={EpisodeSchema}
      exampleData={episodes}
    />
  );
};

export default EpisodesEndpoint;
