import MainPage from "./Pages/MainPage"
import Layout from "./Layout/Layout"
import { Route, Routes } from "react-router-dom"
import Movie from "./Pages/Movie";

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
        /> < /
        Routes > <
        /Layout>
    )
}

export default App