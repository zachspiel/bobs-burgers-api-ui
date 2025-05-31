import { Highlight, HighlightProps } from "@mantine/core";

interface Props {
  highlight: HighlightProps["highlight"];
  text: string;
}

const HighlightText = ({ text, highlight }: Props) => {
  return (
    <Highlight
      color="blue"
      highlight={highlight}
      highlightStyles={{
        backgroundColor: "rgba(59, 152, 252, 0.137)",
        borderColor: "#3b99fc",
        color: "#3b99fc",
      }}
    >
      {text}
    </Highlight>
  );
};

export default HighlightText;
