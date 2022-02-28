import React from 'react';
import { Menubar } from 'primereact/menubar';
import { Sidebar as PRSidebar } from 'primereact/sidebar';
import logo from '../images/logo.png';
import { Button } from 'primereact/button';
import Sidebar from '../components/Sidebar';

interface Props {
  parentClassName?: string;
  menuClassName?: string;
}

const Navbar = (props: Props): JSX.Element => {
  const [isSidebarVisible, setIsSidebarVisible] = React.useState(false);
  const rowClassName = props.parentClassName ?? '';
  const menubarClassName = props.menuClassName ?? '';
  const start = (
    <div className="d-flex">
      <Button
        icon="pi pi-bars"
        onClick={() => setIsSidebarVisible(true)}
        className="p-button-rounded p-button-text me-2 sidebar-button p-button-secondary"
      />
      <a href="/">
        <img alt="logo" src={logo} height="40" className="mr-2" />
      </a>
    </div>
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
      <PRSidebar
        visible={isSidebarVisible}
        onHide={() => setIsSidebarVisible(false)}
      >
        <Sidebar />
      </PRSidebar>
    </div>
  );
};

export default Navbar;
