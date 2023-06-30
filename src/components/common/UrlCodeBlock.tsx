"use client";

import { ROOT_URL, ROOT_URL_V2 } from "@bobs-burgers-api/util/constants";
import CodeBlock from "../documentation/CodeBlock";
import * as Hooks from "@bobs-burgers-api/redux/hooks";

interface Props {
  endpoint: string;
  className?: string;
}

const UrlCodeBlock = ({ endpoint, className }: Props): JSX.Element => {
  const { apiVersion } = Hooks.useAppSelector((state) => state.app);

  return (
    <CodeBlock
      language="url"
      code={`\n${apiVersion === "1.0.0" ? ROOT_URL : ROOT_URL_V2}/${endpoint}`}
      className={className}
    />
  );
};

export default UrlCodeBlock;
