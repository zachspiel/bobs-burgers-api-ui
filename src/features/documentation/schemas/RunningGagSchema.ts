import { EndpointSchema } from '../Schema';

const getRunningGag = (type: string): EndpointSchema => {
  return [
    { key: 'id', type: 'number', description: `The unique id for the ${type}` },
    { key: 'name', type: 'string', description: `The  ${type}'s name` },
    {
      key: 'image',
      type: 'url',
      description: `The url for the  ${type}'s image`,
    },

    {
      key: 'episode',
      type: 'url',
      description: `The url for the episode that the ${type} appeared in`,
    },
    {
      key: 'season',
      type: 'number | undefined',
      description: `The season that the ${type} appeared in`,
    },
    {
      key: 'url',
      type: 'url',
      description: `The unique link for the ${type}`,
    },
  ];
};

export default getRunningGag;
