import { EndpointSchema } from "../types/endpointSchema";

export const episodeSchema: EndpointSchema = [
  {
    key: "id",
    type: "number",
    description: "The unique id for the episode",
  },
  {
    key: "name",
    type: "string",
    description: `The episode's name`,
  },
  {
    key: "description",
    type: "string",
    description: `The episode's description`,
  },
  {
    key: "productionCode",
    type: "string",
    description: `The episode's production code`,
  },
  {
    key: "airDate",
    type: "string",
    description: `The episode's air date`,
  },
  {
    key: "season",
    type: "number",
    description: `The season the episode appeared in`,
  },
  {
    key: "episode",
    type: "number",
    description: `The episode number in the season`,
  },
  {
    key: "totalViewers",
    type: "string",
    description: `The episode's total viewers`,
  },
  {
    key: "url",
    type: "string",
    description: `The unique link for the episode`,
  },
  {
    key: "wikiUrl",
    type: "string",
    description: `The unique for link the episodes's wiki page`,
  },
];
