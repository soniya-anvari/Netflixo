import React from "react";
import React from "react";

function About() {
  return (
    <div className='container'>
      <div className='BannerAboutContact d-flex align-items-center fs-2-8-rem text-color-white justify-content-center'>
        <h3> About Us </h3>{" "}
      </div>
      <div className='text-color-white fs-1-8-rem text-justify aboutTexts'>
        <h2 className='my-5'> Welcome to our Netflixo </h2>{" "}
        <p>
          {" "}
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.Lorem Ipsum has been the industry 's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>{" "}
        <p>
          {" "}
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.Lorem Ipsum has been the industry 's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      </div>{" "}
      <div className='row d-flex gap-4 justify-content-center mt-5 aboutBoxs'>
        <div className='col-lg-5 col-md-12 col-sm-12 bg-box-color p-5  text-color-white border-radius-0-8-rem'>
          <h3 className='fs-2-8-rem '> 10 K </h3>{" "}
          <h4 className='fs-2-2-rem mt-3'> Listed Movies </h4>{" "}
          <p className='fs-1-6-rem fs-lighter text-color-for-paraghraph mt-3'>
            {" "}
            Lorem Ipsum is simply dummy text of the printing and{" "}
          </p>{" "}
        </div>{" "}
        <div className='col-lg-5 col-md-12 col-sm-12 bg-box-color p-5 border-radius-0-8-rem text-color-white '>
          <h3 className='fs-2-8-rem '> 8 K </h3>{" "}
          <h4 className='fs-2-2-rem mt-3 '> Lovely Users </h4>{" "}
          <p className='fs-1-6-rem fs-lighter text-color-for-paraghraph mt-3'>
            {" "}
            Completely free, without registration!Lorem Ipsum is simply{" "}
          </p>
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default About;
