"use client";

import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { IconMoon, IconSun } from "@tabler/icons-react";
import classes from "./styles.module.css";

const ThemeToggle = () => {
  const { colorScheme, setColorScheme } = useMantineColorScheme();

  return (
    <ActionIcon
      onClick={() => setColorScheme(colorScheme === "light" ? "dark" : "light")}
      variant="default"
      color="default"
      size="lg"
      aria-label="Toggle color scheme"
    >
      <IconSun className={`${classes.icon} ${classes.light}`} stroke={1.5} />
      <IconMoon className={`${classes.icon} ${classes.dark}`} stroke={1.5} />
    </ActionIcon>
  );
};

export default ThemeToggle;
