import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import { IoPersonOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import Logo from "../assets/images/logo.png";
import { useSelector } from "react-redux";
<<<<<<< HEAD

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const favorite = useSelector((state) => state.favorite);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='navbar container'>
      <div className='navbar-container'>
        <div className='logo-container'>
          <img className='logo' src={Logo} alt='Logo' />
        </div>
        <div className={`menu ${isMenuOpen ? "activeHumburger" : ""}`}>
          <ul className='menu-list'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/movies'>Movies</Link>
            </li>
            <li>
              <Link to='/about-us'>About Us</Link>
            </li>
            <li>
              <Link to='/contact-us'>Contact Us</Link>
            </li>
          </ul>
          <div className='menu-icons'>
            <IoPersonOutline className='icon' />
            <Link to='/dashboard/favoritemovies'>
              <FaRegHeart className='icon' />
            </Link>
            <p className='favorite-total'>{favorite.total}</p>
          </div>
        </div>
        <div className='hamburger' onClick={toggleMenu}>
          <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
          <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
          <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
        </div>
      </div>
    </nav>
=======
function Navbar() {
  const favorite = useSelector((state) => state.favorite);

  return (
    <div className=' sec-bg-color py-5 navbar  '>
      {" "}
      <div className=' container '>
        {" "}
        <div className='row d-flex align-items-center justify-content-between '>
          <div className='col col-lg-2 col-md-12'>
            <img className='w-75' src={Logo} alt='Logo' />
          </div>{" "}
          <div className=' col col-lg-4 col-md-12 d-flex align-items-center '>
            <FiSearch className='icon-color ms-3 border-radius-0-8-rem cursor-p  fs-2-0-rem  w-8 h-10' />
            <input
              className='search-input sec-text-color border-radius-0-8-rem '
              type='text'
              placeholder='Search Movie Name from here'
            />
          </div>{" "}
          <div className='col col-lg-6 col-md-12 d-flex '>
            <ul className='d-flex align-items-center'>
              <li>
                <Link className='text-color-white fs-1-8-rem' to='/movies'>
                  {" "}
                  Movies{" "}
                </Link>{" "}
              </li>{" "}
              <li>
                <Link to='/about-us' className='text-color-white fs-1-8-rem  '>
                  {" "}
                  About Us{" "}
                </Link>{" "}
              </li>{" "}
              <li>
                <Link to='contact-us' className='text-color-white fs-1-8-rem  '>
                  {" "}
                  Contact Us{" "}
                </Link>{" "}
              </li>{" "}
            </ul>{" "}
            <div className='d-flex'>
              <IoPersonOutline className='text-color-white fs-2-6-rem ' />

              <FaRegHeart className='text-color-white fs-2-6-rem ' />
              <p className='text-color-white fs-1-2-rem favoritTotal'>
                {favorite.total}
              </p>
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
>>>>>>> 31c2d3d15c0fb4978e0bce72dcaf41ddc215c971
  );
}

export default Navbar;
