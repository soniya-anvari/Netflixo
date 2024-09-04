import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieBox from "../Components/PopularMovieCart";
import Loading from "../Components/Loading";
import FilterMovie from "../Components/FilterMovies";
import { totalItems } from "../Hepler/helper";

function Movie() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filteredMovies, setFilteredMovie] = useState(movies);

  useEffect(() => {
    const fetchAllMovies = async () => {
      const totalPages = 16; // تعداد صفحات
      let allMovies = []; // برای ذخیره تمام فیلم‌ها

      try {
        for (let page = 6; page <= totalPages; page++) {
          const response = await axios.get(
            `http://moviesapi.ir/api/v1/movies?page=${page}`,
            {
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
              },
            }
          );

          allMovies = [...allMovies, ...response.data.data];
        }
        setMovies(allMovies);
        setFilteredMovie(allMovies);
      } catch (error) {
        setError(error.message);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllMovies();
  }, []);
  if (loading)
    return (
      <div className='container'>
        <Loading />
      </div>
    );
  if (filteredMovies.length == 0)
    return (
      <h1 className='container fs-2-8-rem text-color-white mt-5'>
        No video found
      </h1>
    );
  return (
    <div className='container mt-4'>
      <FilterMovie
        filteredMovies={filteredMovies}
        setFilteredMovie={setFilteredMovie}
        movies={movies}
      />
      <h2 className='my-5 text-color-white fs-2-8-rem'>
        Total <span className='icon-color'> {totalItems(filteredMovies)} </span>
        items Found
      </h2>
      <div className='row d-flex  flex-wrap MoviesContainer '>
        {filteredMovies.length > 0 &&
          filteredMovies.map((movie) => (
            <MovieBox key={movie.id} movie={movie} />
          ))}
      </div>{" "}
    </div>
  );
}

export default Movie;
