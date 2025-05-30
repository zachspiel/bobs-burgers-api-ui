import { EndpointSchema } from "../types/endpointSchema";

export const pestControTruckSchema: EndpointSchema = [
  {
    key: "id",
    type: "number",
    description: "The unique id for the pest control truck",
  },
  {
    key: "name",
    type: "string",
    description: "The  pest control truck's name",
  },
  {
    key: "image",
    type: "string",
    description: "The url for the  pest control truck's image",
  },
  {
    key: "season",
    type: "number",
    description: "The season that the pest control truck appeared in",
  },
  {
    key: "episode",
    type: "number",
    description: "The episode that the pest control truck appeared in",
  },
  {
    key: "episodeUrl",
    type: "string",
    description: "The url for the episode that the pest control truck appeared in.",
  },
  {
    key: "url",
    type: "string",
    description: "The unique link for the pest control truck",
  },
];
