import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "6/30/2024 - 7/6/2024",
    sales: 1050,
    orders: 2400,
    amt: 2400,
  },
  {
    name: "7/7/2024 - 7/13/2024",
    sales: 600,
    orders: 1200,
    amt: 2210,
  },
  {
    name: "7/21/2024 - 7/27/2024",
    sales: 350,
    orders: 1200,
    amt: 2210,
  },
];

export default function GraphChart() {
  return (
    <LineChart
      width={800}
      height={500}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis yAxisId="left" />
      <YAxis yAxisId="right" orientation="right" />
      <Tooltip />
      <Legend />
      <Line
        yAxisId="left"
        type="monotone"
        dataKey="orders"
        stroke="#d18719"
        activeDot={{ r: 8 }}
      />
      <Line yAxisId="right" type="monotone" dataKey="sales" stroke="#82ca9d" />
    </LineChart>
  );
}
