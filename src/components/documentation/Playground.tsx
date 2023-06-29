"use client";

import React from "react";
import { Button } from "primereact/button";
import { Divider } from "primereact/divider";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";
import { performGetRequest } from "@bobs-burgers-api/services/apiService";
import characterData from "@bobs-burgers-api/data/characters.json";
import CodeBlock from "./CodeBlock";

const Playground = (): JSX.Element => {
  const [inputValue, setInputValue] = React.useState("");
  const [playgroundResult, setPlaygroundResult] = React.useState<unknown[]>([]);
  const toast = React.useRef<Toast>(null);

  React.useEffect(() => {
    setPlaygroundResult([{ ...characterData[0] }]);
  }, []);

  const getErrorMessage = (url: string) => {
    toast.current?.show({
      severity: "error",
      summary: "Error",
      detail: `Error getting URL: https://bobsburgers-api.herokuapp.com/${url}`,
    });
  };

  const onKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onSubmit();
    }
  };

  const onSubmit = () => {
    performGetRequest(inputValue).then((data) => {
      if (data.length === 0) {
        getErrorMessage(inputValue);
      }
      setPlaygroundResult(data);
    });
  };

  return (
    <div className="row justify-content-center mt-5">
      <Toast ref={toast} />
      <div className="col-lg-7 col-md-9 col-sm-12">
        <h2 id="try-now" className="fw-bold">
          Try it now!
        </h2>
        <Divider />
        <div className="p-col-12 mb-2">
          <div className="p-inputgroup w-100">
            <span className="p-inputgroup-addon">
              https://bobsburgers-api.herokuapp.com/v2/
            </span>
            <InputText
              placeholder="characters/1"
              onChange={(e) => setInputValue(e.target.value)}
              onKeyUp={(e) => onKeyUp(e)}
              value={inputValue}
            />

            <Button label="Get" onClick={() => onSubmit()} />
          </div>
        </div>
        <CodeBlock language="json" code={JSON.stringify(playgroundResult, null, 2)} />
      </div>
    </div>
  );
};

export default Playground;
