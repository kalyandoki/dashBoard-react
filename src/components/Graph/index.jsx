import { IoMdInformationCircleOutline } from "react-icons/io";
import "./index.css";
import GraphChart from "../GraphChart";
import PieChartDesign from "../PieChartDesign";

function Graph() {
  return (
    <>
      <div className="graph-container">
        <div>
          <h1 className="dash-set-2">Dashboard</h1>
        </div>
        <div className="graphs-container">
          <div className="line-graph">
            <div className="p-sale">
              <h1 className="sale">Sales vs Orders</h1>
              <IoMdInformationCircleOutline className="icon" />
            </div>
            <hr />
            <div className="graph-pie">
              <GraphChart />
            </div>
          </div>
          <div className="pie-chart">
            <div className="p-sale">
              <h1 className="sale">Portion of sales</h1>
              <IoMdInformationCircleOutline className="icon" />
            </div>
            <hr />
            <div className="graph-pie-2">
              <PieChartDesign />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Graph;
