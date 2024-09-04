import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../features/favoriteMovies/moviesSlice";
import logger from "redux-logger";
const store = configureStore({
  reducer: {
    favorite: moviesReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
