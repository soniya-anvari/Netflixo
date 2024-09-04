import React, { useEffect, useState } from "react";
import logo from "../assets/images/logo.png";
import api from "../api/api";

import { Link, useNavigate } from "react-router-dom";
import { FaArrowRightToBracket } from "react-icons/fa6";

function Login() {
  const [isClick, setIsClick] = useState(false);

  const [fields, setFields] = useState({
    grant_type: "",
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const changeHandler = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };
  const submitHandler = async (event) => {
    event.preventDefault();
    setIsClick(true);

    const { username, password } = fields;

    let formData = new FormData();
    formData.append("grant_type", "password");
    formData.append("username", username);
    formData.append("password", password);

    try {
      const res = await api.post("/oauth/token", formData);
      setIsClick(false);
      localStorage.setItem("access_token", res.data.access_token);
      localStorage.setItem("refresh_token", res.data.refresh_token);

      navigate("/");
    } catch (error) {
      setIsClick(false);
      console.log(error);
    }
  };
  return (
    <div className='formContainer'>
      <form
        onChange={changeHandler}
        value={fields}
        onSubmit={submitHandler}
        className='d-flex  flexumn gap-4   border-radius-0-8-rem border-color bg-box-color mt-5'>
        <img src={logo} className='w-25 h-25 m-auto ' />
        <label className='text-color-sec  fw-bold fs-1-8-rem'>Email</label>{" "}
        <input
          name='username'
          type='text'
          placeholder='netflixo@gmail.com'
          className=' p-4 fs-1-8-rem text-color-white border-radius-0-4-rem'
        />
        <label className='text-color-sec  fw-bold fs-1-8-rem'> Password </label>
        <input
          name='password'
          type='password'
          placeholder='********'
          className=' p-4 fs-1-8-rem text-color-white border-radius-0-4-rem'
        />
        <button
          type='submit'
          disabled={isClick}
          className='p-4 fs-1-8-rem  cursor-p bg-btn-color text-color-white d-flex justify-content-center  gap-3  mt-3 align-items-center  border-radius-0-4-rem'>
          <FaArrowRightToBracket /> Login
        </button>
        <p className='text-color-sec m-auto mt-4 fs-2-0-rem'>
          Don 't have an account ?
          <Link to='/register' className='first-text-color fw-bold me-3 '>
            Sign Up
          </Link>
        </p>
      </form>{" "}
    </div>
  );
}

export default Login;
