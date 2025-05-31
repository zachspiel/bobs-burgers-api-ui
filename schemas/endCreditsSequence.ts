import { EndpointSchema } from "../types/endpointSchema";

export const endCreditsSequenceSchema: EndpointSchema = [
  {
    key: "id",
    type: "number",
    description: `The unique id for the end credits sequence.`,
  },
  {
    key: "image",
    type: "string",
    description: `The url for the  end credits sequence's image`,
  },
  {
    key: "season",
    type: "number",
    description: `The season that the end credits sequence appeared in`,
  },
  {
    key: "episode",
    type: "number",
    description: `The episode that the end credits sequence appeared in`,
  },
  {
    key: "episodeUrl",
    type: "string",
    description: `The url for the episode that the end credits sequence appeared in`,
  },
  {
    key: "url",
    type: "string",
    description: `The unique link for the end credits sequence`,
  },
];
