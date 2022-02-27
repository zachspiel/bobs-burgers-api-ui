import React from 'react';
import { Menubar } from 'primereact/menubar';
import logo from '../images/logo.png';
import CoffeeButton from './CoffeeButton';

interface Props {
  parentClassName?: string;
  menuClassName?: string;
}

const Navbar = (props: Props): JSX.Element => {
  const rowClassName = props.parentClassName ?? '';
  const menubarClassName = props.menuClassName ?? '';
  const start = (
    <a href="/">
      <img alt="logo" src={logo} height="40" className="mr-2" />
    </a>
  );

  const getRightContent = () => {
    return (
      <div className="d-flex">
        <a
          href="/documentation"
          role="menuitem"
          className="p-menuitem-link fw-bold fs-5"
          aria-haspopup="false"
        >
          <span className="p-menuitem-text">Documentation</span>
        </a>
      </div>
    );
  };

  return (
    <div className={`row position-sticky ${rowClassName}`}>
      <Menubar
        start={start}
        end={getRightContent}
        className={`border-0 ${menubarClassName}`}
      />
    </div>
  );
};

export default Navbar;
