"use client";

import { useDisclosure } from "@mantine/hooks";
import classes from "./styles.module.css";
import { Anchor, Burger, Flex, Group, Paper, Title, Transition } from "@mantine/core";
import { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const MobileMenu = () => {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [activeLink, setActiveLink] = useState<string | undefined>();
  const pathname = usePathname();

  console.log(pathname);

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

  const appendUrl = (id: string) => (pathname === "/" ? `/documentation${id}` : id);

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

              {createSidebarLink(appendUrl("#introduction"), "Introduction")}

              {createSidebarLink(appendUrl("#statistics"), "Statistics")}

              {createSidebarLink(appendUrl("#graphql"), "GraphQL")}

              {createSidebarLink(appendUrl("#rootUrl"), "Root URL")}

              {createSidebarLink(appendUrl("#sortingLimiting"), "Sorting and Limiting")}

              <Title order={3} c="primary" ml="xs" mt="lg">
                API Endpoints
              </Title>

              {createSidebarLink(appendUrl("#burgerOfTheDay"), "Burger of the Day")}

              {createSidebarLink(appendUrl("#characters"), "Character")}

              {createSidebarLink(
                appendUrl("#endCreditsSequence"),
                "End Credits Sequence"
              )}

              {createSidebarLink(appendUrl("#episodes"), "Episode")}

              {createSidebarLink(appendUrl("#pestControlTruck"), "Pest Control Truck")}

              {createSidebarLink(appendUrl("#storeNextDoor"), "Store Next Door")}

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
