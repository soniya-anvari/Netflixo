import MainPage from "./Pages/MainPage"
import Layout from "./Layout/Layout"
import { Route, Routes } from "react-router-dom"
import Movie from "./Pages/Movie";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import DetailsMovie from "./Pages/DetailsMovie";

function App() {



    return ( <
        Layout >
        <
        Routes >
        <
        Route path = "/"
        element = { < MainPage / > }
        /> <
        Route path = "/movies"
        element = { < Movie / > }
        />  <
        Route path = "/about-us"
        element = { < About / > }
        /> <
        Route path = "/contact-us"
        element = { < Contact / > }
        />  <
        Route path = '/movie/:id'
        element = { < DetailsMovie / > }
        /> < /
        Routes > <
        /Layout>
    )
}

export default App