"use client";

import React from "react";
import * as Hooks from "../../redux/hooks";
import { Menubar } from "primereact/menubar";
import { Sidebar as PRSidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import Sidebar from "./Sidebar";
import Image from "next/image";
import VersionSelect from "../versionSelect/versionSelect";

interface Props {
  parentClassName?: string;
  menuClassName?: string;
  displayMenuButton?: boolean;
}

const Navbar = (props: Props): JSX.Element => {
  const state = Hooks.useAppSelector((state) => state.app);
  const [isSidebarVisible, setIsSidebarVisible] = React.useState(false);
  const rowClassName = props.parentClassName ?? "";
  const menubarClassName = props.menuClassName ?? "";
  const currentTheme = state.currentTheme;
  const themeIcon = currentTheme === "light-mode" ? "sun" : "moon";

  const { setCurrentTheme } = Hooks.useActions();

  const toggleTheme = () => {
    const updatedTheme = currentTheme === "light-mode" ? "dark-mode" : "light-mode";
    localStorage.setItem("currentTheme", updatedTheme);
    setCurrentTheme(updatedTheme);
    document.body.classList.toggle("dark-mode", updatedTheme === "dark-mode");
  };

  const start = (
    <div className="d-flex">
      {props.displayMenuButton && (
        <Button
          icon="pi pi-bars"
          onClick={() => setIsSidebarVisible(true)}
          className="p-button-rounded p-button-text me-2 sidebar-button d-lg-none p-button-secondary"
        />
      )}
      <a href="/">
        <Image
          src="/assets/images/logo.png"
          height={40}
          width={40}
          alt="Logo"
          className="mr-2"
        />
      </a>
    </div>
  );

  const getRightContent = () => {
    return (
      <div className="d-flex justify-content-between">
        <a
          href="/documentation"
          role="menuitem"
          className="p-menuitem-link fw-bold fs-5"
          aria-haspopup="false"
        >
          <span className="p-menuitem-text">Documentation</span>
        </a>

        <VersionSelect />

        <Button
          icon={`pi pi-${themeIcon}`}
          className={`p-button-text p-button-lg ${
            themeIcon === "sun" ? "text-dark" : ""
          }`}
          aria-label="Theme toggle button"
          onClick={() => toggleTheme()}
        />
        <a
          href="https://github.com/zachspiel/bobs-burgers-api"
          role="menuitem"
          target="_blank"
          className="bg-transparent m-2"
          aria-haspopup="false"
          rel="noreferrer"
        >
          <Button
            icon="pi pi-github"
            className={`p-button-text p-button-lg ${
              themeIcon === "sun" ? "text-dark" : ""
            }`}
            aria-label="Github link"
          />
        </a>
      </div>
    );
  };

  return (
    <div className={`row ${rowClassName}`}>
      <Menubar
        start={start}
        end={getRightContent}
        className={`border-0 ${menubarClassName}`}
      />
      <PRSidebar visible={isSidebarVisible} onHide={() => setIsSidebarVisible(false)}>
        <Sidebar />
      </PRSidebar>
    </div>
  );
};

export default Navbar;
