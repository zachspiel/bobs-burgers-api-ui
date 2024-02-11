"use client";

import SyntaxHighlighter from "react-syntax-highlighter";
import {
  atomOneLight,
  vs2015,
} from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { Toast } from "primereact/toast";
import CopyToClipboard from "react-copy-to-clipboard";
import * as Hooks from "../../redux/hooks";
import { useRef } from "react";

interface Props {
  code: string;
  language: string;
  className?: string;
}

const CodeBlock = (props: Props): JSX.Element => {
  const state = Hooks.useAppSelector((state) => state.app);
  const isLightMode = state.currentTheme === "light-mode";
  const theme = isLightMode ? atomOneLight : vs2015;
  const toast = useRef<Toast>(null);
  const isUrl = props.language === "url";
  const className = props.language === "url" ? "url-block" : "";
  const rootClass = "pb-2 pt-2 position-relative " + props.className ?? "";

  const onCopy = () => {
    toast?.current?.show({
      severity: "success",
      summary: "Copied",
      detail: `Successfully copied ${isUrl ? "url" : "data"}. 🎉 `,
      life: 3000,
    });
  };

  if (props.code.length === 0) {
    return <></>;
  }
  return (
    <div className={rootClass}>
      <CopyToClipboard onCopy={() => onCopy()} text={props.code}>
        <span className="pi pi-copy copy-button p-button-rounded fs-5 p-button-outlined" />
      </CopyToClipboard>
      <SyntaxHighlighter
        language={props.language}
        style={theme}
        className={className}
        wrapLines={true}
      >
        {props.code}
      </SyntaxHighlighter>
      <Toast ref={toast} />
    </div>
  );
};

export default CodeBlock;
