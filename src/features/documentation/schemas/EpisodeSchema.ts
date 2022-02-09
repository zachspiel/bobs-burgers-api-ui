import { EndpointSchema } from '../Schema';

const EpisodeSchema: EndpointSchema = [
  { key: 'id', type: 'number', description: 'The unique id for the episode' },
  { key: 'name', type: 'string', description: `The episode's name` },
  {
    key: 'productionCode',
    type: 'string | undefined',
    description: `The episode's production code`,
  },
  {
    key: 'airDate',
    type: 'string | undefined',
    description: `The episode's air date`,
  },
  {
    key: 'season',
    type: 'number | undefined',
    description: `The season the episode appeared in`,
  },
  {
    key: 'episode',
    type: 'number | undefined',
    description: `The episode number in the season`,
  },
  {
    key: 'totalViewers',
    type: 'string | undefined',
    description: `The episode's total viewers`,
  },
  {
    key: 'url',
    type: 'url',
    description: `The unique link the episode`,
  },
];

export default EpisodeSchema;
