export interface Character {
  id: number;
  name: string;
  image: string;
  gender?: string | null;
  hairColor?: string | null;
  age?: string | null;
  nicknames: string[];
  relatives: Relationship[];
  allOccupations: string[];
  occupation?: string | null;
  firstEpisode?: string | null;
  voicedBy?: string | null;
  url: string;
  wikiUrl: string;
}

export interface Relationship {
  name: string;
  relationship?: string | null | undefined;
  wikiUrl?: string | null | undefined;
  url?: string | null | undefined;
}
