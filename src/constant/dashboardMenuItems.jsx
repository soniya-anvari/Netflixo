import { TbLayoutDashboardFilled } from "react-icons/tb";
<<<<<<< HEAD

import { TbCategoryPlus } from "react-icons/tb";
import { IoIosAdd } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa6";
=======
import { CiCircleList } from "react-icons/ci";
import { TbCategoryPlus } from "react-icons/tb";
import { IoIosAdd } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa6";

>>>>>>> 31c2d3d15c0fb4978e0bce72dcaf41ddc215c971
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
