"use client";

import { Anchor, Flex, Title } from "@mantine/core";

import classes from "./styles.module.css";
import { useState } from "react";
import LinkGroup from "./LinkGroup";

interface Props {
  activeLinkInDropdown?: string;
  updateActiveLinkInDropdown?: (link: string | undefined) => void;
}
const Sidebar = ({ activeLinkInDropdown, updateActiveLinkInDropdown }: Props) => {
  const [activeLink, setActiveLink] = useState<string | undefined>(activeLinkInDropdown);

  const createEndpointLinks = (
    singleLabel: string,
    multipleLabel: string,
    baseId: string,
  ) => {
    return (
      <LinkGroup
        {...{ singleLabel, multipleLabel, baseId }}
        activeLink={activeLink}
        setActiveLink={(link) => {
          setActiveLink(link);
          updateActiveLinkInDropdown?.(link);
        }}
      />
    );
  };

  const createSidebarLink = (href: string, text: string) => {
    return (
      <Anchor
        href={href}
        className={`${classes.sidebarLink} ${href === activeLink && classes.activeLink}`}
        onClick={() => setActiveLink(href)}
      >
        {text}
      </Anchor>
    );
  };

  return (
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

      {createEndpointLinks("Burger of the Day", "burgers", "#burgerOfTheDay")}

      {createEndpointLinks("Character", "characters", "#characters")}

      {createEndpointLinks("End Credits Sequence", "end credits", "#endCreditsSequence")}

      {createEndpointLinks("Episode", "episodes", "#episodes")}

      {createEndpointLinks(
        "Pest Control Truck",
        "pest control trucks",
        "#pestControlTruck",
      )}

      {createEndpointLinks("Store Next Door", "stores", "#storeNextDoor")}
    </Flex>
  );
};

export default Sidebar;
