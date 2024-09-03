import { MdPublish } from "react-icons/md";
import { useState } from "react";
import api from "../api/api.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function AddMovie() {
  const successToast = () =>
    toast.success("The video was published!", {
      position: "top-center",
      theme: "dark",
    });
  const errorToast = () =>
    toast.error("Please fill in all the fields!", {
      position: "top-center",
      theme: "dark",
    });

  const [movieData, setMovieData] = useState({
    title: "",
    imdb_id: "",
    country: "",
    year: "",
  });
  const [isClick, setIsClick] = useState(false);
  const changeHandlerMovieData = (event) => {
    setMovieData({ ...movieData, [event.target.name]: event.target.value });
  };
  const publishMovie = (event) => {
    setIsClick(true);
    event.preventDefault();

    const postMovie = async () => {
      try {
        const res = await api.post("/api/v1/movies/multi", movieData);
        console.log(res);
        setIsClick(false);
        successToast();
      } catch (error) {
        setIsClick(false);
        errorToast();
      }
    };
    postMovie();
  };
  return (
    <div className='formContainerAddMovie  border-radius-0-8-rem border-color bg-box-color pb-4'>
      <h2 className='text-color-white fs-2-8-rem px-5 pt-5'>Create Movie</h2>
      <form
        className='d-flex  flexumn gap-4'
        onChange={() => changeHandlerMovieData(event)}
        onSubmit={() => publishMovie(event)}>
        <label className='text-color-sec  fw-bold fs-1-8-rem'>
          Movie Title
        </label>
        <input
          type='text'
          name='title'
          placeholder='Title'
          className=' p-4 fs-1-8-rem text-color-white border-radius-0-4-rem'
        />
        <label className='text-color-sec  fw-bold fs-1-8-rem'>
          Movie ID on IMDB
        </label>
        <input
          className=' p-4 fs-1-8-rem text-color-white border-radius-0-4-rem'
          type='text'
          name='imdb_id'
          placeholder='ID'
        />
        <label className='text-color-sec  fw-bold fs-1-8-rem'>Country</label>
        <input
          className=' p-4 fs-1-8-rem text-color-white border-radius-0-4-rem'
          type='text'
          placeholder='Country'
          name='country'
        />
        <label className='text-color-sec  fw-bold fs-1-8-rem'>Year</label>
        <input
          className=' p-4 fs-1-8-rem text-color-white border-radius-0-4-rem'
          type='text'
          placeholder='Year'
          name='year'
        />
        <button
          disabled={isClick}
          type='submit'
          className='p-3 mt-5 fs-1-8-rem  cursor-p bg-btn-color text-color-white d-flex justify-content-center  gap-3  mt-3 align-items-center  border-radius-0-4-rem'>
          <MdPublish className='m-0' /> Publish Movie
        </button>
        <ToastContainer />
      </form>
    </div>
  );
}

export default AddMovie;
