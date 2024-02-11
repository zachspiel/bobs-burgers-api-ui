"use client";

import CodeBlock from "../documentation/CodeBlock";
import { Skeleton } from "primereact/skeleton";

interface Props {
  data?: unknown;
}

const JsonCodeBlock = ({ data }: Props): JSX.Element => {
  const getPrettyString = (data: any) => {
    return JSON.stringify(data, null, 2);
  };

  return (
    <>
      {data !== undefined && (
        <CodeBlock language="json" code={getPrettyString(data)} />
      )}

      {!data && <Skeleton height="4rem" />}
    </>
  );
};

export default JsonCodeBlock;
