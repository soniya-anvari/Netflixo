import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className='bg-box-color Footer py-5 '>
      {" "}
      <div className=' container'>
        <div className=' row '>
          <div className='col-lg-3 col-md-6  '>
            <h3 className='text-color-white fs-2-4-rem fw-lighter'>
              {" "}
              Company{" "}
            </h3>{" "}
            <ul className='list-style-none mt-4'>
              <li>
                <Link> Home </Link>{" "}
              </li>{" "}
              <li>
                {" "}
                <Link> About Us </Link>
              </li>
              <li>
                {" "}
                <Link> Contact Us </Link>
              </li>
              <li>
                {" "}
                <Link> Movies </Link>
              </li>
            </ul>
          </div>{" "}
          <div className='col-lg-3 col-md-6 '>
            <h3 className='text-color-white fs-2-4-rem fw-lighter '>
              {" "}
              Top Categories{" "}
            </h3>{" "}
            <ul className='list-style-none  mt-4'>
              <li>
                <Link> Action </Link>{" "}
              </li>{" "}
              <li>
                {" "}
                <Link> Romantic </Link>
              </li>
              <li>
<<<<<<< HEAD
                <Link> Drama </Link>
              </li>
              <li>
=======
                {" "}
                <Link> Drama </Link>
              </li>
              <li>
                {" "}
>>>>>>> 31c2d3d15c0fb4978e0bce72dcaf41ddc215c971
                <Link> Historical </Link>
              </li>
            </ul>
          </div>{" "}
          <div className='col-lg-3 col-md-6 '>
            <h3 className='text-color-white fs-2-4-rem fw-lighter'>
              {" "}
              My Account{" "}
            </h3>{" "}
            <ul className='list-style-none  mt-4'>
              <li>
<<<<<<< HEAD
                <Link to='/dashboard'> Dashboard </Link>{" "}
              </li>
              <li>
                <Link to='/dashboard/favoritemovies'> My Favorites </Link>
              </li>
              <li>
                <Link to='/dashboard/addmovie'> Add Movie </Link>
              </li>
              <li>
                <Link to='/dashboard/categories'> Categories </Link>
=======
                <Link> Dashboard </Link>{" "}
              </li>{" "}
              <li>
                {" "}
                <Link> My Favorites </Link>
              </li>
              <li>
                {" "}
                <Link> Profile </Link>
              </li>
              <li>
                {" "}
                <Link> Change Password </Link>
>>>>>>> 31c2d3d15c0fb4978e0bce72dcaf41ddc215c971
              </li>
            </ul>
          </div>{" "}
          <div className='col-lg-3 col-md-6 '>
            <h3 className='text-color-white fs-2-4-rem fw-lighter '>
              {" "}
              Neflixo{" "}
            </h3>{" "}
            <ul className='list-style-none  mt-4'>
              <li>
                <Link> Lorem 196 Andrew Road, Suite 200 </Link>{" "}
              </li>{" "}
              <li>
                {" "}
                <Link> New York, NY 10007 </Link>
              </li>
              <li>
                {" "}
                <Link> Tell: +255 754 661 423 </Link>
              </li>
              <li>
                {" "}
                <Link> Email: info @zpunet.com </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}

export default Footer;
