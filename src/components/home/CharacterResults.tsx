"use client";

import { Character } from "@bobs-burgers-api/types/Character";
import { Carousel } from "primereact/carousel";
import Image from "next/image";
import useSWR from "swr";
import UrlCodeBlock from "@bobs-burgers-api/components/common/UrlCodeBlock";
import { Skeleton } from "primereact/skeleton";

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
async function getCharacters(url: string): Promise<Character[]> {
  return fetch(url).then((res) => res.json());
}
interface Props {
  url: string;
}

const CharacterResult = ({ url }: Props): JSX.Element => {
  const { data, isLoading } = useSWR(["/characters", url], ([key, url]) =>
    getCharacters(url),
  );

  const formattedUrl = url.replace(
    "https://bobsburgers-api.herokuapp.com/",
    "",
  );

  const createCharacterCard = (character: Character) => {
    return (
      <div className="character-card mt-3 rounded">
        <Image
          src={character.image}
          alt={character.name}
          width={120}
          height={200}
        />

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

  const createLoadingCard = () => {
    return (
      <div className="character-card mt-3 rounded">
        <Skeleton height={"250px"} />
      </div>
    );
  };

  return (
    <>
      <div className="d-flex mt-2 ps-5">
        <UrlCodeBlock endpoint={formattedUrl} className="w-75" />
      </div>
      <div className="row mt-0">
        <div className="col-12">
          {isLoading && (
            <Carousel
              value={[1, 2, 3, 4]}
              numVisible={4}
              numScroll={4}
              responsiveOptions={responsiveOptions}
              itemTemplate={createLoadingCard}
            />
          )}
          {!isLoading && (
            <Carousel
              value={data}
              numVisible={4}
              numScroll={4}
              responsiveOptions={responsiveOptions}
              itemTemplate={createCharacterCard}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default CharacterResult;
