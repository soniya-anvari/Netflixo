import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  FavoriteMovies: [],
  total: 0,
};
const movieSlice = createSlice({
  name: "favoriteMovies",
  initialState,
  reducers: {
    ADD_MOVIE(state, action) {
      if (
        !state.FavoriteMovies.find((movie) => movie.id == action.payload.id)
      ) {
        state.FavoriteMovies.push(action.payload);
        state.total++;
      }
    },
    DELETE_MOVIE(state, action) {
      const newFavoriteMovies = state.FavoriteMovies.filter(
        (movie) => movie.id != action.payload.id
      );
      state.FavoriteMovies = newFavoriteMovies;
      state.total--;
    },
  },
});
export const { ADD_MOVIE, DELETE_MOVIE } = movieSlice.actions;
export default movieSlice.reducer;
