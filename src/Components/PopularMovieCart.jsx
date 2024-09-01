import { FaHeart } from "react-icons/fa";
import { shortenTitle } from "../Hepler/helper";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

function PopularMovieCart({ movie }) {
    const [isLike, setIsLike] = useState(false)
    const navigate = useNavigate()
    const clickHandler = () => {
        navigate(`/movie/${movie.id}`)

    }
    return ( <
        div onClick = { clickHandler }
        className = " col-lg-3 col-md-6 col-sm-12 movie   " >
        <
        img src = { movie.poster }
        className = " movieCart" /
        >
        <
        div className = "iconBox  p-4  " >
        <
        div className = "d-flex justify-content-between align-items-center" >
        <
        p className = "text-color-white fs-1-4-rem" > { shortenTitle(movie.title) } < /p> <
        FaHeart onClick = {
            () => setIsLike(!isLike)
        }
        className = { isLike ? 'icon-color  iconHeart' : 'text-color-white iconHeart' }
        / >

        <
        /
        div >




        <
        /div>




        <
        /div>
    )
}

export default PopularMovieCart