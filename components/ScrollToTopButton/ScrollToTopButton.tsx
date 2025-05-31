"use client";

import { ActionIcon } from "@mantine/core";
import { useViewportSize, useWindowScroll } from "@mantine/hooks";
import { IconChevronUp } from "@tabler/icons-react";
import classes from "./style.module.css";

const ScrollToTopButton = () => {
  const { height } = useViewportSize();
  const [scroll, scrollTo] = useWindowScroll();

  if (scroll.y === 0 || scroll.y / height < 1.5) {
    return <></>;
  }

  return (
    <ActionIcon
      onClick={() => scrollTo({ y: 0 })}
      aria-label="Scroll to top"
      size="xl"
      variant="default"
      className={classes.scrollToTopButton}
    >
      <IconChevronUp strokeWidth={1.5} />
    </ActionIcon>
  );
};

export default ScrollToTopButton;
