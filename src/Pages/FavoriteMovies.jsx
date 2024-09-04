import React from "react";
import { useSelector } from "react-redux";
import FavoriteMovieBox from "../Components/FavoriteMovieBox";
function FavoriteMovies() {
  const favoriteMovies = useSelector((state) => state.favorite);
  if (favoriteMovies.FavoriteMovies.length == 0)
    return (
      <h3 className='text-color-white fs-2-8-rem'>
        You have no favorite movies!{" "}
      </h3>
    );

  return (
    <div className='container bg-box-color p-5  border-radius-0-8-rem dashboardBox'>
      <table className='tableDashboard'>
        <thead>
          <tr className='bg-gray-color  '>
            <th scope='col'>Image</th>
            <th scope='col'>Name</th>
            <th scope='col'>Category</th>
            <th scope='col'>Country</th>

            <th scope='col'>Actions</th>
            <th className='p-0' scope='col'></th>
          </tr>
        </thead>

        {favoriteMovies.FavoriteMovies.map((movie) => (
          <FavoriteMovieBox movie={movie} />
        ))}
      </table>
    </div>
  );
}

export default FavoriteMovies;
