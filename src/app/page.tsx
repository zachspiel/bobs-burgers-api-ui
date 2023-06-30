import Footer from "@bobs-burgers-api/components/common/Footer";
import Navbar from "@bobs-burgers-api/components/common/Navbar";
import UrlCodeBlock from "@bobs-burgers-api/components/common/UrlCodeBlock";
import CharacterResult from "@bobs-burgers-api/components/home/CharacterResults";
import { Character } from "@bobs-burgers-api/types/Character";
import localFont from "next/font/local";
import Image from "next/image";
import { ROOT_URL, TOTAL_CHARACTERS } from "@bobs-burgers-api/util/constants";

async function getProps(): Promise<Props> {
  const skip = Math.random() * (TOTAL_CHARACTERS - 0) + 0;
  const url = `${ROOT_URL}/characters/?limit=9&skip=${Math.ceil(skip)}`;
  const res = await fetch(url);
  const characters = await res.json();
  return { characters, url };
}

interface Props {
  characters: Character[];
  url: string;
}

const bobsBurgersFont = localFont({
  src: "../../public/assets/fonts/Bob's Burgers.ttf",
  display: "swap",
});

export default async function Home() {
  const { characters, url } = await getProps();
  const formattedUrl = url.replace("https://bobsburgers-api.herokuapp.com/", "");

  return (
    <div className="container-fluid">
      <Navbar parentClassName="custom-menubar" />
      <div className="row p-5 text-white text-center" id="jumbotron">
        <h1 className={`${bobsBurgersFont.className} header`}>
          The Bob&apos;s Burgers API
        </h1>
      </div>

      <div className="row mt-0 p-5 pb-0">
        <div className="col-12 d-flex justify-content-between">
          <h3 className="mt-2 fw-bold">Example result</h3>
        </div>
      </div>

      <div className="d-flex mt-2 ps-5">
        <UrlCodeBlock endpoint={formattedUrl} className="w-75" />{" "}
      </div>

      <CharacterResult characters={characters} />
      <Footer />
    </div>
  );
}
