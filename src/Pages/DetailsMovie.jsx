import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loading from "../Components/Loading";
import { MdDateRange } from "react-icons/md";
import { TbClockHour10 } from "react-icons/tb";
import Reviews from "../Components/Reviews";

function DetailsMovie() {
    const { id } = useParams()
    const [detailsMovie, setDetailsMovie] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        const getDetails = async() => {
            try {
                const res = await axios.get(`http://moviesapi.ir/api/v1/movies/${id}`)
                setDetailsMovie(res.data)


                setLoading(true)
                console.log(res.data);

            } catch (error) {
                console.log(error);
            }
        }
        getDetails()
        console.log('d', detailsMovie);

    }, [])
    if (!loading)
        return <Loading className = " mt-5" / >


            return ( < > < div className = "container mt-5" > <
                    div className = ' d-flex  row  ' >

                    <
                    div className = 'col-lg-6 col-md-12  postersBox mb-4' >
                    <
                    img src = { detailsMovie.poster }
                    className = ' posterDetails ' /
                    >
                    <
                    div className = 'MoviePhotos' > {
                        detailsMovie.images && detailsMovie.images.map(image =>
                            <
                            img src = { image }
                            />)} < /
                            div > <
                            /div> <
                            div className = 'detailsBox  d-flex flexumn justify-content-center col-lg-6 col-md-12 border-radius-1-6-rem '
                            style = {
                                { backgroundImage: `url(${detailsMovie.poster}) `, backgroundColor: 'rgba(0, 0, 0, 0.9)', backgroundBlendMode: "darken" }
                            } >
                            <
                            h3 className = 'fs-3-8-rem text-color-white' > { detailsMovie.title } < /h3> <
                            div className = 'text-color-white  d-flex align-items-center gap-4  flex-wrap fs-1-4-rem my-5' >
                            <
                            p className = 'py-1 px-3 bg-btn-color border-radius-0-4-rem ' > HD 4 K < /p> <
                            p > director: { detailsMovie.director } < /p> <
                            p > < MdDateRange className = 'icon-color m-0' / > { detailsMovie.year } < /p> <
                            p > < TbClockHour10 className = 'icon-color m-0' / > { detailsMovie.runtime } < /p> < /
                            div >
                            <
                            p className = 'text-color-white w-75  fs-1-4-rem text-color-for-paraghraph ' > { detailsMovie.plot } < /p> < /
                            div >

                            <
                            /

                            div >

                            <
                            /div> <
                            Reviews / >
                            <
                            />
                        )
                    }

                    export default DetailsMovie