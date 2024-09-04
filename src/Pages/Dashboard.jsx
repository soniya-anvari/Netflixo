import { CiCircleList } from "react-icons/ci";
import RecentMovies from "../Components/RecentMovies";
import { TbCategoryPlus } from "react-icons/tb";

function Dashboard() {
  return (
    <div className='container bg-box-color p-5 border-radius-0-8-rem dashboardBox'>
      <h2 className='text-color-white fs-2-8-rem '>Dashboard</h2>
      <div className='row m-0 mt-5 '>
        <div className='col-lg-4 col-sm-8 ms-5 sec-bg-color border-radius-0-4-rem text-color-white d-flex fs-1-6-rem p-4 align-items-center'>
          <CiCircleList className='me-0 ms-4 IconDashboard bg-orange-for-icon' />
          <div>
            <h3 className='fw-lighter'>Total Movies</h3>
            <p>110</p>
          </div>
        </div>
        <div className='col-lg-4 col-sm-8 ms-5 sec-bg-color  border-radius-0-4-rem text-color-white d-flex fs-1-6-rem p-4 align-items-center secBoxDashboard'>
          <TbCategoryPlus className='me-0 ms-4 IconDashboard bg-blue-for-icon' />
          <div>
            <h3 className='fw-lighter'>Total Categories</h3>
            <p>21</p>
          </div>
        </div>
      </div>
      <div>
        <p className='text-color-sec  fs-2-0-rem my-4'>Recent Movies</p>
        <RecentMovies />
      </div>
    </div>
  );
}

export default Dashboard;
