import React from "react";

function RecentMoviesBox({ movie }) {
  console.log(movie);

  return (
    <tr>
      <td data-label='Image'>
        <img src={movie.poster} className='border-radius-0-4-rem' />
      </td>
      <td data-label='Name'>{movie.title}</td>
      <td data-label='Category'>{movie.genres[0]}</td>
      <td data-label='Country'>{movie.country}</td>
      <td data-label='Year'>{movie.year}</td>
    </tr>
  );
}

export default RecentMoviesBox;
