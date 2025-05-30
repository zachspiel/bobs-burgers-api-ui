"use client";

import { ActionIcon, CopyButton, Flex, Paper, Text, Tooltip } from "@mantine/core";
import { IconCheck, IconCopy } from "@tabler/icons-react";
import classes from "./style.module.css";

const UrlBlock = ({ url }: { url: string }) => {
  return (
    <Paper className={classes.urlBlock}>
      <Flex p="md" c="blue" justify="space-between">
        <Text>{url}</Text>

        <CopyButton value={url} timeout={2000}>
          {({ copied, copy }) => (
            <Tooltip label={copied ? "Copied" : "Copy"} position="right">
              <ActionIcon
                color={copied ? "teal" : "gray"}
                onClick={copy}
                variant="transparent"
                aria-label="Copy URL"
              >
                {copied ? <IconCheck /> : <IconCopy />}
              </ActionIcon>
            </Tooltip>
          )}
        </CopyButton>
      </Flex>
    </Paper>
  );
};

export default UrlBlock;
