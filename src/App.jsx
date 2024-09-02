import MainPage from "./Pages/MainPage"
import Layout from "./Layout/Layout"
import { Navigate, Route, Routes, useNavigate } from "react-router-dom"
import Movie from "./Pages/Movie";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import DetailsMovie from "./Pages/DetailsMovie";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import { useEffect } from "react";

function App() {

    const refresh_token = localStorage.getItem('refresh_token')
    console.log({ refresh_token });
    const navigate = useNavigate()



    return ( <
        Layout >
        <
        Routes >
        <
        Route path = "/"
        element = { < MainPage / > }
        /> <
        Route path = "/movies"
        element = { refresh_token ? < Movie / > : < Navigate to = "/login" / > }
        />  <
        Route path = "/about-us"
        element = { refresh_token ? < About / > : < Navigate to = "/login" / > }
        /> <
        Route path = "/contact-us"
        element = { refresh_token ? < Contact / > : < Navigate to = "/login" / > }
        />  <
        Route path = '/movie/:id'
        element = { refresh_token ? < DetailsMovie / > : < Navigate to = "/login" / > }
        /> <
        Route path = '/login'
        element = { refresh_token ? < Navigate to = "/" / > : < Login / > }
        /> <
        Route path = '/register'
        element = { < Register / > }
        /> < /
        Routes > <
        /Layout>
    )
}

export default App