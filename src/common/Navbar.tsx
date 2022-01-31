import React from 'react';
import { Menubar } from 'primereact/menubar';
import logo from '../images/logo.png';

interface Props {
  parentClassName?: string;
  menuClassName?: string;
}

const Navbar = (props: Props): JSX.Element => {
  const rowClassName = props.parentClassName ?? '';
  const menubarClassName = props.menuClassName ?? '';
  const start = (
    <a href='/'>
      <img alt='logo' src={logo} height='40' className='mr-2' />
    </a>
  );
  const end = [
    {
      label: 'Documentation',
      className: 'fw-bold fs-5',
      command: () => {
        window.location.href = '/documentation';
      },
    },
  ];

  return (
    <div className={`row position-sticky ${rowClassName}`}>
      <Menubar start={start} model={end} className={`border-0 ${menubarClassName}`} />
    </div>
  );
};

export default Navbar;
