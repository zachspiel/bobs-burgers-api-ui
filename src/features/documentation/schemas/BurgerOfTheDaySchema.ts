import { EndpointSchema } from "../Schema";

const BURGER_OF_THE_DAY: EndpointSchema = [
  {
    key: "id",
    type: "number",
    description: "The unique id for the burger of the day",
  },
  {
    key: "burgers",
    type: "string[]",
    description: "The burger of the day that appeared in the episode",
  },
  {
    key: "price",
    type: "string",
    description: "The price for the burger of the day",
  },
  {
    key: "season",
    type: "number",
    description: "The season that the burger of the day appeared in",
  },
  {
    key: "episode",
    type: "number",
    description: `The episode that the burger of the day appeared in`,
  },
  {
    key: "episodeUrl",
    type: "url",
    description: `The url for the episode that the burger of the day appeared in`,
  },
  {
    key: "url",
    type: "url",
    description: `The unique link for the burger of the day`,
  },
];

export default BURGER_OF_THE_DAY;
