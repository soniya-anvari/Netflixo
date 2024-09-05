import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoPersonOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import Logo from "../assets/images/logo.png";
import { useSelector } from "react-redux";

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
  );
}

export default Navbar;
