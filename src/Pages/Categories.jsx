import React, { useState } from "react";
import api from "../api/api";
<<<<<<< HEAD
import CategoryBox from "../Components/CategoryBox";
=======
import CategoryBox from "../Layout/CategoryBox";
>>>>>>> 31c2d3d15c0fb4978e0bce72dcaf41ddc215c971
function Categories() {
  const [genres, setGenres] = useState([]);
  useState(() => {
    const fetchGenres = async () => {
      try {
        const res = await api.get("/api/v1/genres");
        setGenres(res.data);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchGenres();
  }, []);
  return (
    <div className='container bg-box-color p-5 border-radius-0-8-rem dashboardBox'>
      <h2 className='text-color-white fs-2-8-rem pt-5'>Categories</h2>
      <table className='tableDashboard tableCategory mt-5 '>
<<<<<<< HEAD
        <thead>
          <tr className='bg-gray-color'>
            <th scope='col'>ID</th>
            <th scope='col'>Name</th>
          </tr>
        </thead>

        {genres.map((genre) => (
          <CategoryBox genre={genre} key={genre.id} />
=======
        <tr className='bg-gray-color'>
          <th>ID</th>
          <th>Name</th>
        </tr>

        {genres.map((genre) => (
          <CategoryBox genre={genre} />
>>>>>>> 31c2d3d15c0fb4978e0bce72dcaf41ddc215c971
        ))}
      </table>
    </div>
  );
}

export default Categories;
