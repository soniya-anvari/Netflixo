import React from "react";
import { menuItems } from "../constant/dashboardMenuItems";
import { Link, useLocation } from "react-router-dom";
<<<<<<< HEAD
import { IoMdExit } from "react-icons/io";

function DashboardMenu() {
  const { pathname } = useLocation();
  const exit = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
  };


function DashboardMenu() {
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <div className='dashboardMenu  bg-box-color border-radius-0-8-rem'>
      <ul className='d-flex flexumn gap-5 fs-1-8-rem text-color-white '>
        {menuItems.map((item) => (
          <li key={item.id}>
            <Link
              to={item.route}
              className={
                pathname == item.route ? "active pe-4" : "notActive pe-4"
              }>
              {<item.icon />}
              {item.title}
            </Link>
          </li>
        ))}
<<<<<<< HEAD
        <li>
          <Link onClick={exit}>
            <IoMdExit className='me-4' />
            Exit
          </Link>
        </li>
=======
>>>>>>> 31c2d3d15c0fb4978e0bce72dcaf41ddc215c971
      </ul>
    </div>
  );
}

export default DashboardMenu;
