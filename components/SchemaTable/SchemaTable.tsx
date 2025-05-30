import {
  Anchor,
  Badge,
  Paper,
  Table,
  TableTbody,
  TableTd,
  TableTh,
  TableThead,
  TableTr,
  Title,
  TitleProps,
} from "@mantine/core";
import { EndpointSchema } from "../../types/endpointSchema";

interface Props {
  schemaName: string;
  endpointSchema: EndpointSchema;
  titleProps?: TitleProps;
}

const SchemaTable = ({ schemaName, endpointSchema, titleProps = {} }: Props) => {
  const rows = endpointSchema.map((property) => (
    <TableTr key={property.key}>
      <TableTd>
        {property.key} {property.nullable && <Badge>nullable</Badge>}
      </TableTd>
      <TableTd>
        {property.type === "RELATIVES" ? (
          <>
            object[] (see <Anchor href="#relativeSchema">Relative below</Anchor>)
          </>
        ) : (
          property.type
        )}
      </TableTd>
      <TableTd>{property.description}</TableTd>
    </TableTr>
  ));

  return (
    <>
      <Title order={3} {...titleProps}>
        {schemaName} Schema
      </Title>

      <Paper withBorder radius="md" style={{ overflow: "hidden" }}>
        <Table style={{ tableLayout: "fixed" }}>
          <TableThead>
            <TableTr>
              <TableTh>Key</TableTh>
              <TableTh>Type</TableTh>
              <TableTh>Description</TableTh>
            </TableTr>
          </TableThead>
          <TableTbody>{rows}</TableTbody>
        </Table>
      </Paper>
    </>
  );
};

export default SchemaTable;
