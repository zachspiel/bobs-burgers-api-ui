import { JSX } from "react";
import {
  AppShell,
  AppShellHeader,
  AppShellMain,
  AppShellFooter,
  AppShellNavbar,
  Container,
  Title,
  Divider,
  Text,
  Flex,
  Highlight,
  Anchor,
  Alert,
} from "@mantine/core";
import { IconInfoCircle } from "@tabler/icons-react";
import { ROOT_URL } from "@bobs-burgers-api/util/constants";
import "@mantine/charts/styles.css";

import Statistics from "../../components/Statistics/Statistics";
import { EndpointSchema } from "../../types/endpointSchema";
import Footer from "../../components/Footer/Footer";
import HighlightText from "../../components/HighlightText/HighlightText";
import JsonCodeBlock from "../../components/CodeBlock/JsonCodeBlock";
import Navbar from "../../components/Header/Navbar";
import SchemaTable from "../../components/SchemaTable/SchemaTable";
import UrlBlock from "../../components/UrlBlock/UrlBlock";
import Sidebar from "../../components/Sidebar/Sidebar";
import { burgerOfTheDaySchema } from "../../schemas/burgerOfTheDaySchema";
import { characterSchema } from "../../schemas/characterSchema";
import { endCreditsSequenceSchema } from "../../schemas/endCreditsSequence";
import { episodeSchema } from "../../schemas/episodeSchema";
import { pestControTruckSchema } from "../../schemas/pestControlTruckSchema";
import { relativeSchema } from "../../schemas/relativeSchema";
import { storeNextDoorSchema } from "../../schemas/storeNextDoorSchema";
import ScrollToTopButton from "../../components/ScrollToTopButton/ScrollToTopButton";

