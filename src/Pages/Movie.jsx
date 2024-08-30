import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MovieBox from "../Components/PopularMovieCart";
import Loading from "../Components/Loading";

function Movie() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchAllMovies = async() => {
            const totalPages = 16; // تعداد صفحات
            let allMovies = []; // برای ذخیره تمام فیلم‌ها

            try {
                for (let page = 6; page <= totalPages; page++) {
                    const response = await axios.get(`http://moviesapi.ir/api/v1/movies?page=${page}`, {
                        headers: {
                            'Content-Type': 'application/json', // تنظیم هدر Content-Type
                            'Accept': 'application/json', // تنظیم هدر Accept برای اطمینان از دریافت JSON
                        }
                    })
                    console.log(response.data.data)

                    allMovies = [...allMovies, ...response.data.data];
                    console.log(allMovies);



                }
                setMovies(allMovies);
                console.log("m", movies);



            } catch (error) {
                setError(error.message);
                console.log(error);

            } finally {
                setLoading(false);
            }
        };

        fetchAllMovies();
    }, []);
    if (loading)
        return ( <
            div className = 'container' > < Loading / > < /div>
        )
    return ( <
        div className = 'container' > <
        div className = 'row d-flex justify-content-center flex-wrap MoviesContainer mt-5 ' >

        {
            movies.length > 0 && movies.map(movie =>
                <
                MovieBox key = { movie.id }
                movie = { movie }
                / >

            )
        } <
        /div> < /
        div >
    )
}

export default Movie