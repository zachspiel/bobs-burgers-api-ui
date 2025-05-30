"use client";

import { useEffect, useState } from "react";
import { getApiData } from "@bobs-burgers-api/util/getApiData";
import { Skeleton } from "@mantine/core";
import CodeBlock from "./CodeBlock";
import UrlBlock from "../UrlBlock/UrlBlock";

const JsonCodeBlock = ({
  url,
  delayFetch = false,
}: {
  url: string;
  delayFetch?: boolean;
}) => {
  const [data, setData] = useState<string>();

  useEffect(() => {
    getApiData(url)
      .then(setData)
      .catch(() => setData(`An error occured while fetching ${url}`));
  }, []);

  return (
    <>
      <UrlBlock url={url} />

      {!delayFetch && (
        <>
          {!data ? (
            <Skeleton w="100%" h={200} />
          ) : (
            <CodeBlock code={data ?? ""} language="json" />
          )}
        </>
      )}
    </>
  );
};

export default JsonCodeBlock;
