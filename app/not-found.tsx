import { AppShell, AppShellHeader, AppShellMain, Container, Title } from "@mantine/core";
import Link from "next/link";
import Navbar from "../components/Header/Navbar";

export default function NotFound() {
  return (
    <AppShell header={{ height: 60 }}>
      <AppShellHeader>
        <Navbar />
      </AppShellHeader>

      <AppShellMain py="xl">
        <Container
          fluid
          ta="center"
          mt="xl"
          style={{
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            height: "80vh",
          }}
        >
          <Title order={2}>Not Found</Title>
          <Link href="/">Return Home</Link>
        </Container>
      </AppShellMain>
    </AppShell>
  );
}
