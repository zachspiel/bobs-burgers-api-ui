"use client";

import { Character } from "@bobs-burgers-api/types/Character";
import { Carousel } from "primereact/carousel";
import Image from "next/image";

interface Props {
  characters: Character[];
}

const responsiveOptions = [
  {
    breakpoint: "1024px",
    numVisible: 3,
    numScroll: 3,
  },
  {
    breakpoint: "600px",
    numVisible: 2,
    numScroll: 2,
  },
  {
    breakpoint: "480px",
    numVisible: 1,
    numScroll: 1,
  },
];

const CharacterResult = (props: Props): JSX.Element => {
  const characterCard = (character: Character) => {
    return (
      <div className="character-card mt-3 rounded">
        <Image src={character.image} alt={character.name} width={120} height={200} />

        <h3 className="fw-bold">
          <a href={character.url} target="_blank" rel="noreferrer">
            {character.name}
          </a>
        </h3>
        <span className="text-muted ">First Episode: </span>
        <p>{character?.firstEpisode ?? "Unknown"}</p>
        <span className="text-muted">Voiced By: </span>
        <p>{character.voicedBy ?? "Unknown"}</p>
      </div>
    );
  };

  return (
    <div className="row mt-0">
      <div className="col-12">
        <Carousel
          value={props.characters}
          numVisible={4}
          numScroll={4}
          responsiveOptions={responsiveOptions}
          itemTemplate={characterCard}
        />
      </div>
    </div>
  );
};

export default CharacterResult;
