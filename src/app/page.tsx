import Footer from "@bobs-burgers-api/components/common/Footer";
import Navbar from "@bobs-burgers-api/components/common/Navbar";
import CharacterResult from "@bobs-burgers-api/components/home/CharacterResults";
import localFont from "next/font/local";
import { ROOT_URL, TOTAL_CHARACTERS } from "@bobs-burgers-api/util/constants";

const bobsBurgersFont = localFont({
  src: "../../public/assets/fonts/Bob's Burgers.ttf",
  display: "swap",
});

const getRandomUrl = () => {
  return `${ROOT_URL}/characters/?limit=9&skip=${Math.ceil(Math.random() * TOTAL_CHARACTERS)}`;
};

export default async function Home() {
  const characterUrl = getRandomUrl();

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

      <CharacterResult url={characterUrl} />
      <Footer />
    </div>
  );
}
