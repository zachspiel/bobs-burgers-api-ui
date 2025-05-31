"use client";

import { Anchor, Box, Collapse, Group, UnstyledButton } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconChevronRight } from "@tabler/icons-react";
import classes from "./styles.module.css";

interface Props {
  singleLabel: string;
  multipleLabel: string;
  baseId: string;
  activeLink: string | undefined;
  setActiveLink: (link: string | undefined) => void;
}

const LinkGroup = ({
  singleLabel,
  multipleLabel,
  baseId,
  activeLink,
  setActiveLink,
}: Props) => {
  const [opened, { toggle }] = useDisclosure(false);

  const subSections = [
    `Get all ${multipleLabel}`,
    `Get single ${singleLabel}`,
    `Get multiple ${multipleLabel}`,
    `${singleLabel} schema`,
    `Filter and sort ${multipleLabel}`,
  ];

  const ids = [
    `${baseId}/all`,
    `${baseId}/single`,
    `${baseId}/multiple`,
    `${baseId}/schema`,
    `${baseId}/filter`,
  ];

  return (
    <>
      <UnstyledButton
        component="a"
        href={baseId}
        fw="bold"
        className={`${classes.control} ${baseId === activeLink && classes.activeLink}`}
        onClick={() => {
          if (!ids.includes(activeLink || "")) {
            toggle();
          }

          setActiveLink(baseId);
        }}
      >
        <Group justify="space-between" gap={0}>
          <Box style={{ display: "flex", alignItems: "center" }}>
            <Box>{singleLabel}</Box>
          </Box>

          <IconChevronRight
            className={classes.chevron}
            stroke={1.5}
            size={16}
            style={{ transform: opened ? "rotate(90deg)" : "none" }}
          />
        </Group>
      </UnstyledButton>

      <Collapse in={opened} transitionDuration={100} transitionTimingFunction="linear">
        {subSections.map((section, index) => (
          <Anchor
            href={ids[index]}
            key={`${section}/${ids[index]}`}
            className={`${classes.link} ${
              activeLink === ids[index] && classes.activeSublink
            }`}
            onClick={() => setActiveLink(ids[index])}
          >
            {section}
          </Anchor>
        ))}
      </Collapse>
    </>
  );
};

export default LinkGroup;
