import { ReactNode } from "react";

export type EndpointSchema = {
  key: string;
  type: string | ReactNode;
  description: string;
  nullable?: boolean;
}[];
