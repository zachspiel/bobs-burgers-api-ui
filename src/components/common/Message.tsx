"use client";
import { Message as PrMessage } from "primereact/message";

interface Props {
  message: string | JSX.Element;
}

const Message = (props: Props): JSX.Element => {
  return (
    <PrMessage severity="info" className="highlight-block mb-3" content={props.message} />
  );
};

export default Message;
