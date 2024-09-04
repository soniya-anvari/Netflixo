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
<<<<<<< HEAD
        <div className='col-lg-7 dashboardMenuOutlet  col-md-12 '>
=======
        <div className='col-lg-7 dashboardMenuOutlet me-5 col-md-12 '>
>>>>>>> 31c2d3d15c0fb4978e0bce72dcaf41ddc215c971
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
