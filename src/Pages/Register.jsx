import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import api from "../api/api";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Register() {
  const [fields, setFields] = useState({ email: "", name: "", password: "" });

  const changeHandler = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
    console.log(fields);
  };
  const submitHandler = async (event) => {
    event.preventDefault();

    try {
      const res = await api.post("/api/v1/register", fields);
      console.log("res", res);
    } catch (error) {
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
        <label className='text-color-sec  fw-bold fs-1-8-rem'>
          {" "}
          Email{" "}
        </label>{" "}
        <input
          name='email'
          type='email'
          placeholder='netflixo@gmail.com'
          className=' p-4 fs-1-8-rem text-color-white border-radius-0-4-rem'
        />
        <label className='text-color-sec  fw-bold fs-1-8-rem'> Fullname </label>{" "}
        <input
          name='name'
          type='text'
          placeholder='netflixo'
          className=' p-4 fs-1-8-rem text-color-white border-radius-0-4-rem'
        />
        <label className='text-color-sec  fw-bold fs-1-8-rem'> Password </label>{" "}
        <input
          name='password'
          type='password'
          placeholder='*********'
          className=' p-4 fs-1-8-rem text-color-white border-radius-0-4-rem'
        />
        <button
          type='submit'
          className='p-4 fs-1-8-rem cursor-p bg-btn-color text-color-white d-flex justify-content-center  gap-3  mt-3 align-items-center  border-radius-0-4-rem'>
          {" "}
          <FaArrowRightToBracket /> Sign Up{" "}
        </button>{" "}
        <p className='text-color-sec m-auto mt-4 fs-2-0-rem'>
          {" "}
          Already have an account ?{" "}
          <Link to='/login' className='first-text-color fw-bold me-3'>
            {" "}
            Login{" "}
          </Link>{" "}
        </p>
      </form>{" "}
    </div>
  );
}

export default Register;
