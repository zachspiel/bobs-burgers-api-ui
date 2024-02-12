import Footer from "@bobs-burgers-api/components/common/Footer";
import Navbar from "@bobs-burgers-api/components/common/Navbar";
import Playground from "@bobs-burgers-api/components/documentation/Playground";
import Statistics from "@bobs-burgers-api/components/documentation/Statistics";
import Sidebar from "@bobs-burgers-api/components/common/Sidebar";
import SortingLimiting from "@bobs-burgers-api/components/documentation/SortingLimiting";
import {
  BurgerOfTheDayEndpoint,
  CharacterEndpoint,
  EndCreditsSequenceEndpoint,
  EpisodesEndpoint,
  GraphQlEndpoint,
  PestControlTrucksEndpoint,
  RootEndpointComponent,
  StoreNextDoorEndpoint,
} from "@bobs-burgers-api/components/documentation/endpoints";
import FilterExample from "@bobs-burgers-api/components/documentation/FilterExample";
import Divider from "@bobs-burgers-api/components/documentation/Divider";
import Message from "@bobs-burgers-api/components/common/Message";

export default async function Documentation() {
  return (
    <div className="container-fluid">
      <Navbar parentClassName="custom-menubar" displayMenuButton />
      <div className="row" style={{ marginTop: "63px" }}>
        <div
          className="sidebar col-lg-2 d-none d-lg-block"
          style={{ backgroundColor: "#FFFFFF" }}
        >
          <Sidebar />
        </div>
        <div className="main-content col-lg-9 col-sm-12">
          <div className="row justify-content-center">
            <div className="col-lg-7 col-md-9 col-sm-12 mt-md-5">
              <Message message="Version 2.0.0 is now released! This update includes data for all 13 seasons and additional information for each character. Please note that there are breaking changes in the pest control truck schema. " />

              <h2 id="introduction" className="fw-bold">
                Introduction
              </h2>
              <Divider />
              <b>What is this?</b>
              <p>
                The Bob&apos;s Burgers API is a REST API based on the television
                show{" "}
                <a
                  href="https://www.fox.com/bobs-burgers/"
                  target="_blank"
                  className="text-primary"
                  rel="noreferrer"
                >
                  Bob&apos;s Burgers
                </a>
                . The Bob&apos;s Burgers API contains data for hundreds of
                characters, episodes, running gags, and images from the show.
              </p>

              <p>
                If you are using this API please consider supporting the project
                by{" "}
                <a
                  href="https://www.buymeacoffee.com/bobsburgersapi"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary"
                >
                  buying me a coffee{" "}
                </a>
                to help maintain the API and keep it free for everyone.
              </p>
            </div>
          </div>

          <Playground />
          <Statistics />

          <GraphQlEndpoint />

          <RootEndpointComponent />

          <SortingLimiting />

          <FilterExample />

          <CharacterEndpoint />

          <EpisodesEndpoint />

          <StoreNextDoorEndpoint />

          <PestControlTrucksEndpoint />

          <EndCreditsSequenceEndpoint />

          <BurgerOfTheDayEndpoint />

          <Footer />
        </div>
      </div>
    </div>
  );
}