export default async function DocumentationPage() {
  const createEndpoint = (
    endpoint: string,
    singleLabel: string,
    multipleLabel: string,
    schema: EndpointSchema,
    filterParams: string,
    alert?: JSX.Element,
  ) => {
    const baseUrl = `${ROOT_URL}/${endpoint}`;

    const schemaTitle = singleLabel
      .split(" ")
      .map((w) => w[0].toUpperCase() + w.substring(1).toLowerCase())
      .join(" ");

    return (
      <>
        <Title order={2} mt="xl" id={endpoint}>
          {singleLabel
            .split(" ")
            .map((string) => string.charAt(0).toUpperCase() + string.slice(1))
            .join(" ")}
        </Title>
        <Divider />

        {alert}

        <Title order={4} mt="xl" id={`${endpoint}/all`}>
          Get all {multipleLabel}
        </Title>

        <UrlBlock url={baseUrl} />

        <Title order={4} mt="xl" id={`${endpoint}/single`}>
          Get a single {singleLabel}
        </Title>

        <JsonCodeBlock url={`${baseUrl}/1`} />

        <Title order={4} mt="xl" id={`${endpoint}/multiple`}>
          Get multiple {multipleLabel}
        </Title>

        <HighlightText
          text={`Multiple ${multipleLabel} can be found by adding an array of ids to the /${endpoint}/ endpoint URL. (E.g. [1,2,3] or 1,2,3 )`}
          highlight={[`/${endpoint}/`, "[1,2,3]", "1,2,3"]}
        />

        <JsonCodeBlock url={`${baseUrl}/[1,2,3]`} />

        <SchemaTable
          schemaName={schemaTitle}
          endpointSchema={schema}
          titleProps={{ id: `${endpoint}/schema`, mt: "xl" }}
        />

        <Title order={4} mt="xl" id={`${endpoint}/filter`}>
          Filter and Sort {multipleLabel}
        </Title>

        <Text>
          {multipleLabel[0].toUpperCase() + multipleLabel.slice(1)} can be filtered or
          sorted by any valid property in it's schema. A list of all valid keys can be
          found above.
        </Text>

        <JsonCodeBlock url={`${baseUrl}/${filterParams}`} />
      </>
    );
  };

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 265, breakpoint: "sm", collapsed: { mobile: true } }}
    >
      <AppShellHeader>
        <Navbar />
      </AppShellHeader>

      <AppShellNavbar>
        <Sidebar />
      </AppShellNavbar>
      <AppShellMain py="xl">
        <Container mt="xl">
          <Flex direction="column" gap="sm">
            <Title order={2} id="introduction" mt="xl">
              Introduction
            </Title>
            <Divider />

            <Text fw="bold">What is this?</Text>
            <Text>
              The Bob's Burgers API is a REST API based on the television show Bob's
              Burgers. The Bob's Burgers API contains data for hundreds of characters,
              episodes, running gags, and images from the show.
            </Text>

            <Text>
              If you are using this API please consider supporting the project by{" "}
              <Anchor
                href="https://buymeacoffee.com/bobsburgersapi"
                target="_blank"
                rel="noreferrer"
                c="blue"
              >
                buying me a coffee
              </Anchor>{" "}
              ☕ to help maintain the API and keep it free for everyone.
            </Text>

            <Title order={2} mt="xl" id="statistics">
              Statistics
            </Title>
            <Divider />

            <Statistics />

            <Title order={2} mt="xl" id="graphql">
              GraphQL
            </Title>
            <Divider />

            <Text>
              The GraphQL endpoint provides a GraphQL wrapper around the Bob's Burgers
              REST API.
            </Text>

            <UrlBlock url="https://bobsburgers-api.herokuapp.com/graphql/" />

            <Title order={2} mt="xl" id="rootUrl">
              Root URL
            </Title>
            <Divider />
            <Text>
              The Root endpoint provides information on all available resources within the
              API. All requests are GET requests and are sent over HTTPS.
            </Text>

            <JsonCodeBlock url="https://bobsburgers-api.herokuapp.com" />

            <Title order={2} mt="xl" id="sortingLimiting">
              Sorting and Limiting
            </Title>
            <Divider />

            <Highlight
              color="blue"
              highlight={["sortBy", "orderBy", "limit", "skip"]}
              highlightStyles={{
                backgroundColor: "rgba(59, 152, 252, 0.137)",
                borderColor: "#3b99fc",
                color: "#3b99fc",
              }}
            >
              All endpoints support the sortBy, orderBy, limit, and skip parameters.
            </Highlight>

            <Alert icon={<IconInfoCircle strokeWidth={1.5} />}>
              By default each endpoint returns the results sorted in ascending order by
              ID.
            </Alert>

            <Title order={3} mt="lg">
              Examples
            </Title>

            <Title order={4} mt="md">
              Sort characters in ascending order by name
            </Title>

            <JsonCodeBlock
              url={
                "https://bobsburgers-api.herokuapp.com/characters?sortBy=name&OrderBy=asc&limit=1&skip=0"
              }
            />

            <Title order={4} mt="xl">
              Sort characters in descending order by name
            </Title>

            <JsonCodeBlock
              url={
                "https://bobsburgers-api.herokuapp.com/characters?sortBy=name&OrderBy=desc&limit=1&skip=0"
              }
            />

            <Title order={4} mt="xl">
              Sort characters in descending order by name and get fifth result
            </Title>

            <JsonCodeBlock
              url={
                "https://bobsburgers-api.herokuapp.com/characters?sortBy=name&OrderBy=desc&limit=1&skip=5"
              }
            />

            <Title order={4}>Get all pest control trucks in the 7th season.</Title>

            <JsonCodeBlock
              url={
                "https://bobsburgers-api.herokuapp.com/pestControlTruck?season=7&limit=2"
              }
            />

            {createEndpoint(
              "burgerOfTheDay",
              "burger of the day",
              "burgers",
              burgerOfTheDaySchema,
              "?season=5&episode=2",
            )}

            {createEndpoint(
              "characters",
              "character",
              "characters",
              characterSchema,
              "?sortBy=voicedBy&limit=2",
            )}

            <SchemaTable
              schemaName="Relative"
              endpointSchema={relativeSchema}
              titleProps={{ id: "relativeSchema", mt: "xl" }}
            />

            {createEndpoint(
              "endCreditsSequence",
              "end credits sequence",
              "end credits sequences",
              endCreditsSequenceSchema,
              "?season=9&limit=2",
              <Alert icon={<IconInfoCircle strokeWidth={1.5} />}>
                Please note, images 1,2 and 4-13 are the same. This is because the same
                end credits sequence was used in the first season aside from the third
                episode Sacred Cow.
              </Alert>,
            )}

            {createEndpoint(
              "episodes",
              "episode",
              "episodes",
              episodeSchema,
              "?season=3&limit=2",
            )}

            {createEndpoint(
              "pestControlTruck",
              "pest control truck",
              "pest control trucks",
              pestControTruckSchema,
              "?season=9&sortBy=name&limit=2",
              <Alert icon={<IconInfoCircle strokeWidth={1.5} />}>
                Please note, the first 13 pest control trucks all have the same name and
                image. This is because the same pest control truck was used in every
                episode in the first season.
              </Alert>,
            )}

            {createEndpoint(
              "storeNextDoor",
              "store next door",
              "stores",
              storeNextDoorSchema,
              "?season=6&sortBy=name&limit=2",
            )}
          </Flex>

          <ScrollToTopButton />
        </Container>
      </AppShellMain>
      <AppShellFooter style={{ position: "relative" }}>
        <Footer />
      </AppShellFooter>
    </AppShell>
  );
}
