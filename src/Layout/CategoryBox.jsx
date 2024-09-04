import React from "react";

function CategoryBox({ genre }) {
  return (
    <tr>
      <td>{genre.id}</td>
      <td>{genre.name}</td>
    </tr>
  );
}

export default CategoryBox;
