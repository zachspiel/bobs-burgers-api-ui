import { EndpointSchema } from "../types/endpointSchema";

export const characterSchema: EndpointSchema = [
  {
    key: "id",
    type: "number",
    description: "The unique id for the character",
  },
  {
    key: "name",
    type: "string",
    description: `The character's name`,
  },
  {
    key: "image",
    type: "string",
    description: `The url for the character's image`,
  },
  {
    key: "hair",
    type: "string",
    nullable: true,
    description: `The character's hair color`,
  },
  {
    key: "age",
    type: "string",
    nullable: true,
    description: `The character's age`,
  },
  {
    key: "gender",
    type: "string",
    nullable: true,
    description: `The character's gender`,
  },
  {
    key: "allOccupations",
    type: "string[]",
    description: "All of the character's known occupations",
  },
  {
    key: "occupation",
    type: "string",
    nullable: true,
    description: `The character's occupation`,
  },
  {
    key: "nicknames",
    type: "string[]",
    description: "All of the character's nicknames",
  },
  {
    key: "relatives",
    type: "RELATIVES",
    description: `The character's relatives`,
  },
  {
    key: "firstEpisode",
    type: "string",
    nullable: true,
    description: `The first episode the character appeared in`,
  },
  {
    key: "voicedBy",
    type: "string",
    nullable: true,
    description: `The voice actor(s) for the character`,
  },
  {
    key: "wikiUrl",
    type: "string",
    description: `The unique for link the character's wiki page`,
  },
  {
    key: "url",
    type: "string",
    description: `The unique for link the character`,
  },
];
