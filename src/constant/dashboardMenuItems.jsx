import { TbLayoutDashboardFilled } from "react-icons/tb";

import { TbCategoryPlus } from "react-icons/tb";
import { IoIosAdd } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa6";
const menuItems = [
  {
    id: 1,
    title: "Dashboard",
    icon: TbLayoutDashboardFilled,
    route: "/dashboard",
  },
  { id: 3, title: "Add Movie", icon: IoIosAdd, route: "/dashboard/addmovie" },
  {
    id: 4,
    title: "Categories",
    icon: TbCategoryPlus,
    route: "/dashboard/categories",
  },
  {
    id: 5,
    title: " Favorite Movies",
    icon: FaRegHeart,
    route: "/dashboard/favoritemovies",
  },
];
export { menuItems };
