import React from 'react';
import CoffeeButton from './CoffeeButton';

const Footer = (): JSX.Element => {
  return (
    <>
      <div className="row text-center p-5 pb-0 mb-0">
        <a href="https://github.com/zachspiel/bobsburgers-api/">
          <i
            className="text-muted pi pi-github"
            style={{ fontSize: '1.5rem' }}
          />
        </a>
      </div>
      <div className="row justify-content-center p-5 pt-0 mb-0">
        <div className="col-sm-3 text-center">
          <div className="d-inline-flex">
            <a href="/documentation" className="me-2">
              Documentation
            </a>
          </div>
          <CoffeeButton />
          <p className="text-muted">Created by Zachary Spielberger 2022</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
