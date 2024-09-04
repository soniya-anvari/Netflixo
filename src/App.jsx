import MainPage from "./Pages/MainPage";
import Layout from "./Layout/Layout";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Movie from "./Pages/Movie";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import DetailsMovie from "./Pages/DetailsMovie";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Dashboard from "./Pages/Dashboard";
import MovieList from "./Pages/MovieList";
import AddMovie from "./Pages/AddMovie";
import Categories from "./Pages/Categories";
import FavoriteMovies from "./Pages/FavoriteMovies";
import DashboardLayout from "./Layout/DashboardLayout";
import BaseLayout from "./Layout/BaseLayout";
import MainLayout from "./Layout/MainLayout";
function App() {
  const refresh_token = localStorage.getItem("refresh_token");
  console.log({
    refresh_token,
  });
  const navigate = useNavigate();

  return (
    <Routes>
      <Route path='/' element={<BaseLayout />}>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<MainPage />} />
          <Route
            path='/movies'
            element={refresh_token ? <Movie /> : <Navigate to='/login' />}
          />{" "}
          <Route
            path='/about-us'
            element={refresh_token ? <About /> : <Navigate to='/login' />}
          />{" "}
          <Route
            path='/contact-us'
            element={refresh_token ? <Contact /> : <Navigate to='/login' />}
          />{" "}
          <Route
            path='/movie/:id'
            element={
              refresh_token ? <DetailsMovie /> : <Navigate to='/login' />
            }
          />
          <Route
            path='/login'
            element={refresh_token ? <Navigate to='/' /> : <Login />}
          />
          <Route path='/register' element={<Register />} />
          <Route />
          <Route path='/dashboard' element={<DashboardLayout />}>
            <Route
              index
              element={refresh_token ? <Dashboard /> : <Navigate to='/login' />}
            />

            <Route
              path='/dashboard/addmovie'
              element={refresh_token ? <AddMovie /> : <Navigate to='/login' />}
            />
            <Route
              path='/dashboard/categories'
              element={
                refresh_token ? <Categories /> : <Navigate to='/login' />
              }
            />
            <Route
              path='/dashboard/favoritemovies'
              element={
                refresh_token ? <FavoriteMovies /> : <Navigate to='/login' />
              }
            />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
