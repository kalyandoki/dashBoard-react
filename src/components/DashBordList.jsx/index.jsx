import Graph from "../Graph";
import {
  RiDashboardFill,
  RiWechatChannelsLine,
  RiAccountPinCircleFill,
} from "react-icons/ri";
import {
  MdInventory,
  MdLocalShipping,
  MdIntegrationInstructions,
  MdBugReport,
} from "react-icons/md";
import { BsCart4 } from "react-icons/bs";
import { GiReturnArrow } from "react-icons/gi";
import { FaPeopleGroup } from "react-icons/fa6";
import { FcCalculator } from "react-icons/fc";

import "./index.css";

function DashBoardList() {
  return (
    <>
      <div className="dashboard-main-container">
        <div className="dash-container">
          <div className="min-dash-con">
            <RiDashboardFill className="dash-icons" />
            <h1 className="dash">Dashboard</h1>
          </div>
          <div className="min-dash-con">
            <MdInventory className="dash-icons-small-i" />
            <h1 className="list-of-names">Inventory</h1>
          </div>
          <div className="min-dash-con">
            <BsCart4 className="dash-icons-small-o" />
            <h1 className="list-of-names">Orders</h1>
          </div>
          <div className="min-dash-con">
            <GiReturnArrow className="dash-icons-small-r" />
            <h1 className="list-of-names">Returns</h1>
          </div>
          <div className="min-dash-con">
            <FaPeopleGroup className="dash-icons-small-c" />
            <h1 className="list-of-names">Customers</h1>
          </div>
          <div className="min-dash-con">
            <MdLocalShipping className="dash-icons-small-s" />
            <h1 className="list-of-names">Shipping</h1>
          </div>
          <div className="min-dash-con">
            <RiWechatChannelsLine className="dash-icons-small-ch" />
            <h1 className="list-of-names">Channel</h1>
          </div>
          <div className="min-dash-con">
            <MdIntegrationInstructions className="dash-icons-small-in" />
            <h1 className="list-of-names">Integrations</h1>
          </div>
          <div className="min-dash-con">
            <FcCalculator className="dash-icons-small-ca" />
            <select className="list-of-names-sel">
              <option>Calculators</option>
            </select>
          </div>
          <div className="min-dash-con">
            <MdBugReport className="dash-icons-small-re" />
            <select className="list-of-names-sel">
              <option>Reports</option>
            </select>
          </div>
          <div className="min-dash-con">
            <RiAccountPinCircleFill className="dash-icons-small-ac" />
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
