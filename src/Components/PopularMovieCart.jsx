import { FaHeart } from "react-icons/fa";
import { shortenTitle } from "../Hepler/helper";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  ADD_MOVIE,
  DELETE_MOVIE,
} from "../features/favoriteMovies/moviesSlice";

function PopularMovieCart({ movie }) {
  const [isLike, setIsLike] = useState(false);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const favoriteMovies = useSelector((state) => state.favorite);

  const toggleHandler = () => {
    if (!isLike) {
      dispatch(ADD_MOVIE(movie));
    } else {
      dispatch(DELETE_MOVIE(movie));
    }
    setIsLike(!isLike);
  };
  const clickHandler = () => {
    navigate(`/movie/${movie.id}`);
  };
  useEffect(() => {
    const isFavorite = favoriteMovies.FavoriteMovies.findIndex(
      (m) => m.id == movie.id
    );
    if (isFavorite != -1) setIsLike(true);
  }, []);
  return (
    <div className=' col-lg-3 col-md-6 col-sm-12 movie   '>
      <img src={movie.poster} className=' movieCart' onClick={clickHandler} />
      <div className='iconBox  p-4  '>
        <div className='d-flex justify-content-between align-items-center'>
          <p className='text-color-white fs-1-4-rem'>
            {shortenTitle(movie.title)}
          </p>
          <FaHeart
            onClick={() => toggleHandler(movie)}
            className={
              isLike ? "icon-color  iconHeart" : "text-color-white iconHeart"
            }
          />
        </div>
      </div>
    </div>
  );
}

export default PopularMovieCart;
