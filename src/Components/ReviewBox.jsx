import React from "react";
import { FaStar } from "react-icons/fa";

function ReviewBox({ comment }) {
  const elements = [];

  for (let i = 0; i < comment.rate; i++) {
    elements.push(<FaStar className='me-1 fs-1-4-rem iconStar' />);
  }
  return (
    <div className='bg-box-color reviewBox mt-3 '>
      <div>
        <p className='fs-2-2-rem text-color-white'> {comment.name} </p>{" "}
        <p className='text-color-for-paraghraph fs-1-8-rem'>
          {" "}
          {comment.title}{" "}
        </p>{" "}
        <div className='d-flex '>
          {" "}
          {elements.map((star) => (
            <p> {star} </p>
          ))}{" "}
        </div>
      </div>{" "}
    </div>
  );
}

export default ReviewBox;
