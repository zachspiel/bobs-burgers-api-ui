import { AppShell, AppShellHeader, AppShellMain, AppShellFooter } from "@mantine/core";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Header/Navbar";
import Home from "../components/LandingPage";

export default async function HomePage() {
  return (
    <AppShell header={{ height: 60 }}>
      <AppShellHeader>
        <Navbar />
      </AppShellHeader>

      <AppShellMain py="xl">
        <Home />
      </AppShellMain>
      <AppShellFooter style={{ position: "relative" }}>
        <Footer />
      </AppShellFooter>
    </AppShell>
  );
}
