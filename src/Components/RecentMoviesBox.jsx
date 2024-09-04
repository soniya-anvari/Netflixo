import React from "react";

function RecentMoviesBox({ movie }) {
  console.log(movie);

  return (
    <tr>
<<<<<<< HEAD
      <td data-label='Image'>
        <img src={movie.poster} className='border-radius-0-4-rem' />
      </td>
      <td data-label='Name'>{movie.title}</td>
      <td data-label='Category'>{movie.genres[0]}</td>
      <td data-label='Country'>{movie.country}</td>
      <td data-label='Year'>{movie.year}</td>
=======
      <td>
        <img src={movie.poster} className='border-radius-0-4-rem' />
      </td>
      <td>{movie.title}</td>
      <td>{movie.genres[0]}</td>
      <td>{movie.country}</td>
      <td>{movie.year}</td>
>>>>>>> 31c2d3d15c0fb4978e0bce72dcaf41ddc215c971
    </tr>
  );
}

export default RecentMoviesBox;
