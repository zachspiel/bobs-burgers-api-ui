import { EndpointSchema } from "../Schema";

const RelativeSchema: EndpointSchema = [
  { key: "name", type: "string", description: `The relative's name` },

  {
    key: "wikiUrl",
    type: "string",
    description: `The unique for link the relative's wiki page`,
  },
  {
    key: "url",
    type: "string",
    description: `The unique for link the relative`,
  },
];

export default RelativeSchema;
