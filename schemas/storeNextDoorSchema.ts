import { EndpointSchema } from "../types/endpointSchema";

export const storeNextDoorSchema: EndpointSchema = [
  {
    key: "id",
    type: "number",
    description: "The unique id for the store",
  },
  {
    key: "name",
    type: "string",
    description: `The store's name`,
  },
  {
    key: "image",
    type: "url",
    description: "The url for the store's image",
  },
  {
    key: "season",
    type: "number",
    description: "The season that the store appeared in",
  },
  {
    key: "episode",
    type: "number",
    description: `The episode that the store appeared in`,
  },
  {
    key: "episodeUrl",
    type: "url",
    description: `The url for the episode that the store appeared in`,
  },
  {
    key: "url",
    type: "url",
    description: `The unique link for the store`,
  },
];
