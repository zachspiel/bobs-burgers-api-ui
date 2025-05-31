import { ActionIcon, Anchor, Container, Group } from "@mantine/core";
import { IconBrandGithub } from "@tabler/icons-react";
import classes from "./styles.module.css";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Group className={classes.links}>
          <Anchor<"a"> c="dimmed" href="/">
            Home
          </Anchor>

          <Anchor<"a"> c="dimmed" href="/documentation">
            Documentation
          </Anchor>

          <ActionIcon
            component="a"
            href="https://github.com/zachspiel/bobsburgers-api/"
            target="_blank"
            variant="transparent"
            color="default"
          >
            <IconBrandGithub stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
};

export default Footer;
