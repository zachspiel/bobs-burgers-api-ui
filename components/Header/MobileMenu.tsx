"use client";

import { useDisclosure } from "@mantine/hooks";
import classes from "./styles.module.css";
import { Anchor, Burger, Flex, Group, Paper, Title, Transition } from "@mantine/core";
import { useEffect, useState } from "react";
import Image from "next/image";

const MobileMenu = () => {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [activeLink, setActiveLink] = useState<string | undefined>();

  useEffect(() => {
    if (activeLink) {
      close();
    }
  }, [activeLink]);

  const createSidebarLink = (href: string, label: string) => (
    <Anchor
      href={href}
      className={`${classes.sidebarLink} ${href === activeLink && classes.activeLink}`}
      onClick={() => setActiveLink(href)}
    >
      {label}
    </Anchor>
  );

  return (
    <>
      <Burger
        opened={opened}
        onClick={toggle}
        size="sm"
        hiddenFrom="sm"
        aria-label="Navbar menu button"
      />
      <Transition transition="pop-top-right" duration={200} mounted={opened}>
        {(styles) => (
          <Paper className={classes.dropdown} withBorder style={styles}>
            <Flex direction="column" style={{ overflow: "auto" }}>
              <Title order={3} c="primary" ml="xs" mt="lg">
                Getting Started
              </Title>

              {createSidebarLink("#introduction", "Introduction")}

              {createSidebarLink("#statistics", "Statistics")}

              {createSidebarLink("#graphql", "GraphQL")}

              {createSidebarLink("#rootUrl", "Root URL")}

              {createSidebarLink("#sortingLimiting", "Sorting and Limiting")}

              <Title order={3} c="primary" ml="xs" mt="lg">
                API Endpoints
              </Title>

              {createSidebarLink("#burgerOfTheDay", "Burger of the Day")}

              {createSidebarLink("#characters", "Character")}

              {createSidebarLink("#endCreditsSequence", "End Credits Sequence")}

              {createSidebarLink("#episodes", "Episode")}

              {createSidebarLink("#pestControlTruck", "Pest Control Truck")}

              {createSidebarLink("#storeNextDoor", "Store Next Door")}

              <Group justify="center" my="md">
                <Anchor
                  href="https://buymeacoffee.com/bobsburgersapi"
                  target="_blank"
                  rel="noreferrer"
                  h={35}
                >
                  <Image
                    src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
                    alt="Buy Me a Coffee"
                    height={35}
                    width={125}
                  />
                </Anchor>
              </Group>
            </Flex>
          </Paper>
        )}
      </Transition>
    </>
  );
};

export default MobileMenu;
