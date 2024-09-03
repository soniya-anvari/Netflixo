import React from "react";

function RecentMoviesBox({ movie }) {
  console.log(movie);

  return (
    <tr>
      <td>
        <img src={movie.poster} className='border-radius-0-4-rem' />
      </td>
      <td>{movie.title}</td>
      <td>{movie.genres[0]}</td>
      <td>{movie.country}</td>
      <td>{movie.year}</td>
    </tr>
  );
}

export default RecentMoviesBox;
