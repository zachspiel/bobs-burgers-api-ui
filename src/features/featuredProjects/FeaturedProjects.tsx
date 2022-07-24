import React from "react";
import Footer from "../common/Footer";
import Navbar from "../common/Navbar";
import Project from "./components/Project";

const FeaturedProjects = (): JSX.Element => {
  return (
    <div className="container-fluid">
      <Navbar parentClassName="custom-menubar" />

      <div className="row p-2 text-white text-center">
        <h1 className="header">Featured Projects</h1>
      </div>
      <div className="row mt-5 mb-4">
        <div className="col-md-3 col-sm-12">
          <Project
            author={"mattSpringWunder"}
            title={"Burger Tweet"}
            image="https://image.mux.com/b0100tt4A19bmfkBu2dMMHMs800IKU9HkiMMIGsjjUvMbw/animated.gif"
            link="https://github.com/mattSpringWunder/burgerTweet"
            about="A Twitter Bot Built with Spring posting some cool Bob's Burgers Trivia / Info"
          />
        </div>
        <div className="col-md-3 col-sm-12">
          <Project
            author={"mander-pander"}
            title={"Bob's Burgers Generator"}
            image="https://github.com/mander-pander/bobsBurgers/blob/main/loginPage.png?raw=true"
            link="https://github.com/mander-pander/bobsBurgers"
            about="This fullstack web application allows you to explore the world of Bob's Burgers wacky characters and unique burgers with the integration of the Bob's Burgers API"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FeaturedProjects;
