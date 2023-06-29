import { EndpointSchema } from "../Schema";

const CharacterSchema: EndpointSchema = [
  { key: "id", type: "number", description: "The unique id for the character" },
  { key: "name", type: "string", description: `The character's name` },
  {
    key: "image",
    type: "url",
    description: `The url for the character's image`,
  },
  {
    key: "hairColor",
    type: "string | undefined",
    description: `The character's hair color`,
  },
  {
    key: "age",
    type: "string | undefined",
    description: `The character's age`,
  },
  {
    key: "gender",
    type: "string | undefined",
    description: `The character's gender`,
  },
  {
    key: "allOccupations",
    type: "[string]",
    description: "All of the character's known occupations",
  },
  {
    key: "occupation",
    type: "string | undefined",
    description: `The character's occupation`,
  },
  {
    key: "relatives",
    type: "[Relative (see below)]",
    description: `The character's relatives`,
  },
  {
    key: "firstEpisode",
    type: "string | undefined",
    description: `The first episode the character appeared in`,
  },
  {
    key: "voicedBy",
    type: "string | undefined",
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

export default CharacterSchema;
