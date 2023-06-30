import CodeBlock from "../documentation/CodeBlock";

interface Props {
  data: unknown;
}

const JsonCodeBlock = ({ data }: Props): JSX.Element => {
  const getPrettyString = (data: any) => {
    return JSON.stringify(data, null, 2);
  };

  return <CodeBlock language="json" code={getPrettyString(data)} />;
};

export default JsonCodeBlock;
