"use client";

import { Paper, useComputedColorScheme } from "@mantine/core";
import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrow, vs2015 } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import classes from "./style.module.css";

interface Props {
  code: string;
  language: string;
}

const CodeBlock = ({ code, language }: Props) => {
  const colorScheme = useComputedColorScheme();

  return (
    <Paper withBorder radius="md" className={classes.codeBlock}>
      <SyntaxHighlighter
        language={language}
        style={colorScheme === "light" ? tomorrow : vs2015}
        wrapLines={true}
      >
        {code}
      </SyntaxHighlighter>
    </Paper>
  );
};

export default CodeBlock;
