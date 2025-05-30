import { AppShell, AppShellHeader, AppShellMain, AppShellFooter } from "@mantine/core";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Header/Navbar";
import Home from "../components/LandingPage";
import { ROOT_URL, TOTAL_CHARACTERS } from "../util/constants";

const getRandomUrl = () => {
  return `${ROOT_URL}/characters/?limit=12&skip=${Math.ceil(
    Math.random() * TOTAL_CHARACTERS - 12
  )}`;
};

export default async function HomePage() {
  const url = getRandomUrl();
  const characters = await fetch(url).then((res) => res.json());

  return (
    <AppShell header={{ height: 60 }}>
      <AppShellHeader>
        <Navbar />
      </AppShellHeader>

      <AppShellMain py="xl">
        <Home characters={characters} url={url} />
      </AppShellMain>
      <AppShellFooter style={{ position: "relative" }}>
        <Footer />
      </AppShellFooter>
    </AppShell>
  );
}
