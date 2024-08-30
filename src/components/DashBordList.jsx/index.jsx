import Graph from "../Graph";
import "./index.css";

function DashBoardList() {
  return (
    <>
      <div className="dashboard-main-container">
        <div className="dash-container">
          <h1 className="dash">Dashboard</h1>
          <div>
            <h1 className="list-of-names">Inventory</h1>
          </div>
          <div>
            <h1 className="list-of-names">Orders</h1>
          </div>
          <div>
            <h1 className="list-of-names">Returns</h1>
          </div>
          <div>
            <h1 className="list-of-names">Customers</h1>
          </div>
          <div>
            <h1 className="list-of-names">Shipping</h1>
          </div>
          <div>
            <h1 className="list-of-names">Channel</h1>
          </div>
          <div>
            <h1 className="list-of-names">Integrations</h1>
          </div>
          <div>
            <select className="list-of-names-sel">
              <option>Calculators</option>
            </select>
          </div>
          <div>
            <select className="list-of-names-sel">
              <option>Reports</option>
            </select>
          </div>
          <div>
            <select className="list-of-names-sel">
              <option>Account</option>
            </select>
          </div>
        </div>
        <Graph />
      </div>
    </>
  );
}

export default DashBoardList;
