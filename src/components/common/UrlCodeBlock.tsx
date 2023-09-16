"use client";

import { ROOT_URL } from "@bobs-burgers-api/util/constants";
import CodeBlock from "../documentation/CodeBlock";

interface Props {
  endpoint: string;
  className?: string;
}

const UrlCodeBlock = ({ endpoint, className }: Props): JSX.Element => {
  return (
    <CodeBlock
      language="url"
      code={`\n${ROOT_URL}/${endpoint}`}
      className={className}
    />
  );
};

export default UrlCodeBlock;
