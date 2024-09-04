import { FaEye } from "react-icons/fa";
import { shortenTitle } from "../Hepler/helper";
import { Link } from "react-router-dom";
import { DELETE_MOVIE } from "../features/favoriteMovies/moviesSlice";

import { useDispatch } from "react-redux";

function FavoriteMovieBox({ movie }) {
  const dispatch = useDispatch();
  return (
    <tr>
      <td data-label='Image'>
        <img src={movie.poster} className='border-radius-0-4-rem' />
      </td>
      <td data-label='Name'>{shortenTitle(movie.title)}</td>
      <td data-label='Category'>{movie.genres[0]}</td>
      <td data-label='Country'>{movie.country}</td>

      <td data-label='Actions'>
        <p
          onClick={() => dispatch(DELETE_MOVIE(movie))}
          className='icon-color cursor-p '>
          Remove
        </p>
      </td>
      <td className='pe-0'>
        <Link className='text-color-white' to={`/movie/${movie.id}`}>
          <FaEye className='m-0' />
        </Link>
      </td>
    </tr>
  );
}

export default FavoriteMovieBox;
