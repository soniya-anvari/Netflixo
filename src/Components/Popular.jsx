import axios from "axios";
import { useEffect, useState } from "react";
import { CgPullClear } from "react-icons/cg";
import PopularMovieCard from "./PopularMovieCart";

function Popular() {
  const [popularVideos, setPopularVideos] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await axios.get("http://moviesapi.ir/api/v1/movies?page=9");
        setPopularVideos(res.data.data);
        console.log(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovies();
  }, []);
  return (
    <div>
      <div className='container '>
        <div className=' popularMovie d-flex align-items-center  '>
          <CgPullClear className='icon-color fs-2-8-rem m-0 ms-4' />
          <h3 className='text-color-white fs-2-4-rem '>
            {" "}
            Popular Movies{" "}
          </h3>{" "}
        </div>
        <div className='row MoviesContainer'>
          {" "}
          {popularVideos.length > 0 &&
            popularVideos.map((movie) => (
              <PopularMovieCard key={movie.id} movie={movie} />
            ))}{" "}
        </div>{" "}
      </div>
    </div>
  );
}

export default Popular;
