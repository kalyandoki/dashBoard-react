import { Chart } from "react-google-charts";

const data = [
  ["Task", "Hours per Day"],
  ["Woocommerce store", 55.8],
  ["Shopify store", 44.2],
];

export default function Pie() {
  return (
    <div>
      <Chart chartType="PieChart" data={data} width={"100%"} height={"500px"} />
    </div>
  );
}
