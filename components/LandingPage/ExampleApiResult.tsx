"use client";

import { Character } from "@bobs-burgers-api/types/character";
import { ROOT_URL, TOTAL_CHARACTERS } from "@bobs-burgers-api/util/constants";
import { SimpleGrid, Skeleton, Card, Flex, Title, Text, Container } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { useState, useEffect } from "react";
import Image from "next/image";
import UrlBlock from "../UrlBlock/UrlBlock";

function getOrSetUrl() {
  if (typeof window === "undefined") {
    return `${ROOT_URL}/characters/?limit=12&skip=10`;
  }

  const savedUrl = sessionStorage.getItem("exampleApiUrl");

  if (!savedUrl || !savedUrl.startsWith(ROOT_URL)) {
    const url = `${ROOT_URL}/characters/?limit=12&skip=${Math.ceil(
      Math.random() * TOTAL_CHARACTERS - 12
    )}`;

    sessionStorage.setItem("exampleApiUrl", url);

    return url;
  }

  return savedUrl;
}

const ExampleApiResult = () => {
  const url = getOrSetUrl();
  const [characters, setCharacters] = useState<Character[]>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then(setCharacters)
      .catch(() =>
        notifications.show({
          color: "red",
          message: "Error while fetching characters.",
        })
      )
      .finally(() => setLoading(false));
  }, []);

  return (
    <Container fluid mt="xl">
      <Title order={2} mb="lg">
        Example API Result
      </Title>
      <UrlBlock url={url} />

      <SimpleGrid cols={{ base: 1, sm: 2, md: 3, lg: 4 }} px="md" mt="lg">
        {loading && (
          <>
            <Skeleton height={200} w={200} radius="xl" />
            <Skeleton height={200} w={200} radius="xl" />
            <Skeleton height={200} w={200} radius="xl" />
            <Skeleton height={200} w={200} radius="xl" />
          </>
        )}

        {(characters || []).map((character) => (
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
  );
};

export default ExampleApiResult;
