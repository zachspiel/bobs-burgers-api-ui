import { EndpointSchema } from "../Schema";

const RelativeSchema: EndpointSchema = [
  {
    key: "name",
    type: "string",
    nullable: false,
    description: `The relative's name`,
  },
  {
    key: "relationship",
    type: "string",
    nullable: true,
    description: "The relative's relationship to the character.",
  },
  {
    key: "wikiUrl",
    type: "string",
    nullable: true,
    description: `The unique for link the relative's wiki page`,
  },
  {
    key: "url",
    type: "string",
    nullable: true,
    description: `The unique for link the relative`,
  },
];

export default RelativeSchema;
