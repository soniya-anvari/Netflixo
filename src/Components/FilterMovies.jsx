import { useEffect, useState } from "react";
import { rate, year } from "../constant/filterOptions";
import axios from "axios";

function FilterMovies({ filteredMovies, setFilteredMovie, movies }) {
  const [selectedGenre, setSelectedGenre] = useState("genre");
  const [genres, setGenres] = useState("");
  const [selectedRate, setSelectedRate] = useState("rate");
  const [selectedYear, setSelectedYear] = useState("year");
  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const res = await axios.get("http://moviesapi.ir/api/v1/genres");
        setGenres(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchGenres();
  }, []);

  const changeHandler = () => {
    let filter;
    const yearInt = parseInt(selectedYear);
    if (
      (selectedGenre == "genre" && selectedRate == "rate",
      selectedYear == "year")
    )
      setFilteredMovie(movies);

    if (selectedGenre == "genre") {
      filter = movies;
    } else {
      filter = movies.filter((movie) => movie.genres[0] == selectedGenre);
      console.log(filter);
    }
    if (selectedRate != "rate") {
      filter = filter.filter((movie) => movie.imdb_rating == selectedRate);
      console.log(filter);
    }
    if (selectedYear != "year") {
      console.log(yearInt);

      filter = filter.filter((movie) => {
        if (
          parseInt(movie.year) >= yearInt &&
          parseInt(movie.year) <= yearInt + 100
        )
          return movie;
      });
    }

    setFilteredMovie(filter);
  };

  return (
    <div className='bg-box-color row  d-flex  flex-wrap gap-5 selectBox'>
      <select
        className='col-lg-3 col-md-6 col-sm-6 py-3  px-5 border-radius-0-8-rem sec-bg-color text-color-white fs-1-8-rem '
        value={selectedGenre}
        onChange={(e) => {
          setSelectedGenre(e.target.value);
        }}>
        <option value='genre' selected='selected'>
          Category{" "}
        </option>{" "}
        {genres.length > 0 &&
          genres.map((genre) => (
            <option key={genre.id} value={genre.name}>
              {" "}
              {genre.name}{" "}
            </option>
          ))}{" "}
      </select>{" "}
      <select
        className='col-lg-3 col-md-6 col-sm-6 py-3  px-5 border-radius-0-8-rem sec-bg-color text-color-white fs-1-8-rem '
        value={selectedRate}
        onChange={(e) => {
          setSelectedRate(e.target.value);
        }}>
        <option value='rate' selected='selected'>
          Sort By Rate{" "}
        </option>
        {rate.map((r) => (
          <option key={r.id} value={r.rate}>
            {" "}
            {r.rate}{" "}
          </option>
        ))}
      </select>{" "}
      <select
        className='col-lg-3 col-md-6 col-sm-6 py-3  px-5 border-radius-0-8-rem sec-bg-color text-color-white fs-1-8-rem '
        value={selectedYear}
        onChange={(e) => {
          setSelectedYear(e.target.value);
        }}>
        <option value='year' selected='selected'>
          Sort By Year{" "}
        </option>{" "}
        {year.map((y) => (
          <option key={y.id} value={y.valueInt}>
            {" "}
            {y.value}{" "}
          </option>
        ))}
      </select>
      <button
        onClick={changeHandler}
        className='col-1 text-color-white fs-2-0-rem filterBtn  col-sm-12'>
        {" "}
        filter{" "}
      </button>
    </div>
  );
}

export default FilterMovies;
