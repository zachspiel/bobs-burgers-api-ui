export interface Character {
  id: number;
  name: string;
  image: string;
  hairColor?: string;
  age?: number;
  gender?: string;
  occupation?: string;
  allOccupations?: string[];
  relatives?: string[];
  firstEpisode?: string;
  voicedBy: string;
  url: string;
}
