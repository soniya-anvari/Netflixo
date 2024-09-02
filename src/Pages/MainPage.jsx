import Banner from "../Components/Banner";
import Popular from "../Components/Popular";
import DownloadMovie from "../Components/DownloadMovie";
import TopeRate from "../Components/TopeRate";
import api from "../api/api";
import { useEffect } from "react";


function MainPage() {

    useEffect(() => {
        const fetchMovies = async() => {
            try {
                const res = await api.get('/api/user')

                console.log(res);


            } catch (error) {
                console.log(error);


            }
        }
        fetchMovies()

    }, [])
    return ( <
        div >

        <
        Banner / >
        <
        Popular / >
        <
        DownloadMovie / >
        <
        TopeRate / >



        <
        /div>
    )
}

export default MainPage