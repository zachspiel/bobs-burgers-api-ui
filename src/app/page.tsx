import Footer from "@bobs-burgers-api/components/common/Footer";
import Navbar from "@bobs-burgers-api/components/common/Navbar";
import CharacterResult from "@bobs-burgers-api/components/home/CharacterResults";
import { Character } from "@bobs-burgers-api/types/Character";
import { ROOT_URL, TOTAL_CHARACTERS } from "@bobs-burgers-api/util/constants";
import { getUrlCodeBlock } from "@bobs-burgers-api/util/util";

async function getProps(): Promise<Props> {
  const skip = Math.random() * (TOTAL_CHARACTERS - 0) + 0;
  const url = `${ROOT_URL}/characters/?limit=9&skip=${Math.ceil(skip)}`;
  console.log(url);
  const res = await fetch(url);
  const characters = await res.json();
  return { characters, url };
}

interface Props {
  characters: Character[];
  url: string;
}

export default async function Home() {
  const { characters, url } = await getProps();

  return (
    <div className="container-fluid">
      <Navbar parentClassName="custom-menubar" />
      <div className="row p-5 text-white text-center" id="jumbotron">
        <h1 className="header">The Bob&apos;s Burgers API</h1>
      </div>

      <div className="row mt-0 p-5 pb-0">
        <div className="col-12 d-flex justify-content-between">
          <h3 className="mt-2 fw-bold">Example result</h3>
        </div>
      </div>

      <div className="d-flex mt-2 ps-5">{getUrlCodeBlock(url, "w-75")}</div>

      <CharacterResult characters={characters} />
      <Footer />
    </div>
  );
}
