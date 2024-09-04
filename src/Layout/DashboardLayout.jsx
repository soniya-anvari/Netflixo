import React from "react";
import DashboardMenu from "../Components/DashboardMenu";
import { Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    <div className='container mt-5 '>
      <div className='row'>
        <div className='col-lg-4 col-md-12'>
          <DashboardMenu />
        </div>
        <div className='col-lg-7 dashboardMenuOutlet  col-md-12 '>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
