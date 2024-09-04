import { useEffect, useState } from "react";
import RecentMoviesBox from "./RecentMoviesBox";
import api from "../api/api";
function RecentMovies() {
  const [recentMovies, setRecentMovies] = useState([]);
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await api.get("/api/v1/movies?page=10");
        setRecentMovies(res.data.data);
        console.log(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovie();
  });
  return (
    <div>
      <table className='tableDashboard'>
<<<<<<< HEAD
        <thead>
          <tr className='bg-gray-color  '>
            <th scope='col'>Image</th>
            <th scope='col'>Name</th>
            <th scope='col'>Category</th>
            <th scope='col'>Country</th>
            <th scope='col'>Year</th>
          </tr>
        </thead>
=======
        <tr className='bg-gray-color  '>
          <th>Image</th>
          <th>Name</th>
          <th>Category</th>
          <th>Country</th>
          <th>Year</th>
        </tr>
>>>>>>> 31c2d3d15c0fb4978e0bce72dcaf41ddc215c971

        {recentMovies.map((movie) => (
          <RecentMoviesBox movie={movie} />
        ))}
      </table>
    </div>
  );
}

export default RecentMovies;
