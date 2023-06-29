"use client";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

export interface EndpointSchemaEntry {
  key: string;
  type: string;
  description: string;
}

export type EndpointSchema = EndpointSchemaEntry[];

interface Props {
  name: string;
  schema: EndpointSchema;
}

const Schema = (props: Props) => {
  return (
    <div className="w-100 mb-3 mt-5">
      <h3 className="fw-bold">{props.name} Schema</h3>
      <DataTable value={props.schema} responsiveLayout="scroll">
        <Column field="key" header="Key"></Column>
        <Column field="type" header="Type"></Column>
        <Column field="description" header="Description"></Column>
      </DataTable>
    </div>
  );
};

export default Schema;
