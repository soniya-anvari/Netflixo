import React, { useEffect, useState } from 'react'
import { Autoplay, Pagination } from 'swiper/modules'
import { SwiperSlide, Swiper } from 'swiper/react'
import "swiper/css";
import axios from 'axios';
import { BsBookmarkStar } from "react-icons/bs";

function TopeRate() {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        const fetchMovies = async() => {
            try {
                const res = await axios.get('http://moviesapi.ir/api/v1/movies?page=5')
                setMovies(res.data.data)
                console.log(res.data.data);


            } catch (error) {
                console.log(error);


            }
        }
        fetchMovies()

    }, [])

    return ( <
        div className = 'container' >
        <
        div className = "  popularMovie d-flex align-items-center    " >
        <
        BsBookmarkStar className = "icon-color fs-2-8-rem m-0 ms-4" / >
        <
        h3 className = "text-color-white fs-2-4-rem " > Top Rated < /h3>  < /
        div >

        <
        Swiper slidesPerView = { 1 }
        spaceBetween = { 10 }
        pagination = {
            {
                clickable: true,
            }
        }

        breakpoints = {
            {

                768: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                1400: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                },
            }
        }
        modules = {
            [Pagination, Autoplay]
        }
        loop = { true }
        autoplay = {
            {
                delay: 2500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            }
        }
        className = "swiper  swiper-slider " > {
            movies.map(movie =>
                <
                SwiperSlide key = { movie.id } >
                <
                img src = { movie.poster }
                alt = { movie.title }
                />   < /
                SwiperSlide >
            )
        }


        <
        /
        Swiper >
        <
        /div>
    )
}

export default TopeRate