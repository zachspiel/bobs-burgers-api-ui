import { Button } from "primereact/button";
import { Card } from "primereact/card";
import React from "react";
interface Props {
  title: string;
  image: string;
  about: string;
  author: string;
  link: string;
}
const Project = (props: Props): JSX.Element => {
  const header = (
    <img
      src={props.image}
      alt={props.title}
      style={{ maxHeight: "300px", minHeight: "300px" }}
    />
  );
  const footer = (
    <span>
      <a
        className="p-button p-button-secondary p-button-small"
        href={props.link}
        target="_blank"
        rel="noreferrer"
      >
        <span className="p-button-icon p-c p-button-icon-left pi pi-github" />
        <span className="p-button-label p-c">View Source</span>
      </a>
    </span>
  );

  return (
    <Card
      title={props.title}
      subTitle={props.author}
      style={{ width: "25em" }}
      footer={footer}
      header={header}
    >
      {props.about}
    </Card>
  );
};

export default Project;
