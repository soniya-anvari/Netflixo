import React from "react";

function CategoryBox({ genre }) {
  return (
    <tr>
      <td data-label='ID'>{genre.id}</td>
      <td data-label='Name'>{genre.name}</td>
    </tr>
  );
}

export default CategoryBox;
