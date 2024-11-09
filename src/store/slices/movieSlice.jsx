import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: { movies: [], showCard: false, error: null },
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
    setShowCard: (state, action) => {
      state.showCard = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setMovies, setShowCard, setError } = movieSlice.actions;
export default movieSlice.reducer;
