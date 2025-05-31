import { EndpointSchema } from "../types/endpointSchema";

export const burgerOfTheDaySchema: EndpointSchema = [
  {
    key: "id",
    type: "number",
    description: "The unique id for the burger of the day",
  },
  {
    key: "name",
    type: "string",
    description: "The name of the burger of the day",
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
    type: "string",
    description: `The url for the episode that the burger of the day appeared in`,
  },
  {
    key: "url",
    type: "string",
    description: `The unique link for the burger of the day`,
  },
];
