import { ActionIcon, Anchor, Container, Group, Title } from "@mantine/core";
import { IconBrandGithub } from "@tabler/icons-react";
import classes from "./styles.module.css";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  return (
    <header style={{ height: 60 }} className={classes.root}>
      <Container className={classes.header} style={{ maxWidth: "100%" }}>
        <Group>
          <Anchor href="/" p="xs">
            <Image
              src="/assets/images/logo.png"
              height={40}
              width={40}
              alt="Logo"
              className="mr-2"
            />
          </Anchor>

          <Title order={3} visibleFrom="sm">
            Bob's Burgers API
          </Title>
        </Group>
        <Group gap="sm" className={classes.navbarLinks}>
          <Anchor
            href="/documentation"
            role="menuitem"
            aria-haspopup="false"
            c="var(--mantine-color-text)"
          >
            Documentation
          </Anchor>

          <ThemeToggle />

          <ActionIcon
            component="a"
            href="https://github.com/zachspiel/bobsburgers-api/"
            target="_blank"
            variant="default"
            color="default"
            size="lg"
          >
            <IconBrandGithub stroke={1.5} />
          </ActionIcon>

          <Anchor
            href="https://buymeacoffee.com/bobsburgersapi"
            target="_blank"
            rel="noreferrer"
            h={35}
            visibleFrom="sm"
          >
            <Image
              src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
              alt="Buy Me a Coffee"
              height={35}
              width={125}
            />
          </Anchor>

          <MobileMenu />
        </Group>
      </Container>
    </header>
  );
};

export default Navbar;
