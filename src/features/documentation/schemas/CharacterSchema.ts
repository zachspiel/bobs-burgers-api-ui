import { EndpointSchema } from '../Schema';

const CharacterSchema: EndpointSchema = [
  { key: 'id', type: 'number', description: 'The unique id for the character' },
  { key: 'name', type: 'string', description: `The character's name` },
  { key: 'image', type: 'url', description: `The url for the character's image` },
  {
    key: 'hairColor',
    type: 'string | undefined',
    description: 'The hair color for character',
  },
  { key: 'gender', type: 'string | undefined', description: `The character's gender` },
  {
    key: 'occupation',
    type: 'string | undefined',
    description: `The character's occupation`,
  },
  {
    key: 'relatives',
    type: 'string[] | undefined',
    description: `The character's relatives`,
  },
  {
    key: 'firstEpisode',
    type: 'string | undefined',
    description: `The first episode the character appeared in`,
  },
  {
    key: 'voicedBy',
    type: 'string | undefined',
    description: `The voice actor for the character`,
  },
  {
    key: 'url',
    type: 'url',
    description: `The unique link the character`,
  },
];

export default CharacterSchema;
