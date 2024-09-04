import React from "react";
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";

function Contact() {
  return (
<<<<<<< HEAD
    <div className='container mt-4'>
=======
    <div className='container'>
>>>>>>> 31c2d3d15c0fb4978e0bce72dcaf41ddc215c971
      <div className='BannerAboutContact d-flex align-items-center fs-2-8-rem text-color-white justify-content-center'>
        <h3> Contact Us </h3>{" "}
      </div>
      <div>
        <div className='row  fw-lighter gap-3 text-color-white d-flex justify-content-center mt-5'>
          <div className='iconBoxContact col-lg-3 p-5  col-md-12 bg-box-color'>
            <div>
              {" "}
              <MdOutlineMail />
            </div>{" "}
            <h3> Email Us </h3>{" "}
            <p className='mt-3'>
              {" "}
              <span> info @zpunet.com </span> Interactively grow backend ideas
              for cross - platform models.{" "}
            </p>{" "}
          </div>{" "}
          <div className='iconBoxContact col-lg-3 p-5 color-for-border-or-hr col-md-12 bg-box-color'>
            <div>
              {" "}
              <FaPhoneAlt />
            </div>{" "}
            <h3> Email Us </h3>{" "}
            <p className='mt-3'>
              <span> info @zpunet.com </span> Interactively grow backend ideas
              for cross - platform models.{" "}
            </p>{" "}
          </div>{" "}
          <div className='iconBoxContact  col-lg-3 p-5 color-for-border-or-hr col-md-12 bg-box-color'>
            <div>
              {" "}
              <CiLocationOn />{" "}
            </div>{" "}
            <h3> Email Us </h3>{" "}
            <p className='mt-3'>
              {" "}
              <span> info @zpunet.com </span> Interactively grow backend ideas
              for cross - platform models.{" "}
            </p>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    </div>
  );
}

export default Contact;
