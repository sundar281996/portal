import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import Topbar from "./Topbar";

function Portal() {
  return (
    <div>
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Topbar />
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portal;
