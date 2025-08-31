import classes from "./style.module.css";
import { Button, Container, Group, Text, Title } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import ExampleApiResult from "./ExampleApiResult";

const Home = () => {
  return (
    <>
      <Container fluid className={classes.wrapper}>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>The Bob's Burgers API</Title>
            <Text c="dimmed" mt="md"></Text>

            <Group mt={30}>
              <Button
                radius="lg"
                component="a"
                href="/documentation"
                size="lg"
                className={classes.control}
                rightSection={<IconArrowRight strokeWidth={1.5} />}
              >
                View Documentation
              </Button>
            </Group>
          </div>
        </div>
      </Container>

      <ExampleApiResult />
    </>
  );
};

export default Home;
