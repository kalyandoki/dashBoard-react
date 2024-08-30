import "./index.css";
import { Chart } from "react-google-charts";

const data = [
  ["Task", "Hours per Day"],
  ["Woocommerce store", 55.8],
  ["Shopify store", 44.2],
];

export default function PieChartDesign() {
  return (
    <>
      <div className="pie">
        <Chart chartType="PieChart" data={data} width={300} height={300} />
        <div className="store-1">
          <div className="store">
            <div className="box"></div>
            <p>WooCommerce Store</p>{" "}
          </div>
          <div className="store">
            <div className="box-2"></div>
            <p>Shopify Store</p>
          </div>
        </div>
      </div>
    </>
  );
}
