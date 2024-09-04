import axios from "axios";
import React, { useEffect, useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaHeart } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";

function Banner() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await axios.get("http://moviesapi.ir/api/v1/movies?page=4");
        setMovies(res.data.data);
        console.log(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div className=' sec-bg-color'>
      <Swiper
        direction='vertical'
        modules={[Autoplay]}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        className=' banner  row  '>
        {" "}
        {movies.length > 0 &&
          movies.map((movie, index) => (
            <SwiperSlide key={index} className='col col-lg-12'>
              <div
                style={{
                  backgroundImage: `url(${movie.poster})`,
                }}
                className='slide-content  border-radius-0-8-rem '>
                <div className='contentSlider '>
                  <h2> {movie.title} </h2>{" "}
                  <div className='d-flex mt-2'>
                    {" "}
                    <p className='first-text-color fs-1-6-rem'>
                      {" "}
                      {movie.genres[0]}{" "}
                    </p>{" "}
                    <div className='d-flex  align-items-center'>
                      {" "}
                      <MdOutlineDateRange className='icon-color ms-2 fs-1-6-rem' />
                      <p className='first-text-color fs-1-6-rem '>
                        {" "}
                        {movie.year}{" "}
                      </p>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className='mt-4'>
                    <button className='py-3 px-5 border-radius-0-8-rem bg-btn-color text-color-white fs-1-8-rem'>
                      {" "}
                      Watch{" "}
                    </button>{" "}
                    <FaHeart className='heartIcon' />
                  </div>
                </div>{" "}
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}

export default Banner;
