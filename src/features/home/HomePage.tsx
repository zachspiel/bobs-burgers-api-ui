import React from "react";
import { performGetRequest } from "../../services/apiService";
import { Carousel } from "primereact/carousel";
import { Button } from "primereact/button";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import { getUrlCodeBlock } from "../../util";

interface Character {
  id: number;
  name: string;
  image: string;
  hairColor?: string;
  age?: number;
  gender?: string;
  occupation?: string;
  relatives?: string[];
  firstEpisode?: string;
  voicedBy: string;
  url: string;
}

const HomePage = () => {
  const [characters, setCharacters] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [currentUrl, setCurrentUrl] = React.useState("");
  const getCharacters = () => {
    const skip = Math.random() * (493 - 0) + 0;
    setIsLoading(true);
    setCurrentUrl(`characters/?limit=9&skip=${Math.ceil(skip)}`);
    performGetRequest(
      "characters",
      undefined,
      `?limit=9&skip=${Math.ceil(skip)}`
    ).then((data) => {
      setIsLoading(false);
      setCharacters(data);
    });
  };

  React.useEffect(() => {
    getCharacters();
  }, []);

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

  const characterCard = (character: Character) => {
    return (
      <div className="character-card mt-3 rounded">
        <img
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

  return (
    <div className="container-fluid">
      <Navbar parentClassName="custom-menubar" />
      <div className="row p-5 text-white text-center" id="jumbotron">
        <h1 className="header">The Bob's Burgers API</h1>
      </div>

      <div className="row mt-0 p-5 pb-0">
        <div className="col-12 d-flex justify-content-between">
          <h3 className="mt-2 fw-bold">Example result</h3>
          <Button
            label="Refresh"
            loading={isLoading}
            icon="pi pi-refresh"
            className="p-button-rounded mt-2"
            style={{ height: "40px" }}
            onClick={getCharacters}
          />
        </div>
      </div>

      <div className="d-flex mt-2 ps-5">
        {getUrlCodeBlock(currentUrl, "w-75")}
      </div>

      <div className="row mt-0">
        <div className="col-12">
          <Carousel
            value={characters}
            numVisible={4}
            numScroll={4}
            responsiveOptions={responsiveOptions}
            itemTemplate={characterCard}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
