"use client";

import { Dropdown } from "primereact/dropdown";
import * as Hooks from "../../redux/hooks";

const API_OPTIONS = [
  {
    name: "v1.0.0",
    value: "1.0.0",
  },
  {
    name: "v2.0.0",
    value: "2.0.0",
  },
];

const VersionSelect = (): JSX.Element => {
  const { apiVersion } = Hooks.useAppSelector((state) => state.app);
  const { setApiVersion } = Hooks.useActions();

  return (
    <Dropdown
      value={apiVersion}
      onChange={(e) => setApiVersion(e.value)}
      options={API_OPTIONS}
      optionLabel="name"
      className="m-3"
    />
  );
};

export default VersionSelect;
