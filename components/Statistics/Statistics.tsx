import {
  TOTAL_BURGERS,
  TOTAL_CHARACTERS,
  TOTAL_END_CREDITS,
  TOTAL_EPISODES,
  TOTAL_PEST_CONTROL_TRUCKS,
  TOTAL_STORES_NEXT_DOOR,
} from "@bobs-burgers-api/util/constants";
import { BarChart } from "@mantine/charts";

const data = [
  {
    endpoint: "Total Items Per Endpoint",
    Characters: TOTAL_CHARACTERS,
    "Burgers of the Day": TOTAL_BURGERS,
    "End Credits": TOTAL_END_CREDITS,
    Episodes: TOTAL_EPISODES,
    "Stores Next Door": TOTAL_STORES_NEXT_DOOR,
    "Pest Control Trucks": TOTAL_PEST_CONTROL_TRUCKS,
  },
];

const Statistics = () => {
  return (
    <BarChart
      mt="xl"
      h={300}
      data={data}
      withBarValueLabel
      dataKey="endpoint"
      withLegend
      withTooltip={false}
      xAxisProps={{ tickMargin: 15, orientation: "top" }}
      series={[
        { name: "Characters", color: "blue.6" },
        {
          name: "Burgers of the Day",
          color: "violet.6",
        },
        { name: "End Credits", color: "teal.6" },
        { name: "Episodes", color: "pink.6" },
        { name: "Pest Control Trucks", color: "cyan.6" },
        { name: "Stores Next Door", color: "orange.6" },
      ]}
      tickLine="y"
    />
  );
};

export default Statistics;
