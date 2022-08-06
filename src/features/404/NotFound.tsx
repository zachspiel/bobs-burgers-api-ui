import React from "react";
import Navbar from "../common/Navbar";

const NotFound = () => {
  const TOTAL_GIFS = 5;
  const getRandomInt = () => {
    return Math.floor(Math.random() * TOTAL_GIFS) + 1;
  };

  const gifIndex = getRandomInt();
  return (
    <div className="container-fluid">
      <Navbar parentClassName="custom-menubar" />
      <div className="row p-5 justify-content-center mt-5">
        <div className="col-sm-12 col-md-9 d-flex flex-column">
          <h3 className="fw-bold">Sorry, page not found.</h3>
          <img
            src={require(`../../images/404-${gifIndex}.gif`)}
            className="h-50 w-50"
            style={{ minHeight: "225px", minWidth: "225px" }}
            alt="loading..."
          />
          <div className="d-flex mt-4">
            <a href="/" className="btn btn-outline-primary  me-2">
              Home
            </a>
            <a href="/documentation" className="btn btn-outline-primary me-2">
              Documentation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
