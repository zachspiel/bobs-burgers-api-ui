import CodeBlock from './features/documentation/CodeBlock';
import { ROOT_URL } from './services/apiService';

export const getPrettyString = (data: any) => {
  return JSON.stringify(data, null, 2);
};

export const getUrlCodeBlock = (endpoint: string, className?: string) => {
  return (
    <CodeBlock
      language="url"
      code={`\n${ROOT_URL}/${endpoint}`}
      className={className}
    />
  );
};

export const getJsonCodeBlock = (exampleData: any) => {
  return <CodeBlock language="json" code={getPrettyString(exampleData)} />;
};
