import React from "react";
import { menuItems } from "../constant/dashboardMenuItems";
import { Link, useLocation } from "react-router-dom";
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 5239aa8fab87dad0b7f6de47a79da3e847ed054f
import { IoMdExit } from "react-icons/io";

function DashboardMenu() {
  const { pathname } = useLocation();
  const exit = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
  };

<<<<<<< HEAD
=======

function DashboardMenu() {
  const { pathname } = useLocation();
  console.log(pathname);

>>>>>>> 5239aa8fab87dad0b7f6de47a79da3e847ed054f
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
=======
<<<<<<< HEAD
>>>>>>> 5239aa8fab87dad0b7f6de47a79da3e847ed054f
        <li>
          <Link onClick={exit}>
            <IoMdExit className='me-4' />
            Exit
          </Link>
        </li>
<<<<<<< HEAD
=======
=======
>>>>>>> 31c2d3d15c0fb4978e0bce72dcaf41ddc215c971
>>>>>>> 5239aa8fab87dad0b7f6de47a79da3e847ed054f
      </ul>
    </div>
  );
}

export default DashboardMenu;
