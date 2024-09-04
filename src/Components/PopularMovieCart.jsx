import { FaHeart } from "react-icons/fa";
import { shortenTitle } from "../Hepler/helper";
<<<<<<< HEAD
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
=======
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
>>>>>>> 31c2d3d15c0fb4978e0bce72dcaf41ddc215c971
import {
  ADD_MOVIE,
  DELETE_MOVIE,
} from "../features/favoriteMovies/moviesSlice";
<<<<<<< HEAD

function PopularMovieCart({ movie }) {
  const [isLike, setIsLike] = useState(false);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const favoriteMovies = useSelector((state) => state.favorite);

=======
function PopularMovieCart({ movie }) {
  const [isLike, setIsLike] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
>>>>>>> 31c2d3d15c0fb4978e0bce72dcaf41ddc215c971
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
<<<<<<< HEAD
  useEffect(() => {
    const isFavorite = favoriteMovies.FavoriteMovies.findIndex(
      (m) => m.id == movie.id
    );
    if (isFavorite != -1) setIsLike(true);
  }, []);
=======
>>>>>>> 31c2d3d15c0fb4978e0bce72dcaf41ddc215c971
  return (
    <div className=' col-lg-3 col-md-6 col-sm-12 movie   '>
      <img src={movie.poster} className=' movieCart' onClick={clickHandler} />
      <div className='iconBox  p-4  '>
        <div className='d-flex justify-content-between align-items-center'>
          <p className='text-color-white fs-1-4-rem'>
<<<<<<< HEAD
            {shortenTitle(movie.title)}
          </p>
=======
            {" "}
            {shortenTitle(movie.title)}{" "}
          </p>{" "}
>>>>>>> 31c2d3d15c0fb4978e0bce72dcaf41ddc215c971
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
