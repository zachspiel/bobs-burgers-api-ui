import Image from "next/image";
import classes from "./style.module.css";
import {
  Button,
  Card,
  Container,
  Flex,
  Group,
  SimpleGrid,
  Text,
  Title,
} from "@mantine/core";
import UrlBlock from "../UrlBlock/UrlBlock";
import { IconArrowRight } from "@tabler/icons-react";
import { Character } from "../../types/character";

interface Props {
  url: string;
  characters: Character[];
}
const Home = ({ url, characters }: Props) => {
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

      <Container fluid mt="xl">
        <Title order={2}>Example API Result</Title>
        <UrlBlock url={url} />

        <SimpleGrid cols={{ base: 1, sm: 2, md: 3, lg: 4 }} px="md" mt="lg">
          {characters.map((character) => (
            <Card key={character.id} style={{ borderRadius: "25px" }}>
              <Flex pe="md" gap="lg">
                <Image
                  src={character.image}
                  alt={character.name}
                  height={100}
                  width={100}
                  style={{
                    objectFit: "contain",
                    objectPosition: "center",
                  }}
                />

                <Flex direction="column" style={{ overflow: "wrap" }}>
                  <Title order={3}>{character.name}</Title>
                  <Text>{character.gender}</Text>
                  <Text>{character.hairColor}</Text>
                  <Text>{character.occupation}</Text>
                </Flex>
              </Flex>
            </Card>
          ))}
        </SimpleGrid>
      </Container>
    </>
  );
};

export default Home;
