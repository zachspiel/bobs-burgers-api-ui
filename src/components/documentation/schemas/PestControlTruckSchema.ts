import { ApiVersion } from "@bobs-burgers-api/redux/appSlice";
import { EndpointSchema } from "../Schema";

const getPestControlTruckSchema = (apiVersion?: ApiVersion): EndpointSchema => {
  const V1_EPISODE_TYPE = "string";
  const V2_EPISODE_TYPE = "number";

  const V1_EPISODE_URL_DESCRIPTION =
    "The url for the episode that the pest control truck appeared in";
  const V2_EPISODE_URL_DESCRIPTION = `${V1_EPISODE_URL_DESCRIPTION} This is only available in v2 of the api`;

  const isApiV2 = apiVersion === "2.0.0";
  const episodeType = isApiV2 ? V2_EPISODE_TYPE : V1_EPISODE_TYPE;
  const episodeDescription = isApiV2
    ? "The episode that the pest control truck appeared in"
    : V1_EPISODE_URL_DESCRIPTION;

  const episodeUrlType = isApiV2 ? "string" : "undefined";
  const episodeUrlDescription = isApiV2
    ? V2_EPISODE_URL_DESCRIPTION
    : V1_EPISODE_URL_DESCRIPTION;

  return [
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
      type: episodeType,
      description: episodeDescription,
    },
    {
      key: "episodeUrl",
      type: episodeUrlType,
      description: episodeUrlDescription,
    },
    {
      key: "url",
      type: "string",
      description: "The unique link for the pest control truck",
    },
  ];
};

export default getPestControlTruckSchema;
